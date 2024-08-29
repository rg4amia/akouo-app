<?php

namespace Database\Seeders;

use App\Models\Cellule;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        //User::factory(10000)->create();

        Cellule::factory(1000)->create();
        /*  User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]); */
        //User::factory(500)->withPosts()->create();
    }
}
