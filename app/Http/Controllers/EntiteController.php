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
use Illuminate\Support\Facades\Validator;

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

    /* public function index(Request $request)
    {
        $query = Entite::query();

        // Apply search filter
        if ($request->has('search')) {
            $searchTerm = $request->input('search');
            $query->where(function ($q) use ($searchTerm) {
                $q->where('name', 'like', "%{$searchTerm}%")
                ->orWhere('description', 'like', "%{$searchTerm}%")
                ->orWhere('status', 'like', "%{$searchTerm}%");
            });
        }

        // Apply sorting
        $sortBy = $request->input('sort_by', 'id');
        $sortDirection = $request->input('sort_direction', 'asc');
        $query->orderBy($sortBy, $sortDirection);

        // Pagination
        $perPage = $request->input('per_page', 10);
        $entites = $query->paginate($perPage);

        return Inertia::render('Entite/Index', [
            'entites' => [
                'data' => $entites->items(),
                'current_page' => $entites->currentPage(),
                'per_page' => $entites->perPage(),
                'last_page' => $entites->lastPage(),
                'total' => $entites->total(),
                'sort_by' => $sortBy,
                'sort_direction' => $sortDirection,
                'pays'              => (PaysResource::collection(Pays::all())),
                'type_entites'      => (TypeEntiteResource::collection(TypeEntite::all())),
                'entites'           => (EntiteResource::collection(Entite::all())),
                'rattachements'     => (RattachementResource::collection(Rattachement::all())),
                'users'             => (UserResource::collection(User::where('id', '!=', 1)->get())),
                'zones'             => (ZoneResource::collection(Zone::all())),
            ],
            'filters' => $request->only(['search', 'sort_by', 'sort_direction', 'per_page']),
        ]);
    } */

    public function bulkAction(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'action' => 'required|string|in:delete,activate,deactivate',
            'ids' => 'required|array',
            'ids.*' => 'exists:entites,id',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $action = $request->input('action');
        $ids = $request->input('ids');

        switch ($action) {
            case 'delete':
                Entite::whereIn('id', $ids)->delete();
                $message = 'Entities deleted successfully';
                break;
            case 'activate':
                Entite::whereIn('id', $ids)->update(['status' => 'active']);
                $message = 'Entities activated successfully';
                break;
            case 'deactivate':
                Entite::whereIn('id', $ids)->update(['status' => 'inactive']);
                $message = 'Entities deactivated successfully';
                break;
            default:
                return response()->json(['message' => 'Invalid action'], 400);
        }

        return response()->json(['message' => $message]);
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
