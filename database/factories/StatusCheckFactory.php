<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class StatusCheckFactory extends Factory
{
    public function definition()
    {
        return [
            'client_name' => $this->faker->userName,
        ];
    }
}