<?php

namespace App\Http\Controllers\Statistique;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StatistiqueController extends Controller
{
    public function index(){
        return view('statistique.index');
    }
}
