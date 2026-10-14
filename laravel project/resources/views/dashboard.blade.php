@extends('layouts.app')
@section('title','Dashboard')
@section('content')
<div class="d-flex justify-content-between align-items-center mb-4"><div><h1 class="h3 mb-1">Dashboard</h1><p class="text-secondary mb-0">A quick overview of medical cases.</p></div><a class="btn btn-primary" href="{{ route('cases.index') }}">View all cases</a></div>
<div class="row g-3 mb-4">
@foreach([['Total cases',$total],['Planning',$planning],['In Review',$inReview],['Approved',$approved],['Completed',$completed]] as $stat)
<div class="col-6 col-lg"><div class="card p-3 h-100"><div class="text-secondary small">{{ $stat[0] }}</div><div class="stat">{{ $stat[1] }}</div></div></div>
@endforeach
</div>
<div class="card p-3"><h2 class="h5">Recently added cases</h2><div class="table-responsive"><table class="table align-middle"><thead><tr><th>Case number</th><th>Surgeon</th><th>Status</th><th>Priority</th><th></th></tr></thead><tbody>
@forelse($recentCases as $case)<tr><td>{{ $case->case_number }}</td><td>{{ $case->surgeon_name }}</td><td>{{ $case->status }}</td><td>{{ $case->priority }}</td><td><a href="{{ route('cases.show',$case) }}">View</a></td></tr>@empty<tr><td colspan="5">No cases yet.</td></tr>@endforelse
</tbody></table></div></div>
@endsection
