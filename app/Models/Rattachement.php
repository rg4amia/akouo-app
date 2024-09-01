<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rattachement extends Model
{
    use HasFactory;

    protected $fillable = [
            'libelle'
    ];
}
