<?php

namespace App\Http\Controllers\ApiBackend;

use App\Http\Controllers\Controller;
use App\Http\Resources\RecordAudioResource;
use App\Models\RecordAudio;
use Illuminate\Http\Request;

class RecordingController extends Controller
{
    public function index() {
        $records = RecordAudio::get();
        $recordresource =  RecordAudioResource::collection($records);
        return $recordresource;
    }
}
