<?php

namespace App\Http\Customizations;

use Illuminate\Auth\Events\Lockout;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class FilterNumbers
{
    public static function filter($number) {
        switch($number) {
            case $number >= 1000 && $number <= 1999:
                $number = $number / 1000;
            default:
                $number = $number;
        }

        return floor($number * 10) / 10;
    }
}
