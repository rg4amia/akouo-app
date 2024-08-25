<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Predicateur extends Model
{
    use HasFactory;

    protected  $fillable = [
        'nom',
        'prenoms',
        'indicatif',
        'telephone',
        'type_structure_id',
        'entite_id',
        'nom_structure',
        'note',
        'enregistre',
        'email',
        'user_id',
        'photo',
        'pay_id',
        'type_utilisateur_id',
        'entite_origine_id'
    ];

    public function typeentite(){
        return $this->belongsTo(TypeEntite::class, 'type_structure_id','id');
    }

    public function entite(){
         return $this->belongsTo(Entite::class, 'entite_id', 'id');
    }
}
