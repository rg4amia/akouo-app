<?php

namespace Database\Seeders;

use App\Models\Zone;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ZoneSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'libelle' => 'Abidjan'
            ],
            [
                'libelle' => 'Bouaké'
            ],
            [
                'libelle' => 'Yamoussoukro'
            ],
            [
                'libelle' => 'Paris'
            ],
            [
                'libelle' => 'Génève'
            ]
        ];

        foreach ($data as $item) {
            Zone::create($item);
        }
    }
}
