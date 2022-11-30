<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Http\Resources\AdminUserResources;
use App\Http\Controllers\Auth\EmailVerification;
use App\Models\User;
use Inertia\Inertia;
use Carbon\Carbon;

class UserRolesController extends Controller
{
    public function index (Request $request) {
        $request->validate([
            'page' => ['nullable', 'numeric', 'min:1', 'regex:/(^([0-9]+)(\d+)?$)/u'],
            'sort' => ['nullable', 'string', 'regex:/(^([a-zA-Z]+)(\d+)?$)/u']
        ]);

        return Inertia::render('UserRoles/UsersList', [
            'params' => $request->input(),
            'users' => $this->listUsers($request->input('sort')),
        ]);
    }

    /**
     * Display page to view and edit every user information
     * @return Inertia\Render
     */
    public function viewEditUserGeneral ($user) {
        return Inertia::render('UserRoles/GeneralViewEditUser', [
            'user' => new AdminUserResources(User::find($user)),
        ]);
    }

    /**
     * Catch, process and save user data changes to USERS table
     * @return response
     */
    public function saveEditUser ($user, Request $request) {
        $request->validate([
            'fname' => ['required', 'string', 'min:2'],
            'sname' => ['required', 'string', 'min:2'],
            'email' => ['required', 'email', 'min:10', 'unique:users,email,'.$user],
            'auto_verification' => ['required', 'boolean'],
            'password' => ['nullable', 'string', 'min:8'],
            'gender' => ['required', 'string', 'in:male,female']
        ]);

        $user = User::find($user);
        $user->update([
            'fname' => $request->fname,
            'sname' => $request->sname,
            'email' => $request->email,
            'email_verified_at' => $this->emailVerification($user, $request),
            'password' => !empty($user->default_password) && $user->default_password !== $request->password ? Hash::make($request->password) : $user->password,
            'default_password' => !empty($user->default_password) ? $request->password : null,
            'gender' => $request->gender,
        ]);

        return back()->with('message', $user->fname."'s profile settings successfully saved.");
    }

    /**
     * Display page to edit related roles and permission of selected user
     * @return Inertia\Render
     */
    public function viewEditUserRole ($user) {
        return Inertia::render('UserRoles/EditUserRole', [
            'user' => new AdminUserResources(User::find($user)),
            'roles' => Role::where('id', '!=', 1)->with('permissions')->get(),
        ]);
    }

    /**
     * Save user role
     * @return response
     */
    public function saveUserRole ($user, Request $request) {
        $maxRoles = count(Role::all());
        $request->validate([
            'roles' => ['required', 'numeric', 'min:1', 'not_in:1', 'max:'.$maxRoles],
            'permissions' => ['required', 'array', 'min:1']
        ]);

        /**
         * Selected user's data
         * Go through all current user's roles
         * and then remove current user's roles
         */
        $user = User::where('id', $user)->with('roles')->first();
        foreach($user->roles as $role) {
            $user->removeRole($role->name);
        }
        
        //Find and get selected role from table
        $role = Role::where('id', $request->roles)->with('permissions')->first();
        $user->assignRole($role->name); //Assign found role to current user

        /**
         * Go through all user's current permissions
         * Check which permission is not equal to permissions of selected role
         * and remove the one which is not in the list
         */
        foreach ($user->permissions as $permission) {
            if (!in_array($permission->name, $request->permissions)) {
                $user->revokePermissionTo($permission);
            }
        }

        /**
         * Loop through permissions of selected role and find them
         * give assign all permissions of found role to current user
         */
        foreach ($role->permissions as $permission) {
            $user->givePermissionTo($permission->name);
        }

        return back()->with('message', $user->fname."'s role successfully updated.");

    }

    /**
     * Force email verification - generate and send link to user
     */
    public function sendLink ($user) {
        $user = User::find($user);
        $url = EmailVerification::url('verification.verify', $user);
        $sendLink = EmailVerification::sendLink($url, $user);

        return back()->with('message', ["email_verification_sent" => "Email verification link successfully sent to ".$user->email]);
    }

    /**
     * List all get users, sort users
     * @return Collection
     */
    private function listUsers($sort) {
        $users = User::where('id', '!=', Auth::guard('web')->user()->id)
        ->select('id', 'fname', 'sname', 'email', 'email_verified_at', 'gender')
        ->paginate(15);

        $this->sortUsers($sort, $users);

        return $users;
    }

    /**
     * Get list of users and sort them
     * @return Collection
     */
    private function sortUsers($sort, $users) {
        switch ($sort) {
            case 'az':
                $sortedResult = $users->getCollection()->sortBy('fname')->values();
                $users->setCollection($sortedResult);
                break;
            case 'za':
                $sortedResult = $users->getCollection()->sortByDesc('fname')->values();
                $users->setCollection($sortedResult);
                break;
            case 'oldest':
                $sortedResult = $users->getCollection()->sortByDesc('created_at')->values();
                $users->setCollection($sortedResult);
                break;
            case 'newest':
                $sortedResult = $users->getCollection()->sortBy('created_at')->values();
                $users->setCollection($sortedResult);
                break;
            default:
                $sortedResult = $users->getCollection()->sortBy('id')->values();
                $users->setCollection($sortedResult);
                break;
        }
        return false;
    }

    /**
     * Display page to create and add new user to record
     * @return Inertia\Render
     */
    public function viewCreateUser () {
        return Inertia::render('UserRoles/CreateUser'); 
    }

    /**
     * Create new user and post data to the record
     * @return response|Array
     */
    public function createUser (Request $request) {
        $request->validate([
            'fname' => ['required', 'string', 'min:2', 'max:64'],
            'sname' => ['required', 'string', 'min:2', 'max:64'],
            'email' => ['required', 'min:8', 'max:64', 'unique:users'],
            'auto_verification' => ['required', 'boolean'],
            'password' => ['required', 'string', 'min:6', 'max:64'],
            'gender' => ['required', 'string', 'in:female,male', 'min:4', 'max:6'],
            'secure_password' => ['required', 'boolean']
        ]);
        
        $user = User::create([
            'fname' => $request->fname,
            'sname' => $request->sname,
            'email' => $request->email,
            'email_verified_at' => $request->auto_verification ? now() : null,
            'password' => Hash::make($request->password),
            'default_password' => $request->secure_password ? null : $request->password,
            'gender' => $request->gender
        ]);

        if ($user) {
            if(!$request->auto_verification) {
                $url = EmailVerification::url('verification.verify', $user);
                $sendLink = EmailVerification::sendLink($url, $user);
            }
            return back()->with('message', [
                'new_user_success' => $user->fname."'s account successfully created.",
                'new_user_data' => [
                    'id' => $user->id
                ]
            ]);
        }
        return back()->with('message', "Creating new user failed. Please try again later.");
    }

    /**
     * Checks if email is change or auto-verification is enabled to auto-verify the current/new email
     */
    private function checkEmailVerifiedAt ($user, $request) {
        //$user->email !== $request->email && $request->auto_verification ? now() : null
        if (($user->email === $request->email) && !$request->auto_verification) {
            return $user->email_verified_at;
        }

        if (($user->email !== $request->email) && $request->auto_verification) {
            return now();
        }
        
        if (($user->email !== $request->email) && !$request->auto_verification) {
            return null;
        }
    }
}
