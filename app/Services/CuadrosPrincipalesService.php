<?php

namespace App\Services;
use Illuminate\Support\Facades\DB;

class CuadrosPrincipalesService
{
    public static function getCuadrosPrincipales($torneo, $categoria, $genero, $modalidad, $cuadro, $controller = false)
    {
        $query = DB::select("SELECT * FROM public.fnc_consultar_cuadro_torneo($torneo, $categoria, '$genero', '$modalidad', '$cuadro')");
        $total_query = count($query);
        $datos = [];
        $total_impares = 0;

        if(empty($total_query)) return 0;

        for($i = 0; $i <= $total_query - 1; $i++)
        {
            $datos_cuadro = array_values((array)$query[$i]);
            $impares = [];

            for($j = 1; $j <= count($datos_cuadro) - 1; $j++)
            {
                $impares[] = $datos_cuadro[$j];
                $j++;
            }
            $total_impares = count($impares);
            $datos[] = $impares;
        }

        $cuadro_datos = [];

        for($k = 0; $k <= $total_impares - 1; $k++)
        {
            $cuadros = [];

            for($l = 0; $l <= $total_query - 1; $l++)
            {
                if(!empty($datos[$l][$k]))
                    $cuadros[] = $datos[$l][$k];
            }

            $cuadro_datos[] = $cuadros;
        }

        $cuadro_datos = array_filter($cuadro_datos);

        for($m = 0; $m <= count($cuadro_datos) - 1; $m++)
        {
            for($n = 0; $n <= count($cuadro_datos[$m]) - 1; $n++)
            {
                if(!empty(strpos($cuadro_datos[$m][$n], '/')))
                {
                    $cuadro_datos[$m][$n - 1] = $cuadro_datos[$m][$n - 1]. ':'. $cuadro_datos[$m][$n];
                    unset($cuadro_datos[$m][$n]);
                    $cuadro_datos[$m] = array_values($cuadro_datos[$m]);
                }
            }
        }

        for($o = 0; $o <= count($cuadro_datos) - 1; $o++)
        {
            if(count($cuadro_datos[$o]) > 1)
            {
                for($p = 0; $p <= count($cuadro_datos[$o]) - 1; $p++)
                {
                    $cuadro_datos[$o][$p] = [$cuadro_datos[$o][$p], $cuadro_datos[$o][$p + 1]];
                    unset($cuadro_datos[$o][$p + 1]);
                    $cuadro_datos[$o] = array_values($cuadro_datos[$o]);
                }
            }
        }

        if($controller)
            return count($cuadro_datos);
        else
            return $cuadro_datos;
    }
}