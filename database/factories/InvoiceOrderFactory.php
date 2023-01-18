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
        $quantity = rand(1,8);
        $price = rand(100,9999);
        $total = ($price * $quantity) / 10;
        return [
            'invoice_id' => Invoice::all()->random()->id,
            'product_id' => Product::all()->random()->id,
            'quantity' => $quantity,
            'price' => $price,
            'gst' => 10,
            'total_price' => ($price * $quantity) + $total,
            'created_at' => $this->faker->dateTimeBetween($startDate = '-30 days', $endDate = 'now', $timezone = null)
        ];
    }
}
