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
use App\Models\InvoiceOrder;
use App\Models\InvoiceCustomer;
use App\Models\InvoiceProduct;
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
        Cache::add('countries', Countries::getCountries());
        return Inertia::render('Invoices/CreateInvoice', [
            'countries' => Cache::get('countries'),
            'tracking' => substr(preg_replace("/[^0-9]/", "", Str::uuid()), 0, 10),
        ]);
    }

    public function createInvoice(Request $request) {
        $this->validateInvoiceCreate($request);
        if ($invoice = $this->onlyCreateInvoice($request)) {
            foreach ($request->inputs as $input) {
                InvoiceOrder::create([
                    'invoice_id' => $invoice->id,
                    'product_id' => $input['service'],
                    'country_id' => $request->shippingCountry,
                    'quantity' => $input['quantity'],
                    'price' => $input['price'],
                    'gst' => $input['gst'],
                    'invoice_date' => Carbon::parse($request->invoiceDate)->format('Y-m-d'),
                    'due_date' => Carbon::parse($request->dueDate)->format('Y-m-d'),
                    'shipping_date' => Carbon::parse($request->shippingDate)->format('Y-m-d'),
                    'state' => $request->shippingState,
                    'house_address' => $request->shippingHouseAddress,
                    'city' => $request->shippingSuburb,
                    'postcode' => $request->shippingPostcode
                ]);
            }
            foreach ($request->customers as $customer) {
                InvoiceCustomer::create([
                    'customer_id' => $customer
                ]);
            }
        }
    }

    private function validateInvoiceCreate($request) {
        return $request->validate([
            'customers' => ['required', 'array', 'min:1'],
            'sendMail' => ['required', 'boolean'],
            'invoiceDate' => ['required', 'date'],
            'dueDate' => ['required', 'date'],
            'shippingDate' => ['required', 'date'],
            'trackingNumber' => ['required', 'numeric'],
            'shippingCountry' => ['required', 'numeric'],
            'shippingState' => ['required', 'string'],
            'shippingHouseAddress' => ['required', 'string'],
            'shippingSuburb' => ['required', 'string'],
            'shippingPostcode' => ['required', 'string'],
            'inputs' => ['required', 'array', 'min:1'],
            'inputs.*.service' => ['required', 'numeric', 'min:1'],
            'inputs.*.quantity' => ['required', 'numeric', 'min:1'],
            'inputs.*.price' => ['required', 'numeric', 'min:1'],
            'inputs.*.gst' => ['required', 'boolean'],
        ]);
    }

    private function onlyCreateInvoice ($request) {
        return Invoice::create([
            'tracking_number' => empty($request->trackingNumber) ? substr(preg_replace("/[^0-9]/", "", Str::orderedUuid()), 0, 16) : $request->trackingNumber,
        ]);
    }
}
