<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use App\Models\RecordAudio;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(){
        $records = RecordAudio::with('note')->paginate(15);
        return view('home.index',compact('records'));
    }
}
