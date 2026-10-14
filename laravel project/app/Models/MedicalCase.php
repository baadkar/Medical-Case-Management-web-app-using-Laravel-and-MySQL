<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalCase extends Model
{
    use HasFactory;

    protected $table = 'cases';
    protected $fillable = [
        'case_number', 'patient_reference', 'surgeon_name', 'implant_type',
        'status', 'priority', 'surgery_date', 'created_by',
    ];

    protected function casts(): array
    {
        return ['surgery_date' => 'date'];
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
