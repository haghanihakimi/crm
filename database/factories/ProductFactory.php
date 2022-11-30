<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Brand;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {


        return [
            "brand_id" => $this->faker->randomElement(Brand::all()),
            "name" => $this->faker->sentence(1),
            "sku" => $this->faker->unique()->numerify('##########'),
            "price" => $this->faker->randomFloat($nbMaxDecimals = 2, $min = 50, $max = 5000),
        ];
    }
}
