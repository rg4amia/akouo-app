<?php

namespace App\Http\Resources;

use App\Helpers\FileUploader;
use App\Models\Note;
use App\Models\Predicateur;
use App\Models\RecordAudio;
use Illuminate\Http\Resources\Json\JsonResource;

class RecordAudioResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'path'              => FileUploader::get('public', $this->path),
            'titre'             => $this->titre,
            'theme_message'     => $this->theme_message,
            'verset_base'       => $this->verset_base,
            'source'            => $this->source,
            'observation'       => $this->observation,
            'date_recording'    => $this->date_recording,
            'envoye_par'        => [ 'nom' => $this->predicateur->nom . ' ' . $this->predicateur->prenoms,'telephone' => $this->predicateur->telephone],
            'created_at'        => $this->created_at,
            'updated_at'        => $this->updated_at,
            'id'                => $this->id,
            'note'              => NoteResource::collection($this->note),
            'note_check'        => $this->note->count() > 0 ? true : false,
        ];
    }
}
