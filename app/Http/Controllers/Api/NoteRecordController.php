<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\NoteResource;
use App\Models\Note;
use App\Models\Predicateur;
use App\Rules\NoteRule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class NoteRecordController extends Controller
{
    public function store(Request $request)
    {

        //dd(Rule::requiredIf($request->input('vst_base') == 'Selectionner'));
        //strtolower($request->input('vst_base')) == 'selectionner'
        $validator = Validator::make($request->all(), [
            'vst_base'          => 'required|string',
            'vst_bibl_expl'     => 'required|string',
            'coherence_vst'     => 'required|string',
            'thematiq_msg'      => 'required|string',
            'compreh_msg'       => 'required|string',
            'lng_compreh_acces' => 'required|string',
            'cible_claire'      => 'required|string',
            'ms_pratk_msg'      => 'required|string',
            'expl_util'         => 'required|string',
            'msg_fidel_mhs'     => 'required|string',
            'note_global'       => 'required|string',
            'point_alerte'      => 'required|string',
            'observation'       => 'required|string',
            'recommandation'    => 'required|string',
            'record_audio_id'   => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                "errors" => [
                    $validator->errors()
                ]
            ], 422);
        }

        $data =  $request->all();
        $data['predicateur_id'] = Predicateur::where('user_id', auth()->id())->first()->id;

        //Log::info($data);

        try {
            $nt = Note::create($data);
            //$note = Note::findOrFail($nt->id);
        } catch (\Exception $e) {
            return response()->json([
                'success'   => false,
                'note' => null,
                'message' => 'Réessayez, votre note n\'a pas été soumise.'
            ], 401);

            Log::info($e->getMessage());
        }

        return response()->json([
            'success'   => true,
            'note'      =>  NoteResource::make($nt),
            'message'   => 'Félicitations, votre note a bien été soumise.'
        ], 200);
    }
}
