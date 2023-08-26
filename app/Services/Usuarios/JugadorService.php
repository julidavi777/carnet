<?php

namespace App\Services\Usuarios;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class JugadorService
{
    public static function getListaUsuarios()
    {
        $query = DB::table('t15_jugadores');

        $query->select('c15_jugador_id', 'c15_jugador_nombres', 'c15_jugador_apellidos');

        $query->where('c15_jugador_responsable_id', Auth::id());

        $query->orderBy('c15_jugador_nombres');

        return $query->get()->toJson();
    }

    public static function getNombreJugador($jugador_id)
    {
        $nombre_jugador = DB::table('t15_jugadores')
            ->select('c15_jugador_nombres AS nombres', 'c15_jugador_apellidos AS apellidos')
            ->where('c15_jugador_id', $jugador_id)
            ->first();

        return $nombre_jugador->nombres. ' '. $nombre_jugador->apellidos;
    }

    public static function verifyJugadorInscripcion($jugador_id, $categoria):bool
    {
        return DB::table('t19_inscripciones')
        ->where('c19_inscripcion_jugador_id', $jugador_id)
        ->where('c19_inscripcion_jugador_categoria_id', $categoria)
        ->where('c19_inscripcion_pagada', 'F')
        ->exists();
    }

    public static function getListaJugadoresInscritos($id_pago)
    {
        $jugadores = DB::table('v_t19_inscripciones')
            ->where('id_pagos', $id_pago)
            ->get()
            ->toJson();

        return $jugadores;
    }
}