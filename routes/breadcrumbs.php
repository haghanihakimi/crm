<?php
use Illuminate\Support\Facades\Route;
use Diglactic\Breadcrumbs\Breadcrumbs;
use Diglactic\Breadcrumbs\Generator as BreadcrumbTrail;

// Home
Breadcrumbs::for('home', function (BreadcrumbTrail $trail) {
    $trail->push('Home', route('home'));
});

// Home > Cart
Breadcrumbs::for('cart', function (BreadcrumbTrail $trail) {
    $trail->push('Cart', route('shopping.cart'));
});