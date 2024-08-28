<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UserLoginResquest;
use App\Services\User\UserConnexion;

class AuthFontEndController extends Controller
{
    public function index()
    {
        return view('auth.login');
    }

    public function login(UserLoginResquest $request)
    {
       $userResponse = UserConnexion::connexion($request);

        if ($userResponse) {
            $request->session()->regenerate();
            return redirect()->intended('accueil');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }
}
