<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class StatusCheckSeeder extends Seeder
{
    public function run()
    {
        \App\Models\StatusCheck::factory()->count(5)->create();
    }
}