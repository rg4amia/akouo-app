<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class NoteResource extends JsonResource
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
            'id'                => $this->id,
            'vst_base'          => $this->vst_base,
            'vst_bibl_expl'     => $this->vst_bibl_expl,
            'coherence_vst'     => $this->coherence_vst,
            'thematiq_msg'      => $this->thematiq_msg,
            'lng_compreh_acces' => $this->lng_compreh_acces,
            'cible_claire'      => $this->cible_claire,
            'compreh_msg'       => $this->compreh_msg,
            'expl_util'         => $this->expl_util,
            'msg_fidel_mbs'     => $this->msg_fidel_mbs,
            'ms_pratk_msg'      => $this->ms_pratk_msg,
            'note_global'       => $this->note_global,
            'point_alerte'      => $this->point_alerte,
            'msg_fidel_mhs'     => $this->msg_fidel_mhs,
            'observation'       => $this->observation,
            'recommandation'    => $this->recommandation,
            'predicateur_id'    => $this->predicateur_id,
            'predicateur'       => $this->predicateur,
            'record_audio_id'   => $this->record_audio_id,
            'record_audio'      => $this->record_audio,
            'created_at'        => $this->created_at,
        ];
    }
}
