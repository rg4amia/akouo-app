<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Entite;
use App\Models\TypeEntite;
use Illuminate\Http\Request;

class ParameterController extends Controller
{
    public function index(){

        $structure = TypeEntite::where('state', 1)->get();
        $entite = Entite::all();

        return response()->json([
            'success'    => true,
            'entite'     => $entite,
            'structure'  => $structure,
        ], 200);
    }


}
