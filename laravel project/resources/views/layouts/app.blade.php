<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title', 'Medical Case Management')</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
      body{background:#f4f7fb;color:#182230}.navbar{background:#12304a}.navbar a,.navbar .navbar-brand{color:white}
      .card{border:0;border-radius:14px;box-shadow:0 5px 20px #102a4310}.stat{font-size:1.8rem;font-weight:700}
      .container{max-width:1150px}.form-label{font-weight:600}.table th{white-space:nowrap}
    </style>
</head>
<body>
<nav class="navbar navbar-expand-lg mb-4"><div class="container">
<a class="navbar-brand fw-bold" href="{{ route('dashboard') }}">Medical Case Manager</a>
<div class="d-flex gap-3 align-items-center">
@if(auth()->check())
<a href="{{ route('dashboard') }}">Dashboard</a><a href="{{ route('cases.index') }}">Cases</a>
<span class="text-white small">{{ auth()->user()->name }} ({{ auth()->user()->role }})</span>
<form method="POST" action="{{ route('logout') }}">@csrf<button class="btn btn-sm btn-outline-light">Logout</button></form>
@endif
</div></div></nav>
<main class="container pb-5">
@if(session('success'))<div class="alert alert-success">{{ session('success') }}</div>@endif
@if($errors->any())<div class="alert alert-danger"><strong>Please check the form.</strong><ul class="mb-0">@foreach($errors->all() as $error)<li>{{ $error }}</li>@endforeach</ul></div>@endif
@yield('content')
</main>
</body></html>
