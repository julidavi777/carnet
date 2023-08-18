<?php

namespace App\Services\Usuarios;

use Illuminate\Support\Facades\DB;

class JugadorService
{
    public function getListaUsuarios()
    {
        $query = DB::table('t15_jugadores');

        $query->select('c15_jugador_nombres', 'c15_jugador_apellidos');

        dd($query);
    }
}