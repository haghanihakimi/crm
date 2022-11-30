<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Models\Invoice;
use Inertia\Inertia;

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
        return Inertia::render('Invoices/CreateInvoice');
    }
}
