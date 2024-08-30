<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

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
            //'status_user_id' => 'required|integer',
            'affecter_entite' => 'required',
            'cellule_id' => 'required|integer',
        ];
    }

    public function messages()
    {
        return [
            'nom.required' => "Le nom de l'utilisateur est obligatoire.",
            'prenoms.required' => "Le prénom de l'utilisateur est obligatoire.",
            'telephone.required' => "Le numéro de téléphone est obligatoire.",
            'telephone.between' => "Le numéro de téléphone doit être composé de 10 chiffres sans espaces.",
            'telephone.unique' => "Le numéro de téléphone doit être unique.",
            'email.required' => "L'adresse e-mail est obligatoire.",
            'email.email' => "L'adresse e-mail doit être valide.",
            'email.unique' => "L'adresse e-mail doit être unique.",
            'type_utilisateur_id.required' => "Le type d'utilisateur est obligatoire.",
            'pay_id.required' => "L'identifiant du pays est obligatoire.",
            'pay_id.integer' => "L'identifiant du pays doit être un nombre entier.",
            'role.required' => "Le rôle est obligatoire.",
            'role.integer' => "Le rôle doit être un nombre entier.",
            'password.required' => "Le mot de passe est obligatoire.",
            'password.string' => "Le mot de passe doit être une chaîne de caractères.",
            'password.min' => "Le mot de passe doit contenir au moins 8 caractères.",
            'entite_origine_id.required' => "L'entité d'origine est obligatoire.",
            'entite_origine_id.integer' => "L'identifiant de l'entité d'origine doit être un nombre entier.",
            // 'status_user_id.required' => "Le statut de l'utilisateur est obligatoire.",
            // 'status_user_id.integer' => "L'identifiant du statut de l'utilisateur doit être un nombre entier.",
            'affecter_entite.required' => "L'affectation à l'entité est obligatoire.",
            'affecter_entite.integer' => "L'identifiant de l'affectation doit être un nombre entier.",
            'cellule_id.required' => "L'identifiant de la cellule est obligatoire.",
            'cellule_id.integer' => "L'identifiant de la cellule doit être un nombre entier.",
        ];
    }
}
