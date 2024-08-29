<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserStoreRequest extends FormRequest
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
            'nom' => 'required',
            'prenoms' => 'required',
            'telephone' => 'required|between:10,10|unique:users',
            'email' => 'required|email|unique:users',
            'type_utilisateur_id' => 'required',
            'pay_id' => 'required|integer',
            'role' => 'required|integer',
            'password' => 'required|string|min:8',
            'entite_origine_id' => 'required|integer',
            'status_user_id' => 'required|integer',
            'affecter_entite' => 'required|integer',
            'cellule_id' => 'required|integer',
        ];
    }

    public function messages()
    {
        return [
            'nom.required' => "Le nom de l'utilisateur est obligatoire",
            'prenom.required' => "Le prenom de l'utilisateur est obligatoire",
            'telephone.required' => "Le numéro téléphone est obligatoire",
            'telephone.between' => "Le numéro téléphone doit pas être de 10 chiffres sans les espaces",
            'telephone.unique' => 'le numéro téléphone doit être unique'
        ];
    }
}
