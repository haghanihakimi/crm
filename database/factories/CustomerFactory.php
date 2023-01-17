<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Carbon\Carbon;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Customer>
 */
class CustomerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        // $this->faker->randomElement(['Mr', 'Mrs', 'Miss', 'Ms'])
        return [
            'first_name' => $this->faker->firstname(),
            'surname' => $this->faker->lastname(),
            'gender' => $this->faker->randomElement(['female', 'male']),
            'email' => $this->faker->unique()->safeEmail(),
            'phone' => $this->faker->unique()->numerify('########'),
            'created_at' => $this->faker->dateTimeBetween($startDate = '-20 days', $endDate = 'now', $timezone = null)
        ];
    }
}
