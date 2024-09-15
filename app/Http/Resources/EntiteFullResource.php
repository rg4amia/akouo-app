<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EntiteFullResource extends JsonResource
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
            'libelle' => $this->libelle,
            'created_at' => $this->created,
            'rattachement' => $this->rattachement,
            'pays' => @$this->pays->libelle,
            'typeentite' => @$this->typeentite->libelle,
            'zone' => @$this->zone->libelle,
            'link_maps' => @$this->link_maps,
            'entite_origine' => @$this->entite_origine->libelle,
            'useraffecte' => @$this->users->pluck('name')->toArray(),
        ];
    }
}
