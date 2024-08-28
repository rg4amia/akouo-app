<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Predicateur;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class AuthenticateController extends Controller
{
    public function login(Request $request)
    {
        $rules = array(
            'telephone'   => 'required|string',
            'indicatif'   => 'required|string',
            'password'    => 'required|string|min:2',
        );

        $messages = [
            'indicatif.required'=> 'Le champ indicatif est obligatoire',
            'telephone.required'=> 'Le champ contact est obligatoire',
            'password.required' => 'Le mot de passe est obligatoire',
            'password.min'      => 'Accepte au moins 2 caractères.',
        ];

        $validator = Validator::make($request->all(), $rules, $messages);

        if ($validator->fails()) {

            return response()->json([
                "errorsvalidation" => [
                    "telephone"  => $validator->errors()->first('telephone'),
                    'indicatif'   => $validator->errors()->first('indicatif'),
                    'password'   => $validator->errors()->first('password')
                ]
            ], 422);
        }

        $user = User::where([
            "telephone" => $request->telephone,
            "indicatif" => $request->indicatif
            ])->first();

        if (is_null($user)) {

            return response()->json([
                "status" => "failed",
                "errors" => "Email ou Mot de Passe invalide"
            ], 401);
        }

        if (Auth::attempt(['telephone' => $request->telephone, 'password' => $request->password])) {

            $user  = Auth::user();
            $token = $user->createToken('token')->plainTextToken;

            $predicateur = Predicateur::where('user_id',auth()->id())->first();

            return response()->json([
                    'success'                 => true,
                    'token'                   => $token,
                    'user'                    => Auth::user(),
                    'predicateur'             => $predicateur,
            ], 200);

        } else {

            return response()->json([
                'success' => false,
                'errors'  => 'email ou mot de passe invalide',
            ], 401);

        }
    }

    public function store(Request $request){

        $validator = Validator::make($request->all(), [
            'nom' => 'required|string',
            'prenoms' => 'required|string',
            'indicatif' => 'required|string',
            'telephone' => 'required|numeric|unique:users,telephone',
            'email' => 'required_if:email,email|unique:users,email',
            'type_structure_id' => 'required|string',
            'entite_id' => 'required|string',
            'nom_structure' => 'required|string',
            'enregistre' => 'required|string',
            'note' => 'required|string',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json([
               "errors" => [
                    $validator->errors()
                ]
            ], 422);
        }

        $data = $request->all();
        $data['enregistre'] = $request->enregistre == "1" ? true : false;
        $data['note'] = $request->note == "1" ? true : false;

        try {

            DB::beginTransaction();

            //enregistrement users
            $user = User::create([
                'name' => $request->nom . ' ' . $request->prenoms,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'enregistre' => $data['enregistre'],
                'note' => $data['note'],
                'telephone' => $request->telephone,
                'indicatif' => $request->indicatif,
            ]);

            // assigner les rôle [enregistreurs,noteurs] en fonction des choix de l'utilisateur
            if($user->note == 1){
                $user->type_utilisateur_id = 3;
            } else {
                $user->type_utilisateur_id = 2;
            }

            $user->assignRole('User');

            Auth::login($user);

            $user  = Auth::user();
            //génerer le token avec sanctum le avec l'utilisateur connecté...
            $token = $user->createToken('token')->plainTextToken;

            $data['user_id'] = auth()->id();

            Log::info($data['user_id']);

            $user = User::select('name','email','password','telephone','note','enregistre')->find(auth()->id());

            //création du compte predicateur...
            $pred = Predicateur::create($data);
            $predicateur = Predicateur::select('nom', 'prenoms', 'indicatif', 'telephone', 'type_structure_id', 'entite_id', 'nom_structure', 'note', 'enregistre', 'email', 'user_id')->findOrFail($pred->id);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            return response()->json([
                'success'   => false,
                'message' => $e->getMessage()
            ], 401);
        }

        return response()->json([
            'success'                 => true,
            'token'                   => $token,
            'user'                    => $user,
            'predicateur'             => $predicateur,
            'message'                 => "Compte enregistré avec succèss",
        ], 200);
    }
}

