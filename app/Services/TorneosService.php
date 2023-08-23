<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

class TorneosService
{
    public static function getTorneos($is_open = false)
    {
        $torneos = DB::table('t20_torneos');

        $torneos->select('c20_torneo_id', 'c20_torneo_edicion', 'c20_torneo_estado');

        if($is_open)
            $torneos->where('c20_torneo_estado', 'I');
        
        $torneos->orderBy('c20_torneo_edicion');

        return $torneos->get()->toJson();
    }

    public static function getNombreTorneo($id_torneo)
    {
        $torneo = DB::table('t20_torneos')
        ->select('c20_torneo_edicion AS nombre')
        ->where('c20_torneo_id', $id_torneo)
        ->first();

        return $torneo->nombre;
    }
}