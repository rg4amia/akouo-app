<?php

namespace Database\Seeders;

use App\Models\Rattachements;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RattachementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'libelle' => 'Assemblé afrique'
            ],
            [
                'libelle' => 'Assemblé europe'
            ],
            [
                'libelle' => 'Assemblé asie'
            ]
        ];

        foreach ($data as $item) {
            Rattachements::create($item);
        }

    }
}
