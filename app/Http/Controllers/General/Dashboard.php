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
        return Inertia::render('Dashboard', [
            'customers' => [
                'customers' => count(Customer::newAnalytics()) <= 0 ? [['date' => null, 'total' => 0]] : Customer::newAnalytics(),
                'average' => count(Customer::newAnalytics()) > 0 ? abs(((Customer::newAnalytics()->sum('total') - Customer::oldAnalytics()->sum('total')) / Customer::oldAnalytics()->sum('total')) * 100) : 0,
                'avStatus' => Customer::newAnalytics()->sum('total') > Customer::oldAnalytics()->sum('total') ? 'positive' : 'negative',
                'customerCounter' => count(Customer::newAnalytics()) <= 0 ? [['date' => null, 'total' => 0]] : FilterNumbers::numbers(Customer::newAnalytics()->sum('total') + Customer::oldAnalytics()->sum('total')),
            ],
            'sales' => [
                'sales' => count(Invoice::newAnalytics()) <= 0 ? [['date' => null, 'total' => 0]] : Invoice::newAnalytics(),
                'average' => count(Invoice::newAnalytics()) > 0 ? abs(((Invoice::newAnalytics()->sum('total') - Invoice::oldAnalytics()->sum('total')) / Invoice::oldAnalytics()->sum('total')) * 100) : 0,
                'avStatus' => Invoice::newAnalytics()->sum('total') > Invoice::oldAnalytics()->sum('total') ? 'positive' : 'negative',
                'salesCounter' => count(Invoice::newAnalytics()) <= 0 ? [['date' => null, 'total' => 0]] : FilterNumbers::money(Invoice::newAnalytics()->sum('total') + Invoice::oldAnalytics()->sum('total')),
            ],
            'orders' => [
                'orders' => count(Invoice::newInvoiceAnalytics()) <= 0 ? [['date' => null, 'total' => 0]] : Invoice::newInvoiceAnalytics(),
                'average' => count(Invoice::newInvoiceAnalytics()) > 0 ? abs(((Invoice::newInvoiceAnalytics()->sum('total') - Invoice::oldInvoiceAnalytics()->sum('total')) / Invoice::oldInvoiceAnalytics()->sum('total')) * 100) : 0,
                'avStatus' => Invoice::newInvoiceAnalytics()->sum('total') > Invoice::oldInvoiceAnalytics()->sum('total') ? 'positive' : 'negative',
                'ordersCounter' => count(Invoice::newInvoiceAnalytics()) <= 0 ? [['date' => null, 'total' => 0]] : FilterNumbers::numbers(Invoice::newInvoiceAnalytics()->sum('total') + Invoice::oldInvoiceAnalytics()->sum('total')),
            ],
        ]);
    }
}
