<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Product;
use App\Models\Customer;
use Carbon\Carbon;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class InvoiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'customer_id' => $this->faker->randomElement(Customer::all()),
            'product_id' => $this->faker->randomElement(Product::all()),
            'customer_email' => '', 
            'invoice_date' => now(),
            'invoice_due' => $this->faker->dateTimeBetween(now()->addDays(1), now()->addDays(365)),
            'tracking_number' => $this->faker->unique()->numerify('#########'),
            'service_date' => now(),
            'service_quantity' => $this->faker->randomElement([1, 2, 3, 4, 5, 6, 7, 8, 9]),
        ];
    }
}
