<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateMedicalCaseRequest extends FormRequest
{
    public function authorize(): bool { return $this->user()?->can('update', $this->route('case')) ?? false; }

    public function rules(): array
    {
        $case = $this->route('case');
        return [
            'case_number' => ['required','string','max:50',Rule::unique('cases','case_number')->ignore($case->id)],
            'patient_reference' => ['required','string','max:100'],
            'surgeon_name' => ['required','string','max:150'],
            'implant_type' => ['required','string','max:150'],
            'status' => ['required', Rule::in(['Draft','Planning','In Review','Approved','Completed','Cancelled'])],
            'priority' => ['required', Rule::in(['Low','Medium','High'])],
            'surgery_date' => ['nullable','date'],
        ];
    }
}
