<?php

namespace App\Http\Controllers;

use App\Http\Resources\RoleResource;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Services\DataTableFetchService;
use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    protected UserService $userService;
    public $loadDefault = 10;
    protected dataTableFetchService $dt;

    public function __construct(UserService $userService, DataTableFetchService $dt)
    {
        $this->userService = $userService;
        $this->dt = $dt;
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $users = (
            UserResource::collection(User::paginate($request->load))
        )->additional([
            'attributes' => [
                'total' => User::count(),
                'per_page' => 10
            ],
            'filtered' => [
                'load' => $request->load ?? $this->loadDefault
            ]
        ]);

        //Log::info(json_encode($request->all()));

        return inertia('Users/Index', [
            'users' => $users
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $users = User::orderBy('name', 'ASC')->get();

        //dd($request->all());

        /* if ($request->ajax()) {
            return $this->dt->fetchUser($request, $users);
        } */

        return response()->json($users);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'message' => 'required|string|max:255',
        ]);

        $request->user()->chirps()->create($validated);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
