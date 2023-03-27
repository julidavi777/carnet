<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ParametrosTablaCuadroRequest;
use Illuminate\Support\Facades\DB;

class CuadrosPrincipalesController extends Controller
{
    public function index()
    {
        return view('cuadros-principales');
    }

    protected function getCuadrosPrincipales(ParametrosTablaCuadroRequest $request)
    {
        $validated = $request->validated();

        $query = DB::select("SELECT * FROM public.fnc_consultar_cuadro_torneo(12, 1, 'T', 'I', 'A')");
        $total_query = count($query);
        $datos = [];
        $total_impares = 0;

        if(empty($total_query)) return;

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
                if($cuadro_datos[$m][$n] === 'bye')
                    $cuadro_datos[$m][$n] = $cuadro_datos[$m][$n]. ':amber';

                if(is_numeric($cuadro_datos[$m][$n][0]))
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

        return $cuadro_datos;

        session()->flashInput($request->input());
    }
}
