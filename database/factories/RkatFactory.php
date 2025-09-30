<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class RkatFactory extends Factory
{
    public function definition()
    {
        return [
            'kode_lapangan' => $this->faker->word,
            'unit_kerja' => $this->faker->company,
            'indikalisasi' => $this->faker->word,
            'program_nu' => $this->faker->word,
            'program_sub_nu' => $this->faker->word,
            'tujuan' => $this->faker->sentence,
            'mataanme_rancangan' => $this->faker->word,
            'julu_kegiatan' => $this->faker->sentence,
            'jadwal_pelaksanaan' => $this->faker->date,
            'ice' => $this->faker->word,
            'lokasi_pelaksanaan' => $this->faker->city,
            'latar_belakang' => $this->faker->paragraph,
            'indikator_kerja' => $this->faker->word,
            'status' => $this->faker->randomElement(['pending', 'approved', 'rejected']),
        ];
    }
}