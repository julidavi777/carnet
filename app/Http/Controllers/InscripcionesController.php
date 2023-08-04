<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
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
}
