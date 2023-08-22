<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InscripcionesController extends Controller
{
    public function index()
    {
        return view('inscripciones.inscribir');
    }

    protected function inscribir(Request $request)
    {
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

        $total_categorias = count($validated['categoria_inscripcion']);

        $mensaje_error = [];

        for($i = 0; $i <= $total_categorias - 1; $i++)
        {
            $validacion_jugador = DB::select("SELECT public.fnc_validar_t19_inscripcion_categoria('". $validated['torneo_inscripcion']. "', '". $validated['categoria_inscripcion'][$i]. "', '". $validated['jugador_inscripcion']. "') AS mensaje_validacion");

            if($validacion_jugador[0]->mensaje_validacion !== 'ok')
                $mensaje_error[] = $validacion_jugador[0]->mensaje_validacion;
        }

        if(count($mensaje_error) > 0)
        {
            return back()->withInput()->withErrors($mensaje_error);
        }

        for($j = 0; $j <= $total_categorias - 1; $j++)
        {
            DB::table('t19_inscripciones')->insert([
                'c19_inscripcion_torneo_id' => $validated['torneo_inscripcion'],
                'c19_inscripcion_jugador_id' => $validated['jugador_inscripcion'],
                'c19_inscripcion_jugador_categoria_id' => $validated['categoria_inscripcion'][$j],
                'c19_inscripcion_pagada' => 'F'
            ]);
        }

        return back()->with('success', 'Se ha agregado el jugador a la lista de inscripciones correctamente.');
    }
}
