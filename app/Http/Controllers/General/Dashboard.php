<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Models\Customer;
use Inertia\Inertia;
use Carbon\Carbon;

class Dashboard extends Controller
{
    public function index () {
        return Inertia::render('Dashboard', [
            'customers' => Customer::analytics(),
            'month' => Carbon::now()->days()->format('d')
        ]);
    }
}
