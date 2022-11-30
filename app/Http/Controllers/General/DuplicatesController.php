<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Brand;
use App\Models\Customer;

class DuplicatesController extends Controller
{
    /**
     * Checks and finds any brands which matches with the one brand name given by user.
     * @return Array
     */
    public function findDuplicateBrand (Request $request) {
        //$this->validateKeywords($request);

        $results = Brand::findDuplicateBrand($request->input('keywords'))
        ->select('id', 'name')
        ->limit(3)
        ->get();

        return response()->json(["results" => $results]);
    }

    /**
     * Checks and finds any customers which matches with the one brand name given by user.
     * @return Array
     */
    public function findDuplicateCustomer (Request $request) {
        //$this->validateKeywords($request);

        $results = Customer::findDuplicateCustomer(json_decode($request->input('keywords')))
        ->select('id', 'first_name', 'surname', 'email', 'phone')
        ->limit(3)
        ->get();

        return response()->json(["results" => $results]);
    }

    private function validateKeywords () {
        return $request->validate([
            'keywords' => ['required', 'string', 'min:1', 'max:64']
        ]);
    }
}
