<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class BrandFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        //28 brands
        $brands = [
            "Apple", 
            "Google", 
            "Tesla", 
            "Audi", 
            "Porche",
            "Logitech",
            "AMD",
            "Intel",
            "PUMA",
            "Square",
            "Adobe",
            "Cisco",
            "Ubisoft",
            "Toyota",
            "3M",
            "Philips",
            "Bose",
            "HBO",
            "Adidas",
            "Gucci",
            "BMW",
            "Honda",
            "NVIDIA",
            "Rockstar Games",
            "Microsoft",
            "LEGO Group",
            "Nintendo",
            "Nike"
        ];


        return [
            "name" => $this->faker->unique()->randomElement($brands),
        ];
    }
}
