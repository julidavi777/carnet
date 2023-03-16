<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ParametrosTablaCuadroRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'torneo' => 'required|numeric',
            'categoria' => 'required|numeric',
            'genero' => 'required|string',
            'modalidad' => 'required|string',
            'cuadro' => 'required|string'
        ];
    }

    public function messages()
    {
        return [
            'torneo.required' => 'El campo torneo debe ser obligatorio',
            'torneo.numeric' => 'El campo torneo debe ser numérico',
            'categoria.required' => 'Error en el campo categoria',
            'categoria.numeric' => 'Error en el campo categoria',
            'genero.required' => 'Error en el campo genero',
            'genero.string' => 'Error en el campo genero',
            'modalidad.required' => 'Error en el campo modalidad',
            'modalidad.string' => 'Error en el campo modalidad',
            'cuadro.required' => 'Error en el campo cuadro',
            'cuadro.string' => 'Error en el campo cuadro '
        ];
    }
}
