<?php

namespace App\Services\Inscripciones;

use Illuminate\Support\Facades\DB;

class DepartamentoMunicipioService
{
    public static function getDepartamentos()
    {
        $departamentos = DB::table('departamento_municipio')
            ->select('departamento')
            ->groupBy('departamento')
            ->orderBy('departamento')
            ->get();

        return $departamentos->toJson();
    }

    public static function getMunicipios($departamento)
    {
        $munucipios = DB::table('departamento_municipio')
            ->select('municipio')
            ->where('departamento', $departamento)
            ->get();

        return $munucipios->toJson();
    }
}