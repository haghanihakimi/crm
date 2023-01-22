<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(55)->create();
        \App\Models\Customer::factory(100)->create();
        \App\Models\Brand::factory(28)->create(); // should be as many as brands
        \App\Models\Product::factory(25)->create();
        \App\Models\Country::factory(1)->create();
        \App\Models\Invoice::factory(100)->create();
        \App\Models\InvoiceOrder::factory(100)->create();
    }
}
