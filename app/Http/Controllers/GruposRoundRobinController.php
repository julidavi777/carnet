<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;

class GruposRoundRobinController extends Controller
{
    public $torneo = 0;
    public $categoria = 1;
    public $genero = 'T';
    public $modalidad = 'I';
    public $cuadro = 'G';
    public $grupo = 0;

    public function index()
    {
        $this->grupo = $this->getGrupos($this->torneo, $this->categoria, $this->genero, $this->modalidad, $this->cuadro);

        return view('dashboard', ['total_grupos' => $this->grupo]);
    }

    protected function getGruposRoundRobin(Request $request)
    {
        $validated = $request->validate([
            "torneo" => "required|numeric",
            "categoria" => "required|numeric",
            "genero" => "required|string",
            "modalidad" => "required|string",
            "cuadro" => "required|string"
        ], [
            "torneo.required" => 'El campo torneo debe ser obligatorio',
            "torneo.numeric" => 'El campo torneo debe ser numérico',
            "categoria.required" => "Error en el campo categoria",
            "categoria.numeric" => "Error en el campo categoria",
            "genero.required" => "Error en el campo genero",
            "genero.string" => "Error en el campo genero",
            "modalidad.required" => "Error en el campo modalidad",
            "modalidad.string" => "Error en el campo modalidad",
            "cuadro.required" => "Error en el campo cuadro",
            "cuadro.string" => "Error en el campo cuadro "
        ]);

        session()->flashInput($request->input());

        $this->grupo = $this->getGrupos($validated['torneo'], $validated['categoria'], $validated['genero'], $validated['modalidad'], $validated['cuadro']);

        return view('dashboard', ['total_grupos' => $this->grupo]);
    }

    protected function getTabla()
    {
        # select * from public.fnc_consultar_grupos_torneo(
        #    t_torneo_id integer, 
        #    t_categoria_id integer, 
        #    t_genero_categoria character varying, 
        #    t_modalidad_categoria character varying, 
        #    t_cuadro_categoria character varying, 
        #    t_grupo integer)
        $datos_grupo = [];
        $query = DB::select("SELECT public.fnc_consultar_grupos_torneo(10,1,'T','I','G',1) AS grupo");
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
        dd($datos_grupo);
    }

    private function getGrupos($torneo, $categoria, $genero, $modalidad, $cuadro):int
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
