<?php

namespace Database\Seeders;

use App\Models\MedicalCase;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $admin = User::updateOrCreate(['email' => 'admin@example.test'], [
            'name' => 'Demo Admin', 'password' => 'Password123!', 'role' => 'Admin',
        ]);
        User::updateOrCreate(['email' => 'viewer@example.test'], [
            'name' => 'Demo Viewer', 'password' => 'Password123!', 'role' => 'Viewer',
        ]);

        MedicalCase::query()->delete();
        MedicalCase::factory()->count(25)->create(['created_by' => $admin->id]);
    }
}
