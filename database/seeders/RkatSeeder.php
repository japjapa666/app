<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class RkatSeeder extends Seeder
{
    public function run()
    {
        \App\Models\Rkat::factory()->count(10)->create();
    }
}