<?php

namespace App\Http\Resources;

use App\Helpers\FileUploader;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'telephone' => $this->telephone,
            'email' => $this->email,
            'address' => $this->address,
            'joined' => $this->created_at->diffForHumans(),
            'avatar' =>  $this->photo ? FileUploader::get('public', $this->photo) : null,
            'pays' => @$this->pays->libelle,
            'cellule' => @$this->cellule->libelle,
            'categorie' =>  @$this->getRoleNames()[0],
            'entiteaffecte' => @$this->entiteaffecte->pluck('libelle')->toArray(),
            'statususer' => @$this->statususer->libelle,
            'typeutilisateur' => @$this->typeutilisateur->libelle,
            'value'     => $this->id,
            'label'     => $this->name,
        ];
    }
}
