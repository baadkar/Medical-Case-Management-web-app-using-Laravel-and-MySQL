<?php

namespace Tests\Feature;

use App\Models\MedicalCase;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class MedicalCaseManagementTest extends TestCase
{
    use RefreshDatabase;

    private function admin(): User
    {
        return User::factory()->create(['role' => 'Admin']);
    }

    private function validCase(array $overrides = []): array
    {
        return array_merge([
            'case_number' => 'CASE-9001',
            'patient_reference' => 'DUMMY-901',
            'surgeon_name' => 'Dr Example',
            'implant_type' => 'Hip Implant',
            'status' => 'Planning',
            'priority' => 'Medium',
            'surgery_date' => '2026-12-01',
        ], $overrides);
    }

    public function test_valid_login_succeeds(): void
    {
        $user = User::factory()->create(['email' => 'login@example.test', 'password' => 'Password123!', 'role' => 'Admin']);
        $this->post('/login', ['email' => $user->email, 'password' => 'Password123!'])
            ->assertRedirect('/dashboard');
        $this->assertAuthenticatedAs($user);
    }

    public function test_invalid_login_is_rejected(): void
    {
        $this->from('/login')->post('/login', ['email' => 'no@example.test', 'password' => 'wrong'])
            ->assertRedirect('/login')->assertSessionHasErrors('email');
        $this->assertGuest();
    }

    public function test_guest_cannot_open_case_pages_or_api(): void
    {
        $this->get('/cases')->assertRedirect('/login');
        $this->getJson('/api/cases')->assertUnauthorized();
    }

    public function test_admin_can_create_a_case(): void
    {
        $admin = $this->admin();
        $this->actingAs($admin)->post('/cases', $this->validCase())->assertRedirect();
        $this->assertDatabaseHas('cases', ['case_number' => 'CASE-9001', 'created_by' => $admin->id]);
    }

    public function test_duplicate_case_number_fails_validation(): void
    {
        $admin = $this->admin();
        MedicalCase::factory()->create(['case_number' => 'CASE-9001', 'created_by' => $admin->id]);
        $this->actingAs($admin)->postJson('/api/cases', $this->validCase())
            ->assertUnprocessable()->assertJsonValidationErrors('case_number');
    }

    public function test_viewer_cannot_delete_a_case(): void
    {
        $viewer = User::factory()->create(['role' => 'Viewer']);
        $case = MedicalCase::factory()->create(['created_by' => $this->admin()->id]);
        $this->actingAs($viewer)->delete('/cases/'.$case->id)->assertForbidden();
        $this->assertDatabaseHas('cases', ['id' => $case->id]);
    }
}
