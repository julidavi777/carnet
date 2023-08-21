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
}