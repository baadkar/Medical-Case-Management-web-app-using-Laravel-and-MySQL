<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMedicalCaseRequest;
use App\Http\Requests\UpdateMedicalCaseRequest;
use App\Models\MedicalCase;
use Illuminate\Http\Request;

class CaseController extends Controller
{
    public function index(Request $request)
    {
        $this->authorize('viewAny', MedicalCase::class);
        $cases = MedicalCase::with('creator')
            ->when($request->filled('search'), function ($query) use ($request) {
                $term = $request->string('search')->toString();
                $query->where(fn ($q) => $q->where('case_number','like',"%{$term}%")
                    ->orWhere('surgeon_name','like',"%{$term}%"));
            })
            ->when($request->filled('status'), fn ($q) => $q->where('status', $request->input('status')))
            ->latest()->paginate(10)->withQueryString();
        return view('cases.index', compact('cases'));
    }

    public function create()
    {
        $this->authorize('create', MedicalCase::class);
        return view('cases.form', ['case' => new MedicalCase(), 'editing' => false]);
    }

    public function store(StoreMedicalCaseRequest $request)
    {
        $case = MedicalCase::create([...$request->validated(), 'created_by' => $request->user()->id]);
        return redirect()->route('cases.show', $case)->with('success', 'Case created successfully.');
    }

    public function show(MedicalCase $case)
    {
        $this->authorize('view', $case);
        $case->load('creator');
        return view('cases.show', compact('case'));
    }

    public function edit(MedicalCase $case)
    {
        $this->authorize('update', $case);
        return view('cases.form', ['case' => $case, 'editing' => true]);
    }

    public function update(UpdateMedicalCaseRequest $request, MedicalCase $case)
    {
        $case->update($request->validated());
        return redirect()->route('cases.show', $case)->with('success', 'Case updated successfully.');
    }

    public function destroy(MedicalCase $case)
    {
        $this->authorize('delete', $case);
        $case->delete();
        return redirect()->route('cases.index')->with('success', 'Case deleted successfully.');
    }
}
