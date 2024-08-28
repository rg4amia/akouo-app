<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Entite;
use App\Models\Pays;
use App\Models\RecordAudio;
use App\Models\TypeStructure;
use App\Models\User;
use App\Models\Ville;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(){

        $pays               = Pays::orderBy('libelle','ASC')->pluck('libelle','libelle');
        $villes             = Ville::orderBy('libelle','ASC')->pluck('libelle','libelle');
        $assembleorigines   = TypeStructure::pluck('libelle','id');
        $entites            = Entite::pluck('libelle','id');
        $records            = RecordAudio::with('note')->get()->take(5);
        $list_entites       = Entite::get()->take(5);
        $users              = User::with('predicateur')->get();

        return view('dashboard.index', [
            'pays'              => $pays,
            'villes'            => $villes,
            'assembleorigines'  => $assembleorigines,
            'entites'           => $entites,
            'records'           => $records,
            'users'             => $users,
            'list_entites'      => $list_entites,
        ]);
    }
}
