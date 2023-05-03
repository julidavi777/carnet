<?php 

namespace App\Services\Inscripciones;

use Illuminate\Support\Facades\DB;

class PaisesService
{
    public static function getListaPaises()
    {
        $paises = DB::table('paises')
            ->get();

        return $paises->toJson();
    }
}