<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use App\Models\Customer;
use App\Models\Product;

class SearchController extends Controller
{
    public function search (Request $request) {
        $this->validateKeywords($request);
        $results = new \Illuminate\Database\Eloquent\Collection;
        $user = Auth::guard()->user();

        $customers = $user->hasPermissionTo('read customers') || $user->hasRole('admin') ? Customer::search($request->input('keywords'))
        ->select('id', 'first_name', 'surname', 'email', 'phone')
        ->limit(3)
        ->get() : [];

        $products = $user->hasPermissionTo('read products') || $user->hasRole('admin') ? Product::search($request->input('keywords'))
        ->select('id', 'name', 'sku', 'price', 'sale_price') : [];

        $results = $results->merge($customers);
        $results = $results->merge($products);

        return response()->json(["results" => $results]);
    }

    private function validateKeywords ($request) {
        return $request->validate([
            'keywords' => ['required', 'alpha_num', 'min:1', 'max:64']
        ]);
    }
}
