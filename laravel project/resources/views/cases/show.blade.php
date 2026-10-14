@extends('layouts.app')
@section('title','Case details')
@section('content')
<div class="d-flex justify-content-between align-items-center mb-3"><div><h1 class="h3 mb-1">{{ $case->case_number }}</h1><p class="text-secondary mb-0">Case details</p></div><div class="d-flex gap-2"><a class="btn btn-outline-secondary" href="{{ route('cases.index') }}">Back</a>@can('update',$case)<a class="btn btn-primary" href="{{ route('cases.edit',$case) }}">Edit</a>@endcan @can('delete',$case)<form method="POST" action="{{ route('cases.destroy',$case) }}" onsubmit="return confirm('Delete this case?')">@csrf @method('DELETE')<button class="btn btn-danger">Delete</button></form>@endcan</div></div>
<div class="card p-4"><div class="row g-4">
@foreach(['Patient Reference'=>'patient_reference','Surgeon Name'=>'surgeon_name','Implant Type'=>'implant_type','Status'=>'status','Priority'=>'priority'] as $label=>$field)<div class="col-md-6"><div class="text-secondary small">{{ $label }}</div><div class="fw-semibold">{{ $case->$field }}</div></div>@endforeach
<div class="col-md-6"><div class="text-secondary small">Surgery Date</div><div>{{ $case->surgery_date?->format('Y-m-d') ?? 'Not set' }}</div></div>
<div class="col-md-6"><div class="text-secondary small">Created By</div><div>{{ $case->creator?->name ?? 'Unknown' }}</div></div>
<div class="col-md-6"><div class="text-secondary small">Created At</div><div>{{ $case->created_at->format('d M Y, H:i') }}</div></div>
<div class="col-md-6"><div class="text-secondary small">Last Updated</div><div>{{ $case->updated_at->format('d M Y, H:i') }}</div></div>
</div></div>
@endsection
