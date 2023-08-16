<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        
        return [
            'name' => $this->faker->name(),
            'surname' => $this->faker->lastName(),
            'id_card' => random_int(1000000,9999999999),
            'type_id' =>Str::of('CC'),
            'address'=> $this->generateRandomAddress(),
            'phone' => random_int(3000000000,3229999999),
            'email' => $this->faker->unique()->safeEmail(),
            'cv_file'=>Str::random(10),
            
            'medical_exam_file'=>Str::random(10),
            'followup_stands_file'=>Str::random(10),
            'history_file'=>Str::random(10),
            'study_stands_file'=>Str::random(10),
            'id_card_file'=>Str::random(10),
            'work_certificate_file'=>Str::random(10),
        ];
    }
    private function generateRandomAddress()
    {
        $streets = ['Main Street', 'Oak Avenue', 'Maple Drive', 'Elm Street'];
        $cities = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
        $states = ['CA', 'NY', 'TX', 'IL'];

        $street = $streets[array_rand($streets)];
        $city = $cities[array_rand($cities)];
        $state = $states[array_rand($states)];
        $zip = $this->faker->postcode();

        return "$street, $city, $state $zip";
    }


}
