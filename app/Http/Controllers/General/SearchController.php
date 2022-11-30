<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\CustomersNormal;
use App\Models\Invoice;
use App\Models\Customer;
use App\Models\Product;

class SearchController extends Controller
{
    public function search (Request $request) {
        //$this->validateKeywords($request);
        $results = new \Illuminate\Database\Eloquent\Collection;

        $invoices = Invoice::search($request->input('keywords'))
        ->with('customers')
        ->select('id', 'tracking_number', 'invoice_date', 'invoice_due')
        ->limit(2)
        ->get();

        $customers = Customer::search($request->input('keywords'))
        ->select('id', 'first_name', 'surname', 'email', 'phone')
        ->limit(3)
        ->get();

        $products = Product::search($request->input('keywords'))
        ->select('id', 'name', 'sku', 'price', 'sale_price');

        $results = $results->merge($customers);
        $results = $results->merge($invoices);
        $results = $results->merge($products);

        return response()->json(["results" => $results]);
    }

    private function validateKeywords () {
        return $request->validate([
            'keywords' => ['required', 'string', 'min:1', 'max:64']
        ]);
    }
}
