<?php

namespace App\Http\Controllers\Enregistrement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EnregistrementController extends Controller
{
    public function index(){
        return view('enregistrement.index');
    }
}
