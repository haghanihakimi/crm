<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Illuminate\Support\Facades\Auth;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            //'csrf' => csrf_token(),
            'auth' => [
                'authenticate' => Auth::guard('web')->check(),
                'user' => Auth::guard()->check() ? Auth::guard('web')->user() : [],
            ],
            'flash' => [
                'message' => fn () => $request->session()->get('message')
            ],
            'abilities' => $this->abilities(),
            // 'status' => session('status'),
            // 'mail_notification_failure' => session('mail_notification_failure'),
            // 'ziggy' => function () {
            //     return (new Ziggy)->toArray();
            // },
        ]);
    }

    private function abilities () {
        $authenticate = Auth::guard('web')->check();
        $user = Auth::guard('web')->check() ? Auth::guard('web')->user() : [];
        
        $abilities = [];

        if (Auth::guard('web')->check()) {
            $abilities = [
                'canReadCustomers' => $user->hasRole('admin') || $user->hasPermissionTo('read customers'),
                'canEditCustomers' => $user->hasRole('admin') || $user->hasPermissionTo('edit customers'),
                'canCreateCustomers' => $user->hasRole('admin') || $user->hasPermissionTo('create customers'),
                'canExportCustomers' => $user->hasRole('admin') || $user->hasPermissionTo('export customers'),
                'canReadBrands' => $user->hasRole('admin') || $user->hasPermissionTo('read brands'),
                'canEditBrands' => $user->hasRole('admin') || $user->hasPermissionTo('edit brands'),
                'canCreateBrands' => $user->hasRole('admin') || $user->hasPermissionTo('create brands'),
                'canExportBrands' => $user->hasRole('admin') || $user->hasPermissionTo('export brands'),
                'canReadProducts' => $user->hasRole('admin') || $user->hasPermissionTo('read products'),
                'canEditProducts' => $user->hasRole('admin') || $user->hasPermissionTo('edit products'),
                'canCreateProducts' => $user->hasRole('admin') || $user->hasPermissionTo('create products'),
                'canExportProducts' => $user->hasRole('admin') || $user->hasPermissionTo('export products'),
                'canReadInvoices' => $user->hasRole('admin') || $user->hasPermissionTo('read invoices'),
                'canEditInvoices' => $user->hasRole('admin') || $user->hasPermissionTo('edit invoices'),
                'canCreateInvoices' => $user->hasRole('admin') || $user->hasPermissionTo('create invoices'),
                'canExportInvoices' => $user->hasRole('admin') || $user->hasPermissionTo('export invoices'),
                'isSuper' => $user->hasRole('admin'),
            ];
        }
        return $abilities;
    }
}
