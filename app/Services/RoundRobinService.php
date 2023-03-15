<?php

namespace App\Services;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;

class RoundRobinService 
{
    public static function getTabla($torneo, $categoria, $genero, $modalidad, $cuadro, $grupo_id): array
    {
        $datos_grupo = [];
        $query = DB::select("SELECT public.fnc_consultar_grupos_torneo($torneo, $categoria, '$genero', '$modalidad', '$cuadro', $grupo_id) AS grupo");
        $total_jugadores = count($query);

        for($i = 0; $i <= $total_jugadores - 1; $i++)
        {
            $grupo = trim($query[$i]->grupo, "()");
    
            $data = explode(',', $grupo);

            $datos_fijos_1 = [];
            $datos_variables_1 = [];
            $datos_variables_2 = [];
            $datos_fijos_2 = [];

            for($j = 0; $j <= count($data) -1; $j++)
            {
                # Datos Fijos 1
                if($j >= 0 && $j <= 7)
                {
                    if($j==0 || $j >= 2 && $j <= 4) continue;

                    $datos_fijos_1[] = trim($data[$j], '"');
                }

                # Datos Variables 1
                if($j > 7 && $j < 32)
                {
                    $datos_variables_1[] = $data[$j];
                }

                # Datos Fijos 2
                if($j >= 32)
                {
                    if($j > 32 && $j < 35)
                    {
                        $porcentaje = (float)$data[$j] * 100;
                        $datos_fijos_2[] = (int)$porcentaje. ' %';
                    }else{
                        $datos_fijos_2[] = $data[$j];
                    }
                }
            }

            # Datos Variables 2
            for($k = 0; $k <= ($total_jugadores * 4) - 1; $k++)
            {
                $datos_variables_2[] = $datos_variables_1[$k];
            }

            $datos_grupo[] = Arr::collapse([$datos_fijos_1, $datos_variables_2, $datos_fijos_2]);
        }

        return $datos_grupo;
    }

    public static function getGrupos($torneo, $categoria, $genero, $modalidad, $cuadro):int
    {
        $max_grupo = DB::table('t20_r4_torneo_grupos')
            ->select(DB::raw('max(c20_4_grupo_id)'))
            ->where('c20_4_torneo_id', $torneo)
            ->where('c20_4_categoria_id', $categoria)
            ->where('c20_4_genero_categoria', $genero)
            ->where('c20_4_modalidad_categoria', $modalidad)
            ->where('c20_4_fase_categoria', 'RR')
            ->where('c20_4_cuadro_categoria', $cuadro)
            ->get()
            ->all();

        return empty($max_grupo[0]->max) ? 0 : $max_grupo[0]->max;
    }
}