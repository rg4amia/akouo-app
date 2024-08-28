<?php

namespace App\Http\Controllers\ApiBackend;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;

class UserController extends Controller
{


    public function index() {
        return UserResource::collection(User::all());
    }

    /**
     * Store a newly created user.
     *
     * @param RegisterUserRequest $request The request object containing the user data.
     * @return \Illuminate\Http\JsonResponse The JSON response containing the success status, token, user resource, and role.
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException If user creation fails.
     */
    public function store(RegisterUserRequest $request)
    {
        $userData = $request->only(['telephone', 'indicatif', 'email', 'password']);
        $userData['password'] = bcrypt($userData['password']);

        $user = User::create($userData);

        if (!$user) {
            throw new \Illuminate\Database\Eloquent\ModelNotFoundException("User creation failed.");
        }

        $token = $user->createToken('token')->plainTextToken;

        $user->roles()->sync(3);

        return response()->json([
            'success'                 => true,
            'token'                   => $token,
            'user'                    => new UserResource($user),
            'role'                    => $user->roles,
        ], 200);
    }
}
