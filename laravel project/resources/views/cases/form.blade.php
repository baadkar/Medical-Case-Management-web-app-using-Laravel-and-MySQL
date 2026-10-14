@extends('layouts.app')
@section('title', $editing ? 'Edit case' : 'Create case')
@section('content')
<h1 class="h3 mb-3">{{ $editing ? 'Edit case' : 'Create a case' }}</h1>
<div class="card p-4"><form method="POST" action="{{ $editing ? route('cases.update',$case) : route('cases.store') }}">@csrf @if($editing) @method('PUT') @endif
<div class="row g-3">
@php($fields=[['case_number','Case Number','text'],['patient_reference','Patient Reference','text'],['surgeon_name','Surgeon Name','text'],['implant_type','Implant Type','text']])
@foreach($fields as [$name,$label,$type])<div class="col-md-6"><label class="form-label" for="{{ $name }}">{{ $label }} <span class="text-danger">*</span></label><input id="{{ $name }}" class="form-control @error($name)is-invalid @enderror" type="{{ $type }}" name="{{ $name }}" value="{{ old($name,$case->$name) }}" required>@error($name)<div class="invalid-feedback">{{ $message }}</div>@enderror</div>@endforeach
<div class="col-md-6"><label class="form-label">Status *</label><select name="status" class="form-select @error('status')is-invalid @enderror" required>@foreach(['Draft','Planning','In Review','Approved','Completed','Cancelled'] as $status)<option value="{{ $status }}" @selected(old('status',$case->status ?: 'Draft')===$status)>{{ $status }}</option>@endforeach</select>@error('status')<div class="invalid-feedback">{{ $message }}</div>@enderror</div>
<div class="col-md-6"><label class="form-label">Priority *</label><select name="priority" class="form-select @error('priority')is-invalid @enderror" required>@foreach(['Low','Medium','High'] as $priority)<option value="{{ $priority }}" @selected(old('priority',$case->priority ?: 'Medium')===$priority)>{{ $priority }}</option>@endforeach</select>@error('priority')<div class="invalid-feedback">{{ $message }}</div>@enderror</div>
<div class="col-md-6"><label class="form-label">Surgery Date</label><input type="date" name="surgery_date" class="form-control @error('surgery_date')is-invalid @enderror" value="{{ old('surgery_date',$case->surgery_date?->format('Y-m-d')) }}">@error('surgery_date')<div class="invalid-feedback">{{ $message }}</div>@enderror</div>
</div><div class="mt-4 d-flex gap-2"><button class="btn btn-primary">{{ $editing ? 'Save changes' : 'Create case' }}</button><a href="{{ route('cases.index') }}" class="btn btn-outline-secondary">Cancel</a></div>
</form></div>
@endsection
