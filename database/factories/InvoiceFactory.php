<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Country;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Invoice>
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
            'country_id' => 1,
            'tracking_number' => rand(999999,999999999),
            'invoice_date' => $this->faker->dateTimeBetween($startDate = '-30 days', $endDate = 'now', $timezone = null),
            'due_date' => $this->faker->dateTimeBetween($startDate = '-30 days', $endDate = 'now', $timezone = null),
            'shipping_date' => $this->faker->dateTimeBetween($startDate = '-30 days', $endDate = 'now', $timezone = null),
            'state' => 'VIC',
            'house_address' => '15 Benambra',
            'city' => 'Geelong',
            'postcode' => '3214',
            'auto_mail' => 'on', 
            'auto_mail_time' => null,
            'auto_mail_status' => 1,
            'created_at' => $this->faker->dateTimeBetween($startDate = '-30 days', $endDate = 'now', $timezone = null)
        ];
    }
}
