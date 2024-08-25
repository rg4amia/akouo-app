<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecordAudio extends Model
{
    use HasFactory;

    protected $fillable = [
        'path',
        'titre',
        'theme_message',
        'verset_base',
        'source',
        'source_convert',
        'observation',
        'date_recording',
        'predicateur_id',
        'user_id'
    ];

    protected $table = 'record_audios';

    public function note(){
        return $this->hasMany(Note::class, 'record_audio_id', 'id');
    }

    public function predicateur() {
        return $this->belongsTo(Predicateur::class, 'predicateur_id', 'id');
    }

    public function zone() {
        return $this->belongsTo(Zone::class, 'zone_id', 'id');
    }
}
