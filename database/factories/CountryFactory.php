<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Country>
 */
class CountryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $country = ["name"=>"Afghanistan","code"=>"AF","phone"=>93,"symbol"=>"؋","capital"=>"Kabul","currency"=>"AFN","continent"=>"Asia","continent_code"=>"AS","alpha_3"=>"AFG"];
        return [
            'phone' => $country['phone'],
            'code' => $country['code'],
            'name' => $country['name'],
            'symbol' => $country['symbol'],
            'capital' => $country['capital'],
            'currency' => $country['currency'],
            'continent' => $country['continent'],
            'continent_code' => $country['continent_code'],
            'alpha_3' => $country['alpha_3'],
        ];
    }
}
