<?php

use App\Http\Controllers\Auth\AuthenticateController;
use App\Http\Controllers\Auth\EmailVerification;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Support\Facades\Route;

//Signin Routes
Route::controller(AuthenticateController::class)->group(function () {
    Route::get('/account', 'index')->middleware(['guest'])->name('account');
    Route::get('/login', 'index')->middleware(['guest'])->name('login');
    Route::get('/user/default/password/change', 'viewDefaultPassword')->middleware(['auth'])->name('view.change.password');
    Route::patch('/user/default/password/save/change', 'changeDefaultPassword')->middleware(['auth'])->name('change.password');
    Route::post('/signin', 'signin')->middleware(['guest', 'throttle:5,1'])->name('signin');
    Route::post('/signout', 'signout')->middleware(['auth', 'throttle:3,1'])->name('signout');
});

//Signup Routes
Route::controller(RegisterController::class)->group(function () {
    Route::get('/signup', 'index')->name('signup');
});

//Email Verification
Route::controller(EmailVerification::class)->group(function () {
    Route::get('/email/verify/{id}/{hash}', 'verifyEmail')->whereNumber('id')->whereAlphaNumeric('hash')->middleware(['auth', 'signed'])->name('verification.verify');
});