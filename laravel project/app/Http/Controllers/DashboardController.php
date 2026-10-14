<?php

namespace App\Http\Controllers;

use App\Models\MedicalCase;

class DashboardController extends Controller
{
    public function __invoke()
    {
        $this->authorize('viewAny', MedicalCase::class);
        return view('dashboard', [
            'total' => MedicalCase::count(),
            'planning' => MedicalCase::where('status', 'Planning')->count(),
            'inReview' => MedicalCase::where('status', 'In Review')->count(),
            'approved' => MedicalCase::where('status', 'Approved')->count(),
            'completed' => MedicalCase::where('status', 'Completed')->count(),
            'recentCases' => MedicalCase::with('creator')->latest()->take(5)->get(),
        ]);
    }
}
