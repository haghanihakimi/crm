<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Cache;
use App\Models\Invoice;
use App\Http\Controllers\General\CountriesController as Countries;
use Inertia\Inertia;
use Carbon\Carbon;

class InvoiceController extends Controller
{
    /**
     * List of invoices view
     * @return Inertia\Inertia
     */
    public function index (Request $request) {
        $request->validate([
            'page' => ['nullable', 'numeric', 'min:1', 'regex:/(^([0-9]+)(\d+)?$)/u'],
            'sort' => ['nullable', 'string', 'regex:/(^([a-zA-Z]+)(\d+)?$)/u']
        ]);

        return Inertia::render('Invoices/ViewInvoices', [
            'params' => $request->input(),
            'invoices' => Invoice::with(['products', 'customers'])->paginate(15)
        ]);
    }

    /**
     * A page to create new invoice for customers
     * @return Inertia\Inertia
     */
    public function viewCreateInvoice() {
        Cache::add('countries', Countries::getCountries(), now()->addDays(5));
        $countries = Cache::get('countries');
        return Inertia::render('Invoices/CreateInvoice', [
            'countries' => $countries,
        ]);
    }

    public function testRequest(Request $request) {
        dd($request->all());
    }
}
