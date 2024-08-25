<?php

namespace App\Http\Controllers;

use App\Http\Resources\RoleResource;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Services\UserService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    protected UserService $userService;
    public $loadDefault = 10;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }



    /**
     * Display a listing of the resource.
     */
    public function index(Request $request) {
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

        return inertia('Users/Index', [
            'users' => $users
        ]);
    }

    /* public function index(Request $request)
    {
        $query = User::query();

        if ($request->has('search')) {
            $searchTerm = $request->search;
            $query->where(function ($q) use ($searchTerm) {
                $q->where('name', 'like', "%{$searchTerm}%")
                ->orWhere('email', 'like', "%{$searchTerm}%");
            });
        }

        $sortColumn = $request->input('sort', 'id');
        $sortDirection = $request->input('direction', 'asc');

        $query->orderBy($sortColumn, $sortDirection);

        $perPage = $request->input('perPage', 10);

        $users = $query->paginate($perPage)->withQueryString();

        return Inertia::render('Users/Index', [
            'users' => $users,
            'filters' => $request->only(['search', 'sort', 'direction', 'perPage']),  // Pass only the first set of pagination links
        ])->with('success', 'Akwaba chez vous !!!');
    } */

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $search = $request->input('search');
        $perPage = $request->input('perPage', 10);
        $sortField = $request->input('sort')['field'] ?? 'id';
        $sortDirection = $request->input('sort')['direction'] ?? 'asc';

        $query = User::query();

        if ($search) {
            $query->where('name', 'like', '%' . $search . '%')
                ->orWhere('email', 'like', '%' . $search . '%');
        }

        $data = $query->orderBy($sortField, $sortDirection)
            ->paginate($perPage)
            ->appends([
                'search' => $search,
                'perPage' => $perPage,
                'sort' => compact('sortField', 'sortDirection'),
            ]);

        return response()->json([
            'data' => $data->items(),
            'links' => $data->links()->elements[0]
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
