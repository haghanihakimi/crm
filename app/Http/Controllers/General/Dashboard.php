<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Customer;
use App\Models\Invoice;
use Inertia\Inertia;
use App\Http\Customizations\FilterNumbers;

class Dashboard extends Controller
{
    public function index () {
        $newAnalytics = Customer::newAnalytics()->sum('total');
        $oldAnalytidcs = Customer::oldAnalytics()->sum('total');
        return Inertia::render('Dashboard', [
            'customers' => [
                'customers' => count(Customer::newAnalytics()) <= 0 ? [['date' => null, 'total' => 0]] : Customer::newAnalytics(),
                'average' => count(Customer::newAnalytics()) > 0 ? abs((($oldAnalytidcs - $newAnalytics) / $oldAnalytidcs) * 100) : 0,
                'avStatus' => $newAnalytics > $oldAnalytidcs ? 'positive' : 'negative',
                'customerCounter' => count(Customer::newAnalytics()) <= 0 ? [['date' => null, 'total' => 0]] : FilterNumbers::numbers($newAnalytics + $oldAnalytidcs),
            ],
            'invoices' => [
                'invoices' => Invoice::newAnalytics(),
            ]
        ]);
    }
}
