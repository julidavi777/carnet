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

    public static function getCostoCategoria($categoria_id)
    {
        $costo = DB::table('t11_categorias')
        ->select('c11_costo_inscripcion AS costo')
        ->where('c11_categoria_id', $categoria_id)
        ->first();

        return $costo->costo;
    }

    public static function getNombreCategoria($categoria_id)
    {
        $nombre_categoria = DB::table('t11_categorias')
        ->select('c11_categoria_nombre AS nombre')
        ->where('c11_categoria_id', $categoria_id)
        ->first();

        return $nombre_categoria->nombre;
    }
}