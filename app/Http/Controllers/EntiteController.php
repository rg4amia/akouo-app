<?php

namespace App\Http\Controllers;

use App\Http\Requests\EntiteStoreRequest;
use App\Http\Resources\EntiteFullResource;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\PaysResource;
use App\Http\Resources\EntiteResource;
use App\Http\Resources\RattachementResource;
use App\Http\Resources\TypeEntiteResource;
use App\Http\Resources\UserResource;
use App\Http\Resources\ZoneResource;
use App\Models\Entite;
use App\Models\Pays;
use App\Models\Rattachement;
use App\Models\TypeEntite;
use App\Models\User;
use App\Models\Zone;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class EntiteController extends Controller
{

    public $loadDefault = 10;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $entites = (
            EntiteFullResource::collection(Entite::paginate($request->load))
        )->additional([
            'attributes' => [
                'total' => Entite::count(),
                'per_page' => 10
            ],
            'filtered' => [
                'load' => $request->load ?? $this->loadDefault
            ],
            'pays'              => (PaysResource::collection(Pays::all())),
            'type_entites'      => (TypeEntiteResource::collection(TypeEntite::all())),
            'entites'           => (EntiteResource::collection(Entite::all())),
            'rattachements'     => (RattachementResource::collection(Rattachement::all())),
            'users'             => (UserResource::collection(User::where('id', '!=', 1)->get())),
            'zones'             => (ZoneResource::collection(Zone::all())),
        ]);

        return Inertia::render('Entite/Index', [
            'entites' => $entites
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EntiteStoreRequest $request)
    {
        try {
            // Loop through each item in the request's affecter_entite array and collect the 'value' fields
            $userIds = collect($request->affecter_entite)->pluck('value')->all();
            $users = User::whereIn('id', $userIds)->get();
            $entite = Entite::create($request->all());
            $entite->rattachement = Rattachement::find($request->rattachement_id)->value('libelle');
            $entite->created_by = Auth::id();
            $entite->users()->attach($users);
            $entite->save();
            //['success' => 'Utilisateur enregistré avec succès!']
            return redirect()->route('entite.index')->with(['success' => 'Entité enregistré avec succès!']);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return redirect()->route('entite.index')->with(['error' => 'Erreur survenue lors l\'enregistrement']);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Entite $entite)
    {
        return Inertia::render('Entite/Show', ['entite' => new EntiteFullResource($entite)]);
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
