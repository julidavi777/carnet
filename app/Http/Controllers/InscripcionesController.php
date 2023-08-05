<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InscripcionesController extends Controller
{
    public function index()
    {
        return view('inscripciones.inicio');
    }

    protected function getListaJugadores()
    {
        /**
         * Relacionar en producción las tablas clubes con jugador
         */
        $jugadores = DB::table('t15_jugadores')
            ->select('c15_jugador_id', 'c15_jugador_fecha_nacimiento', 'c15_jugador_nombres', 'c15_jugador_apellidos', 
                'c15_jugador_genero', 'c.c10_club_nombre AS c15_club_nombre', 'c15_jugador_responsable_id', 
                'p.pais_id AS c15_jugador_pais', 'd.nombre AS c15_jugador_departamento', 'm.nombre AS c15_jugador_municipio')
            ->join('t10_clubes AS c', 'c10_club_id', 'c15_jugador_club_id')
            ->join('paises AS p', 'pais_id', 'c15_jugador_pais_id')
            ->leftJoin('departamentos AS d', 'd.id' , 'c15_jugador_departamento_id')
            ->leftJoin('municipios AS m', 'm.id' , 'c15_jugador_departamento_id')
            ->where('c15_jugador_responsable_id', Auth::id())
            ->get()
            ->toJson();

        return response()->json($jugadores);
    }

    public function getDataJugador(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'documento' => 'required|numeric'
        ], 
        [
            'documento.required' => 'El campo es requerido',
            'documento.numeric' => 'El campo debe ser un numérico'
        ]);

        if($validator->fails()){
            return response()->json(
                $validator->errors()
            , 400);
        }

        $validated = $validator->validated();

        $jugador = DB::table('t15_jugadores')
            //->join('t10_clubes', 'c10_club_id', 'c15_jugador_club_id')
            ->where('c15_jugador_id', $validated['documento'])
            ->get()
            ->toJson();

        return response()->json($jugador);
    }
}
