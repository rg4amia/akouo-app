<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    use HasFactory;

    protected $fillable = [
        'vst_base',
        'vst_bibl_expl',
        'coherence_vst',
        'thematiq_msg',
        'compreh_msg',
        'lng_compreh_acces',
        'cible_claire',
        'ms_pratk_msg',
        'expl_util',
        'msg_fidel_mhs',
        'note_global',
        'point_alerte',
        'observation',
        'recommandation',
        'predicateur_id',
        'record_audio_id',
    ];

    public function predicateur(){
        return $this->belongsTo(Predicateur::class,'predicateur_id','id');
    }

    public function record_audio(){
        return $this->belongsTo(RecordAudio::class,'record_audio_id','id');
    }
}
