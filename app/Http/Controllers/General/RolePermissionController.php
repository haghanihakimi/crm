<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use Inertia\Inertia;

class RolePermissionController extends Controller
{
    public function index (Request $request) {
        return Inertia::render('RolesPermissions/ViewRolesPermissions', [
            'roles' => Role::where('name', '!=', 'admin')->with('permissions')->select('id', 'name')->get(),
            'permissions' => Permission::where('name', '!=', 'SuperUser')
            ->select(DB::raw('id as value'), DB::raw('name as label'))->get(),
        ]);
    }

    public function saveChanges (Request $request) {
        $request->validate([
            'role' => ['required', 'numeric', 'min:1', 'not_in:1'],
            'permission' => ['required', 'array', 'min:1']
        ]);

        foreach ($request->permission as $permission) {
            $roles = Role::where('id', $request->role)->with('permissions')->get();
            foreach ($roles as $role) {
                //Assign any new permission to selected role
                $role->givePermissionTo($permission);

                foreach ($role->permissions as $rolePermission) {
                    if (!in_array($rolePermission->id, $request->permission)) {
                        //Remove any permission which is unselected by user and doesn't exist in $request->permission array
                        $role->revokePermissionTo($rolePermission);
                    }
                }
            }
        }

        return back()->with('message', ['role_permissions_saved' => "Changes successfuly saved."]);
    }
}
