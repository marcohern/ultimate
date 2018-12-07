<?php

namespace App\Http\Controllers\Ultimate;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AccountController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api');
    }
    //
    public function logout(Request $request) {
        $user = $request->user();
        $token = $user->token();
        $token->revoke();

        return ['success' => true];
    }
}
