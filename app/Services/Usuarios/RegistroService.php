<?php

namespace App\Services\Usuarios;

use Illuminate\Support\Facades\DB;

class RegistroService
{
    public static function getTorneos()
    {
        $torneos = DB::table('t20_torneos')
        ->select('c20_torneo_id', 'c20_torneo_edicion', 'c20_torneo_estado')
        ->where('c20_torneo_estado', 'A')
        ->orderBy('c20_torneo_edicion')
        ->get();

        return $torneos->toJson();
    }
}