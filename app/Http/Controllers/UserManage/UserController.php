<?php

namespace App\Http\Controllers\UserManage;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserPredicateurRequest;
use App\Models\Entite;
use App\Models\TypeStructure;
use App\Models\User;
use App\Services\ParameterService;
use App\Services\Predicateur\PredicateurService;
use App\Services\User\UserSave;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function index(){

        $users          = User::with('predicateur')->paginate(12);
        $entites        = Entite::pluck('libelle','id');
        $roles          = Role::all()->pluck('name','id');

        return view('usersmanage.index',compact('users','entites','roles'));
    }

    public function store(StoreUserPredicateurRequest $request){

        try {

            DB::beginTransaction();

            //enregistrement users
            $user = UserSave::save($request);

            // assigner les rôle [enregistreurs,noteurs] en fonction des choix de l'utilisateur
            if($user->note == 1){
                $user->assignRole('Noteurs');
            } else {
                $user->assignRole('Enregisteurs');
            }

            //génerer le token avec sanctum le avec l'utilisateur connecté...
            $user->createToken('token')->plainTextToken;

            //création du compte predicateur...
            PredicateurService::save($request,$user);
            DB::commit();
            session()->flash('success','Utilisateur, ajoute avec succès !!!');

        } catch (\Exception $e) {

            DB::rollBack();
            session()->flash('warning','Erreur survenue pendant l\' enregistrement !!');
            Log::info($e->getMessage());
        }

        return redirect()->back()->with('succes','Utilisateur, ajoute avec succès !!!');
    }

    public function entiteByStructure($id){
        $parametre =  new ParameterService();
        return response()->json($parametre->entiteByStructure($id));
    }
}
