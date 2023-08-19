<?php

namespace App\Services\Inscripciones;

use Illuminate\Support\Facades\DB;

class CategoriasService 
{
    public static function getCategorias()
    {
        $clubes = DB::table('t11_categorias')
            ->select('c11_categoria_id', 'c11_categoria_nombre', 'c11_costo_inscripcion')
            ->get();

        return $clubes->toJson();
    }
}