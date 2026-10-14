<?php

namespace App\Http\Controllers\Api;

trait ApiResponse
{
    protected function ok($data = null, string $message = 'OK', int $status = 200)
    {
        return response()->json(['success' => true, 'data' => $data, 'message' => $message], $status);
    }

    protected function fail(string $message, int $status, $data = null)
    {
        return response()->json(['success' => false, 'data' => $data, 'message' => $message], $status);
    }
}
