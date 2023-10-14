<?php

namespace App\Services\Inscripciones;

use Illuminate\Support\Facades\DB;

class CategoriasService 
{
    public static function getCategorias()
    {
        $clubes = DB::table('t11_categorias')
            ->select('c11_categoria_id', 'c11_categoria_nombre', 'c11_costo_inscripcion')
            ->orderBy('c11_categoria_nombre')
            ->get();

        return $clubes->toJson();
    }
    public static function getCategoriasTorneo()
    {
        $clubes = DB::table('v_t20_r0_torneos_datos_categorias_abiertas')
        ->select('torneo_id as c11_categoria_id', 'categoria AS c11_categoria_nombre', 'costo_inscripcion AS c11_costo_inscripcion')
        ->orderBy('c11_categoria_nombre')
       ->get();

        return $clubes->toJson();
    }

    public static function getCostoCategoria($categoria_id)
    {
        //dejo la funcion antigua en caso de posteriores errores
        // $costo = DB::table('t11_categorias')
        // ->select('c11_costo_inscripcion AS costo')
        // ->where('c11_categoria_id', $categoria_id)
        // ->first();
//        return $costo->costo;
        $costo = DB::table('v_t20_r0_torneos_datos_categorias_abiertas')
        ->select('costo_inscripcion AS costo')
        ->where('torneo_id', $categoria_id)
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