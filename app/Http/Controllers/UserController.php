<?php

namespace App\Http\Controllers;

use App\Helpers\FileUploader;
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
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
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
    public function store(UserStoreRequest $request)
    {
        try {
            // Loop through each item in the request's affecter_entite array and collect the 'value' fields
            $entiteIds = collect($request->affecter_entite)->pluck('value')->all();

            $entites = Entite::whereIn('id', $entiteIds)->get();

            //process save avatar profile user
            $avatarPath = null;
            if ($request->hasFile('photo')) {
                $fileName = 'AVATAR_' . $request->nom . '_' . $request->prenoms  . '_' . $request->telephone;
                $avatarPath = FileUploader::upload($request, 'photo', 'public', 'AVATAR/' . Str::upper(str_replace(" ", "_", $fileName) . '.' . $request->photo->extension()));
            }

            $role_r = Role::where('id', '=', $request->role)->firstOrFail();

            $user  = User::create([
                'name' => $request->nom . ' ' . $request->prenoms,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'telephone' => $request->telephone,
                'note' => $request->type_utilisateur_id == 3 ? 1 : 0,
                'enregistre' => $request->type_utilisateur_id == 2 ? 1 : 0,
                'indicatif' => null,
                'active' => 0,
                'pay_id' => $request->pay_id,
                'cellule_id' => $request->cellule_id, // cellule
                'type_utilisateur_id' => $request->type_utilisateur_id,
                'entite_origine_id' => $request->entite_origine_id,
                'status_user_id' => $request->status_user_id,
                'created_by' => Auth::id(),
                'photo' => $avatarPath
            ]);

            $user->assignRole($role_r);
            $user->entites()->attach($entites);

            return redirect()->route('user.index')->with(['success' => 'Utilisateur enregistré avec succès!']);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return redirect()->back()->with(['error' => 'Erreur survenue pendant l\'enregistrement']);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return Inertia::render('Users/Show', ['user' => $user]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $nameUser = $user->name;
        $user->delete();

        return redirect()->route('user.index')->with('error', "Utilisateur $nameUser a été supprimer");
    }
}
