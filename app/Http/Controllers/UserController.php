<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserStoreRequest;
use App\Http\Resources\AffectesResource;
use App\Http\Resources\CelluleResource;
use App\Http\Resources\EntiteResource;
use App\Http\Resources\PaysResource;
use App\Http\Resources\RoleResource;
use App\Http\Resources\StatusUserResource;
use App\Http\Resources\TypeUtilisateurResource;
use App\Http\Resources\UserResource;
use App\Models\Cellule;
use App\Models\Entite;
use App\Models\Pays;
use App\Models\StatusUser;
use App\Models\TypeUtilisateur;
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
            ],
            'pays'              => (PaysResource::collection(Pays::all())),
            'type_utilisateurs' => (TypeUtilisateurResource::collection(TypeUtilisateur::all())),
            'roles'             => (RoleResource::collection(Role::all())),
            'status_users'      => (StatusUserResource::collection(StatusUser::all())),
            'entites'           => (EntiteResource::collection(Entite::all())),
            'cellules'          => (CelluleResource::collection(Cellule::all())),
            'affectes'          => (AffectesResource::collection(User::whereIn('id', [1, 2, 3, 4, 5, 6])->get())),
        ]);

        return Inertia::render('Users/Index', [
            'users' => $users,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request) {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        //UserStoreRequest

        /*   nom: "",
        prenoms: "",
        telephone: "",
        email: "",
        type_utilisateur_id: "",
        pay_id:"",
        role:"",
        password:"",
        entite_origine_id: "",
        status_user_id: "",
        affecter_entite:"",
        cellule_id:"", */
        dd($request->all());

        $request->user()->users()->create($validated);
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
