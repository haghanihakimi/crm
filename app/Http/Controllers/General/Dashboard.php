<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Customer;
use Inertia\Inertia;
use App\Http\Customizations\FilterNumbers;

class Dashboard extends Controller
{
    public function index () {
        $newAnalytics = Customer::newAnalytics()->sum('total');
        $oldAnalytidcs = Customer::oldAnalytics()->sum('total');
        return Inertia::render('Dashboard', [
            'customers' => count(Customer::newAnalytics()) <= 0 ? [['date' => null, 'total' => 0]] : $newAnalytics + $oldAnalytidcs,
            'average' => count(Customer::newAnalytics()) > 0 ? abs((($oldAnalytidcs - $newAnalytics) / $oldAnalytidcs) * 100) : 0,
            'avStatus' => $newAnalytics > $oldAnalytidcs ? 'positive' : 'negative',
            'test' => FilterNumbers::filter(1996),
        ]);
    }
}
