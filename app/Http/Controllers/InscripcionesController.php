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
        $jugadores = DB::table('t15_jugadores')->limit(5)->get()->toJson();

        return response()->json($jugadores);
    }
}
