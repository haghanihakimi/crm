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
    public static function numbers($number) {
        switch($number) {
            case $number >= 1000 && $number <= 999999:
                $number = floor(($number / 1000) * 10) / 10;
                $number = $number.'K';
                break;
                case $number >= 1000000 && $number <= 999999999:
                    $number = floor(($number / 1000000) * 10) / 10;
                    $number = $number.'M';
                    break;
            case $number >= 1000000000 && $number <= 999999999999:
                $number = floor(($number / 1000000000) * 10) / 10;
                $number = $number.'B';
                break;
            default:
                $number = $number;
                break;
        }

        return (string)$number;
    }

    public static function money($money) {
        switch($money) {
            case $money >= 1000 && $money <= 999999:
                $money = floor(($money / 1000) * 10) / 10;
                $money = $money.'T';
                break;
                case $money >= 1000000 && $money <= 999999999:
                    $money = floor(($money / 1000000) * 10) / 10;
                    $money = $money.'M';
                    break;
            case $money >= 1000000000 && $money <= 999999999999:
                $money = floor(($money / 1000000000) * 10) / 10;
                $money = $money.'B';
                break;
            default:
                $money = $money;
                break;
        }

        return (string)$money;
    }
}
