<?php

namespace App\Services\Inscripciones;

use Illuminate\Support\Facades\DB;

class DepartamentoMunicipioService
{
    public static function getDepartamentos()
    {
        $departamentos = DB::table('departamentos')
            ->select('id', 'nombre')
            ->orderBy('nombre')
            ->get();

        return $departamentos->toJson();
    }

    public static function getMunicipios($departamento)
    {
        $munucipios = DB::table('municipios')
            ->select('id', 'nombre')
            ->where('departamento_id', $departamento)
            ->orderBy('nombre')
            ->get();

        return $munucipios->toJson();
    }
}