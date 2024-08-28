<?php

namespace App\Http\Controllers\ApiBackend;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginBackEndRequest;
use App\Http\Resources\UserResource;
use App\Models\Predicateur;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class LoginController extends Controller
{
    public function login(LoginBackEndRequest $request)
    {
        /**/
        Log::info($request->telephone);

        $user = User::where([
            "telephone" => $request->telephone,
            "indicatif" => $request->indicatif,
            "email"     => $request->email
        ])->first();

        if (is_null($user)) {

            return response()->json([
                "status" => "failed",
                "errors" => "Vos paramètres de connexion sont incorrecte !!!"
            ], 401);
        }

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {

            $user  = Auth::user();
            $token = $user->createToken('token')->plainTextToken;

            return response()->json([
                'success'                 => true,
                'token'                   => $token,
                'user'                    => new UserResource($user),
                'role'                    => $user->roles,
            ], 200);
        } else {

            return response()->json([
                'success' => false,
                'errors'  => 'email ou mot de passe invalide',
            ], 401);
        }
    }
}
