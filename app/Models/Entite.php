<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Entite extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'libelle',
        'state',
        'rattachement',
        'predicateur_id',
        'pay_id',
        'type_entite_id',
        'zone_id',
        'link_maps',
    ];

    public function user(){
        return $this->belongsToMany(User::class);
    }

    public function TypeEntite(){
        return $this->belongsTo(TypeEntite::class,'state','id');
    }

    public function assigne(){
        return $this->belongsTo(Predicateur::class, 'id', 'entite_id' );
    }

    public function noteur(){
        return $this->belongsTo(Predicateur::class,'predicateur_id','id');
    }
}
