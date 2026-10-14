<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthApiController extends Controller
{
    use ApiResponse;

    public function login(Request $request)
    {
        $input = $request->validate(['email' => ['required','email'], 'password' => ['required','string']]);
        $user = User::where('email', $input['email'])->first();
        if (!$user || !Hash::check($input['password'], $user->password)) {
            return $this->fail('The email or password is incorrect.', 401);
        }
        $token = $user->createToken('case-management-api')->plainTextToken;
        return $this->ok(['token' => $token, 'user' => ['id' => $user->id, 'name' => $user->name, 'email' => $user->email, 'role' => $user->role]], 'Login successful.');
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()?->delete();
        return $this->ok(null, 'Logged out successfully.');
    }
}
