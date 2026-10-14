<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Login</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"></head>
<body class="bg-light"><div class="container min-vh-100 d-flex align-items-center justify-content-center"><div class="card shadow-sm p-4" style="width:100%;max-width:430px"><h2 class="mb-1">Medical Case Manager</h2><p class="text-secondary">Sign in to continue</p>
@if($errors->any())<div class="alert alert-danger">The email or password is incorrect. Please try again.</div>@endif
<form method="POST" action="{{ route('login.submit') }}">@csrf
<div class="mb-3"><label class="form-label">Email</label><input class="form-control" type="email" name="email" value="{{ old('email') }}" required autofocus>@error('email')<div class="text-danger small">{{ $message }}</div>@enderror</div>
<div class="mb-3"><label class="form-label">Password</label><input class="form-control" type="password" name="password" required></div>
<div class="form-check mb-3"><input class="form-check-input" type="checkbox" name="remember" id="remember"><label for="remember" class="form-check-label">Remember me</label></div>
<button class="btn btn-primary w-100">Login</button></form>
<p class="small text-muted mt-3 mb-0">Demo: admin@example.test / Password123!</p></div></div></body></html>
