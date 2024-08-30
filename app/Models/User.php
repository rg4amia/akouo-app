<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'telephone',
        'note',
        'enregistre',
        'indicatif',
        'active',
        'pay_id',
        'cellule_id',
        'type_utilisateur_id',
        'entite_origine_id',
        'status_user_id',
        'created_by',
        'photo'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'created_by' => 'integer'
        ];
    }

    public function users() {
        return $this->belongsTo(User::class,'created_by');
    }

    public function entiteaffecte()
    {
        return $this->belongsToMany(Entite::class);
    }

    public function pays()
    {
        return $this->belongsTo(Pays::class, 'pay_id', 'id');
    }

    public function cellule()
    {
        return $this->belongsTo(Entite::class, 'cellule_id', 'id');
    }

    public function predicateur()
    {
        return $this->belongsTo(Predicateur::class, 'id', 'user_id');
    }

    public function typeutilisateur()
    {
        return $this->belongsTo(TypeUtilisateur::class, 'type_utilisateur_id', 'id');
    }

    public function entiteorigine()
    {
        return $this->belongsTo(Entite::class, 'entite_origine_id', 'id');
    }

    public function statususer()
    {
        return $this->belongsTo(StatusUser::class, 'status_user_id', 'id');
    }

    public function entites()
    {
        return $this->belongsToMany(Entite::class, 'entite_user', 'user_id', 'entite_id')->withTimestamps();
    }
}
