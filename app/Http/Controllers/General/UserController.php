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

class UserController extends Controller
{
    /**
     * General Settings page for the current Logged In user
     */
    public function userGeneralSettingsView() {
        return Inertia::render('Auth/GeneralSettings'); 
    }

    /**
     * Update all changes from general settings tab
     */
    public function updateGeneralSettings(Request $request) {
        $request->validate([
            'first_name' => ['required', 'string', 'min:2'],
            'surname' => ['required', 'string', 'min:2'],
            'gender' => ['required', 'string', 'in:female,male'],
            'birth_date' => ['nullable', 'date', 'before:15 years ago']
        ]);
        $update = User::where('id', Auth::guard('web')->user()->id)->update([
            'fname' => $request->first_name,
            'sname' => $request->surname,
            'gender' => $request->gender,
            'bdate' => !empty($request->birth_date) ? Carbon::parse($request->birth_date)->format('Y-m-d') : null
        ]);
        
        if ($update) {
            return back()->with('message', ['general_settings_update' => 'Your profile successfully updated.']);
        }
        return back()->with('message', ['general_settings_update' => 'OOPS! Sorry, something wento wrong with updating your profile. Please check all inputs and try again.']);
    }

    /**
     * Security Settings page for the current Logged in user
     */
    public function userSecuritySettingsView() {
        return Inertia::render('Auth/SecuritySettings'); 
    }

    /**
     * Check if current user's email address is verified accept change
     */
    public function updateEmailAddress(Request $request) {
        $user = Auth::guard('web')->user();
        if ($user->email_verified_at) {
            $request->validate(['email' => ['required', 'email', 'unique:users,email,'.$user->id.',id']]);

            if (User::where('id', $user->id)->update(['email' => $request->email,'email_verified_at' => null])) {
                $url = EmailVerification::url('verification.verify', User::find($user->id));
                $sendLink = EmailVerification::sendLink($url, User::find($user->id));
                
                return back()->with('message', 
                    ['security_email_update' => 
                        'Your email successfuly updated. A verification link has been sent to your new email address. Please verify your new email address before you be able to change it.'
                    ]);
            }
            return back()->with('message', 
                ['security_email_update' => 
                    'OOPS! Sorry, something went wrong with updating your email. Please check your new email address then try agian.'
                ]);
        }
        return back()->with('message', 
            ['security_email_update' => 
                'OOPS! Sorry, you must verify your current email address to be able to change it. If you are unable to verify your email address please contact administrator ASAP.'
            ]);
    }

    /**
     * Check if entered current password is correct and then change the password
     */
    public function updatePassword(Request $request) {
        $request->validate([
            'current_password' => ['nullable', 'min:6', 'string'],
            'password' => ['nullable', 'required_with:current_password', 'min:6', 'string'],
            'password_confirmation' => ['nullable', 'required_with:password', 'same:password', 'min:6', 'string']
        ]);
        $user = Auth::guard('web')->user();
        if (Hash::check($request->current_password, $user->password)) {
            if (User::where('id', $user->id)->update(['password' => Hash::make($request->password_confirmation)])) {
                return back()->with('message', 
                    ['security_settings_update' => 
                        'Your password updated successfully.'
                    ]);
            }
            return back()->with('message', 
                ['security_settings_update' => 
                    'OOPS! Sorry, something went wrong with updating your password. Please check all required fields then try again.'
                ]);
        }
        return back()->with('message', 
            ['security_settings_update' => 
                'OOPS! Sorry, given password do not much your current password. Please check your current password then try again.'
            ]);
    }
}
