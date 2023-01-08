<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;
use App\Models\Customer;
use Inertia\Inertia;
use Carbon\Carbon;

class Dashboard extends Controller
{
    public function index () {
        $month = Carbon::parse(now())->endOfMonth()->toDateString();
        $formatMonth = Carbon::parse($month)->format('d');
        return Inertia::render('Dashboard', [
            'customers' => count(Customer::analytics()) <= 0 ? [['date' => null, 'total' => 0]] : Customer::analytics(),
            'month' => Carbon::now()->days()->format('d')
        ]);
    }
}
