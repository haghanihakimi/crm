<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class RegisterController extends Controller
{
    private $auth;
    private $user;

    public function __construct () {
        $this->auth = Auth::guard('web')->check();
        $this->user = Auth::guard('web')->check() ? Auth::guard()->user() : [];
    }

    public function index () {
        return Inertia::render('Auth/Signup', [
            'auth' => [
                'authenticate' => $this->auth,
                'user' => $this->user,
            ],
        ]);
    }
}
