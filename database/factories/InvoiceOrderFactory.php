<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Invoice;
use App\Models\Product;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\InvoiceOrder>
 */
class InvoiceOrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'invoice_id' => Invoice::all()->random()->id,
            'product_id' => Product::all()->random()->id,
            'quantity' => rand(1,8),
            'price' => rand(100,9999),
            'gst' => $this->faker->randomElement([true, false]),
        ];
    }
}
