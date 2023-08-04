<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

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
            ->join('t10_clubes', 'c10_club_id', 'c15_jugador_club_id')
            ->limit(5)
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
