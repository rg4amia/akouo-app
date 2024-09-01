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

    public function typeentite(){
        return $this->belongsTo(TypeEntite::class,'state','id');
    }

    public function assigne(){
        return $this->belongsTo(Predicateur::class, 'id', 'entite_id' );
    }

    public function noteur(){
        return $this->belongsTo(Predicateur::class,'predicateur_id','id');
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'entite_user', 'entite_id', 'user_id')->withTimestamps();
    }

    public function zone() {
        return $this->belongsTo(Zone::class);
    }

    public function entite_origine() {
        return $this->belongsTo(Entite::class, 'entite_origine_id');
    }

    public function pays() {
        return $this->belongsTo(Pays::class,'pay_id', 'id');
    }

}
