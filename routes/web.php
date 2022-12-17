<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\General\HomeController;
use App\Http\Controllers\General\Dashboard;
use App\Http\Controllers\General\UserRolesController;
use App\Http\Controllers\General\RolePermissionController;
use App\Http\Controllers\General\CustomersController;
use App\Http\Controllers\General\ProductsController;
use App\Http\Controllers\General\BrandsController;
use App\Http\Controllers\General\InvoiceController;
use App\Http\Controllers\General\CountriesController;
use App\Http\Controllers\General\SearchController;
use App\Http\Controllers\General\DuplicatesController;

//Unauthenticated routes
Route::middleware(['guest'])->group(function () {
    Route::controller(HomeController::class)->group(function () {
        Route::get('/', 'index')->name('root');
        Route::get('/home', 'index')->name('home');
    });
});

//Authenticated routes
Route::middleware(['auth'])->group(function () {
    //Home Routes
    Route::controller(Dashboard::class)->group(function () {
        // Dashboard page - ADMIN ONLY ACCESS!
        Route::get('/dashboard', 'index')->name('dashboard');
    });

    //User Roles Routes - ADMIN ONLY ACCESS!
    Route::controller(UserRolesController::class)->group(function () {
        //List of users
        Route::get('/users/list', 'index')->middleware(['role:admin'])->name('users.list');

        //Get requested user based on user id - General Tab
        Route::get('/users/view/edit/general/{user}', 'viewEditUserGeneral')->whereNumber('user')->middleware(['role:admin'])->name('users.general.view.edit');
        
        //Get requested user based on user id - Roles & Permissions Tab
        Route::get('/users/view/edit/roles/permissions/{user}', 'viewEditUserRole')->whereNumber('user')->middleware(['role:admin'])->name('users.roles.view.edit');
        
        //Create and add new user to the record
        Route::get('/view/user/create/new', 'viewCreateUser')->middleware(['role:admin'])->name('view.create.user');

        //Post new user data to the record
        Route::post('/create/user/new', 'createUser')->middleware(['role:admin'])->name('create.new.user');
        
        //Update user's profile
        Route::patch('/users/save/edit/{user}', 'saveEditUser')->whereNumber('user')->middleware(['role:admin'])->name('users.edit.save');
        
        //Update user's role and permissions
        Route::post('/users/view/save/roles/permissions/{user}', 'saveUserRole')->whereNumber('user')->middleware(['role:admin'])->name('users.roles.view.edit.save');
        
        //Send verification link to any user that admin wants
        Route::post('/user/send/email/verification/{user}', 'sendLink')->whereNumber('user')->middleware(['role:admin'])->name('user.email.verification');
    });

    //Roles & Permissions Routes - Only Admin
    Route::controller(RolePermissionController::class)->group(function () {
        // Get list of roles and related permissions - ADMIN ONLY ACCESS!
        Route::get('/roles/permissions/list', 'index')->middleware(['role:admin'])->name('roles.permissions.list');
        Route::post('/roles/permissions/changes/save', 'saveChanges')->middleware(['role:admin'])->name('roles.permissions.changes.save');
    });

    //Customers Page routes
    Route::controller(CustomersController::class)->group(function () {
        // View all customers page - ADMIN ONLY ACCESS!
        Route::get('/dashboard/customers/view', 'index')->middleware(['role_or_permission:admin|read customers'])->name('customers.view');
        // Add new customer to list - view page - ADMIN ONLY ACCESS!
        Route::get('/dashboard/customers/new', 'viewNewCustomer')->middleware(['role_or_permission:admin|create customers'])->name('customers.new.view');
        // Edit selected customer - view page - ADMIN ONLY ACCESS!
        Route::get('/dashboard/customer/edit/{customer}', 'editCustomerView')->middleware(['role_or_permission:admin|edit customers'])->whereNumber('customer')->name('customers.edit.view');
        // Search for customers on "Create new Invoice page"
        Route::get('/list/customers/search', 'searchCustomers')->middleware(['role_or_permission:admin|edit customers'])->name('customers.edit.view');
        // Add new customer to list - post action - ADMIN ONLY ACCESS!
        Route::post('/dashboard/add/customer', 'newCustomer')->middleware(['role_or_permission:admin|create customers'])->name('customers.new');
        // Edit selected customer - post action - ADMIN ONLY ACCESS!
        Route::post('/dashboard/edit/save/customer/{customer_id}', 'editCustomer')->middleware(['role_or_permission:admin|edit customers'])->whereNumber('customer_id')->name('customers.edit');
        // Delete selected customer - delete action - ADMIN ONLY ACCESS!
        Route::delete('/dashboard/customer/delete/{customer_id}', 'deleteCustomer')->whereNumber('customer_id')->middleware(['role_or_permission:admin|edit customers'])->name('customers.delete');
    });

    //Brands Page Routes
    Route::controller(BrandsController::class)->group(function () {
        Route::get('/dashboard/brands/list', 'index')->middleware(['role_or_permission:admin|read brands'])->name('brands.list.view');
        Route::get('/dashboard/brands/create/new', 'newBrandView')->middleware(['role_or_permission:admin|create brands'])->name('brands.create.view');
        Route::get('/dashboard/brand/view/edit/{brand}', 'viewBrandEdit')->whereNumber('brand')->middleware(['role_or_permission:admin|edit brands'])->name('brands.edit.view');
        Route::post('/dashboard/brands/create/new', 'newBrandCreate')->middleware(['role_or_permission:admin|create brands'])->name('brands.create.new');
        Route::post('/dashboard/brand/submit/edits/{brand}', 'editBrand')->whereNumber('brand')->middleware(['role_or_permission:admin|edit brands'])->name('brand.edit.submit');
    });

    //Products Page Routes
    Route::controller(ProductsController::class)->group(function () {
        Route::get('/dashboard/products/list/view', 'index')->middleware(['role_or_permission:admin|read products'])->name('product.view.list');
        Route::get('/dashboard/product/view/edit/{product}', 'viewProductEdit')->whereNumber('product')->middleware(['role_or_permission:admin|edit products'])->name('products.view.edit');
        Route::get('/dashboard/product/view/create', 'viewCreateProduct')->middleware(['role_or_permission:admin|create products'])->name('product.create.view');
        Route::get('/list/products/search', 'searchProducts')->middleware(['role_or_permission:admin|create products'])->name('search.product');
        Route::post('/dashboard/product/save/edit/{product}', 'saveProductEdit')->whereNumber('product')->middleware(['role_or_permission:admin|edit products'])->name('product.save.edit');
        Route::post('/dashboard/product/submit/create', 'createProduct')->middleware(['role_or_permission:admin|create products'])->name('product.create.new');
    });

    //Invoices Page routes
    Route::controller(InvoiceController::class)->group(function () {
        Route::get('/dashboard/invoice/list', 'index')->middleware(['role_or_permission:admin|read invoices'])->name('invoice.list.view');
        Route::get('/dashboard/invoice/create', 'viewCreateInvoice')->middleware(['role_or_permission:admin|create invoices'])->name('invoice.create.view');
    
        Route::post('/dashboard/invoice/create', 'createInvoice')->middleware(['role_or_permission:admin|create invoices'])->name('invoice.create');
    });

    //Countries Route
    Route::controller(CountriesController::class)->group(function () {
        Route::get('/list/countries', 'getCountries');
    });

    //Search Route
    Route::controller(SearchController::class)->group(function () {
        Route::get('/dashboard/admin/search', 'search')->middleware(['role_or_permission:admin|accountant|marketer|staff manager|product manager'])->name('search');
    });

    //Find Duplicates Route
    Route::controller(DuplicatesController::class)->group(function () {
        Route::get('/dashboard/admin/search/duplicate/brand', 'findDuplicateBrand')->middleware(['role_or_permission:admin|accountant|marketer|staff manager|product manager'])->name('duplicate.find.brand');
        Route::get('/dashboard/admin/search/duplicate/customer', 'findDuplicateCustomer')->middleware(['role_or_permission:admin|accountant|marketer|staff manager|product manager'])->name('duplicate.find.brand');
    });

});

//Authentication Routes
require __DIR__.'/auth.php';
