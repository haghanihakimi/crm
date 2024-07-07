<?php

namespace Database\Seeders;
use Illuminate\Support\Str;

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
        \App\Models\User::create([
            "fname" => "Admin",
            "sname" => "Administrator",
            "email" => "admin@email.com",
            "email_verified_at" => now(),
            "password" => "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi", //password
            "gender" => "male",
            "remember_token" => Str::random(10),
        ]);
        \App\Models\User::factory(54)->create();
        \App\Models\Customer::factory(100)->create();
        \App\Models\Brand::factory(28)->create(); // should be as many as brands are
        \App\Models\Product::factory(25)->create();
        \App\Models\Country::factory(1)->create();
        \App\Models\Invoice::factory(100)->create();
        \App\Models\InvoiceOrder::factory(100)->create();
    }
}
