<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InscripcionesController extends Controller
{
    public function index()
    {
        return view('inscripciones.inscribir');
    }

    protected function inscribir(Request $request)
    {
        //dd($request->all());
        $validated = $request->validate([
            'torneo_inscripcion' => ['required', 'numeric', 'min:0', 'not_in:0'],
            'jugador_inscripcion' => ['required', 'numeric', 'min:0', 'not_in:0'],
            'categoria_inscripcion' => ['required', 'array']
        ],
        [
            'torneo_inscripcion.numeric' => 'Debe seleccionar al menos un torneo',
            'torneo_inscripcion.min' => 'Debe seleccionar al menos un torneo',
            'torneo_inscripcion.not_in' => 'Debe seleccionar al menos un torneo',
            'jugador_inscripcion.numeric' => 'Debe seleccionar un jugador',
            'jugador_inscripcion.min' => 'Debe seleccionar un jugador',
            'jugador_inscripcion.not_in' => 'Debe seleccionar un jugador',
            'categoria_inscripcion.required' => 'Debe seleccionar al menos una categoria',
            'categoria_inscripcion.array' => 'Debe seleccionar al menos una categoria'
        ]);

        dd($validated);
    }
}
