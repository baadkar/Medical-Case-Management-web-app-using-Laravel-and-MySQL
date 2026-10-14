<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMedicalCaseRequest;
use App\Http\Requests\UpdateMedicalCaseRequest;
use App\Models\MedicalCase;
use Illuminate\Http\Request;

class CaseApiController extends Controller
{
    use ApiResponse;

    public function index(Request $request)
    {
        $this->authorize('viewAny', MedicalCase::class);
        $cases = MedicalCase::with('creator')
            ->when($request->filled('search'), fn ($q) => $q->where(fn ($x) =>
                $x->where('case_number','like','%'.$request->input('search').'%')
                  ->orWhere('surgeon_name','like','%'.$request->input('search').'%')))
            ->when($request->filled('status'), fn ($q) => $q->where('status', $request->input('status')))
            ->latest()->paginate(min(max((int) $request->input('per_page', 10), 1), 50));
        return $this->ok($cases, 'Cases retrieved.');
    }

    public function store(StoreMedicalCaseRequest $request)
    {
        $case = MedicalCase::create([...$request->validated(), 'created_by' => $request->user()->id]);
        return $this->ok($case->load('creator'), 'Case created.', 201);
    }

    public function show(MedicalCase $case)
    {
        $this->authorize('view', $case);
        return $this->ok($case->load('creator'), 'Case retrieved.');
    }

    public function update(UpdateMedicalCaseRequest $request, MedicalCase $case)
    {
        $case->update($request->validated());
        return $this->ok($case->fresh()->load('creator'), 'Case updated.');
    }

    public function destroy(MedicalCase $case)
    {
        $this->authorize('delete', $case);
        $case->delete();
        return $this->ok(null, 'Case deleted.');
    }
}
