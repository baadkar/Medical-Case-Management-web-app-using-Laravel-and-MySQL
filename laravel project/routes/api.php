<?php

use App\Http\Controllers\Api\AuthApiController;
use App\Http\Controllers\Api\CaseApiController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthApiController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthApiController::class, 'logout']);
    Route::get('/cases', [CaseApiController::class, 'index']);
    Route::post('/cases', [CaseApiController::class, 'store']);
    Route::get('/cases/{case}', [CaseApiController::class, 'show']);
    Route::put('/cases/{case}', [CaseApiController::class, 'update']);
    Route::delete('/cases/{case}', [CaseApiController::class, 'destroy']);
});
