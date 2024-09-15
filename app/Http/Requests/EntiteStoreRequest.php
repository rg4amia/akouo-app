<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EntiteStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'libelle'           => 'required|string',
            'pay_id'            =>  'required|integer',
            'zone_id'           => 'required|integer',
            'type_entite_id'    => 'required|integer',
            'rattachement_id'   => 'required|integer',
            'entite_origine_id' => 'required|integer',
            'affecter_entite'   => 'required',
            'link_maps'         => 'required|string',
        ];
    }
}
