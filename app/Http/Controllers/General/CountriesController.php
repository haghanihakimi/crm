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
use App\Models\Country;
use Inertia\Inertia;

class CountriesController extends Controller
{
    public static function getCountries () {
        $countries = Country::select('id', 'name')->orderBy('name', 'ASC')->get();

        return response()->json(['countries' => $countries]);
    }
}
