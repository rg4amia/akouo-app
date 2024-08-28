<?php

namespace App\Http\Controllers\Api;

use App\Helpers\FileUploader;
use App\Http\Controllers\Controller;
use App\Http\Resources\RecordAudioResource;
use App\Jobs\ConvertAudioProcess;
use App\Models\Predicateur;
use App\Models\RecordAudio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class RecordAudioController extends Controller
{
    public function indexRecordByPredicateur(){
        $resource = RecordAudioResource::collection(RecordAudio::with('note')->where('user_id', auth()->id())->orderBy('id', 'DESC')->get());
        return response()->json($resource);
    }

    public function index(){
        $resource = RecordAudioResource::collection(RecordAudio::orderBy('id', 'DESC')->get());

        return response()->json([
            'success'   => false,
            'recordaudio' => $resource,
            'message' => 'Liste de mes enregistrements'
        ], 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'path' => 'required|file',
            'titre' => 'required|string',
            'theme_message' => 'required|string',
            'verset_base' => 'required|string',
            'source' => 'required|string',
            //'observation' => 'required|string',
            'date_recording' => 'required|date'
        ]);

        try {

            DB::beginTransaction();
            $data = $request->all();

            if ($request->hasFile('path')) {
                $fileName = 'AUDIO_' . $request->titre .'.' . $request->path->extension() ;
                $path = FileUploader::upload($request, 'path', 'public', 'AUDIO/' . str_replace(" ", "_", $fileName));
            }

            Log::info($path);

            $data['path'] = $path;
            $data['user_id'] = auth()->id();
            $data['predicateur_id'] = Predicateur::where('user_id', auth()->id())->first()->id;

            $record = RecordAudio::create($data);
            ConvertAudioProcess::dispatch($record);

            DB::commit();

        } catch (\Exception $e) {
            Log::info($e->getMessage());
            return response()->json([
                'success'   => false,
                'message' => $e->getMessage()
            ], 401);
        }

        return response()->json([
            'success'   => true,
            'message'   => 'Enregistré avec succées'
        ], 200);
    }
}
