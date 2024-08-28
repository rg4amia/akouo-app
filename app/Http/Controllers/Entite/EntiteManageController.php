<?php

namespace App\Http\Controllers\Entite;

use App\Http\Controllers\Controller;
use App\Models\Entite;
use App\Models\Predicateur;
use App\Models\TypeStructure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class EntiteManageController extends Controller
{
    public function index(){

        $entites        = Entite::with(['typestructure', 'assigne'])->latest()->paginate(15);
        $typestructures = TypeStructure::pluck('libelle','id');
        $users          = Predicateur::select(DB::raw("CONCAT(nom, ' ', prenoms) AS full_name"),'id')->where('note',1)->pluck('full_name','id');

        return view('entite.index',compact('entites', 'typestructures','users'));
    }

    public function store(Request $request){

        $request->validate([
            'state' => 'required|int',
            'libelle' => 'required|string',
            'entite_origine' => 'required|string',
            'predicateur_id' => 'required|string'
        ]);

        DB::beginTransaction();

        try {

            $entite = Entite::create([
                'state' =>   $request->state,
                'libelle' => $request->libelle,
                'entite_origine' => $request->entite_origine,
                'predicateur_id' => $request->predicateur_id
            ]);

            $predicateur = Predicateur::find($request->predicateur_id);

            $predicateur->update([
                'entite_id' => $entite->id
            ]);

            session()->flash('success','Enregistrement effectué avec succès');

            DB::commit();

        } catch (\Exception $e){

            DB::rollBack();

            Log::error($e->getMessage());

            session()->flash('warning','Une erreur est survenue !!!');
        }

        return back();
    }

    public function update(Request $request,$id){

        DB::beginTransaction();

        try {

            $entite = Entite::find($id);

            $entite->update([
                'state'             => $request->state,
                'libelle'           => $request->libelle,
                'entite_origine'    => $request->entite_origine,
                'predicateur_id'    => $request->predicateur_id
            ]);

            $predicateur = Predicateur::find($request->predicateur_id);

            $predicateur->update([
                'entite_id' => $entite->id
            ]);

            session()->flash('success','Modification effectué avec succès');

            DB::commit();

        } catch (\Exception $e){

            DB::rollBack();

            Log::error($e->getMessage());

            session()->flash('warning','Une erreur est survenue !!!');
        }

        return back();
    }

    public function destroy($id){

        $entite = Entite::find($id);

        $entite->delete();

        return back()->with('warning','Suppression effectué avec succés !!');
    }
}
