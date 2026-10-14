<?php

namespace Database\Factories;

use App\Models\MedicalCase;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class MedicalCaseFactory extends Factory
{
    protected $model = MedicalCase::class;

    public function definition(): array
    {
        return [
            'case_number' => 'CASE-'.fake()->unique()->numerify('####'),
            'patient_reference' => 'DUMMY-'.fake()->unique()->numerify('###'),
            'surgeon_name' => fake()->name(),
            'implant_type' => fake()->randomElement(['Hip Implant','Knee Implant','Spinal Implant','Shoulder Implant']),
            'status' => fake()->randomElement(['Draft','Planning','In Review','Approved','Completed','Cancelled']),
            'priority' => fake()->randomElement(['Low','Medium','High']),
            'surgery_date' => fake()->optional()->date(),
            'created_by' => User::factory(),
        ];
    }
}
