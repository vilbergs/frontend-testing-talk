<?php

namespace Database\Seeders;

use App\Models\Todo;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create();

        $vilberg = User::factory()->create([
            'name' => 'Vilberg',
            'email' => 'vilberg@exam.net',
        ]);

        Todo::factory()->create([
            'title' => 'Buy cat food',
            'is_complete' => false,
            'user_id' => $vilberg->id
        ]);

        Todo::factory()->create([
            'title' => 'Find meaning',
            'is_complete' => false,
            'user_id' => $vilberg->id
        ]);

    }
}
