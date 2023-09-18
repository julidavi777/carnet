<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Services\Inscripciones\CategoriasService;
use App\Services\Usuarios\JugadorService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Exception;

class InscripcionesController extends Controller
{
    public function index()
    {
        $permiso = Gate::inspect('puede-inscribir');

        if(!$permiso->allowed())
            return redirect()
            ->route('inscripciones.inicio')
            ->withErrors('Acción no autorizada, el torneo debe estar abierto para inscripciones');

        $lista_pagos = $this->getListaPagos();
        $data_inscripciones = $this->getJugadoresInscritos();

        return view('inscripciones.inscribir', compact('lista_pagos', 'data_inscripciones'));
    }

    protected function setPago(Request $request)
    {
        DB::beginTransaction();

        try
        {
            $query = DB::select("SELECT public.fnc_crear_t19_control_pagos_web(". $request['torneo_id']. ", ". Auth::id(). ", ". $request['valor']. ") AS pago_id");

            $pago_id = (!empty($query[0]->pago_id)) ? $query[0]->pago_id : 0;

            if($pago_id === 0)
            {
                DB::rollBack();

                return back()->withErrors('Error inesperado en el pago');
            }
            /*
            $tabla_inscripciones = DB::table('t19_inscripciones');

            $inscripciones = $tabla_inscripciones
            ->select('c19_inscripcion_torneo_id AS torneo_id', 'c19_inscripcion_id_control_pagos AS pago_id')
            ->where('c19_inscripcion_torneo_id', $request['torneo_id'])
            ->whereNull('c19_inscripcion_id_control_pagos')
            ->get()->toArray();

            $pago_id = DB::table('t19_control_pagos')->insertGetId([
                'c19_control_pagos_torneo_id' => $request['torneo_id'],
                'c19_control_pagos_responsable_id' => Auth::id(), //$request['responsable_id'],
                'c19_control_pagos_valor' => $request['valor'],
                'c19_control_pagos_estado' => $request['estado'],
            ], 'c19_control_pagos_id');
    
            foreach($inscripciones as $inscripcion)
            {
                $inscripcion->pago_id = $pago_id;
    
                $tabla_inscripciones
                ->where('c19_inscripcion_torneo_id', $inscripcion->torneo_id)
                ->update([
                    'c19_inscripcion_id_control_pagos' => $inscripcion->pago_id
                ]);
            }
            */
        }
        catch(Exception $e)
        {
            DB::rollBack();

            return back()->withErrors('Error ------');
        }

        DB::commit();

        return back()->with('success', 'Copia o guarda el siguiente código que se usará como referencia de pago en la pasarela de pagos: '. $pago_id);
    }

    protected function inscribir(Request $request)
    {
        $validated = $request->validate([
            'torneo_inscripcion' => ['required', 'numeric', 'min:0', 'not_in:0'],
            'jugador_inscripcion' => ['required', 'numeric', 'min:0', 'not_in:0'],
            'categoria_inscripcion' => ['required', 'array']
        ],
        [
            'torneo_inscripcion.numeric' => 'Debe seleccionar al menos un torneo',
            'torneo_inscripcion.min' => 'Debe seleccionar al menos un torneo',
            'torneo_inscripcion.not_in' => 'Debe seleccionar al menos un torneo',
            'jugador_inscripcion.numeric' => 'Debe seleccionar un jugador',
            'jugador_inscripcion.min' => 'Debe seleccionar un jugador',
            'jugador_inscripcion.not_in' => 'Debe seleccionar un jugador',
            'categoria_inscripcion.required' => 'Debe seleccionar al menos una categoria',
            'categoria_inscripcion.array' => 'Debe seleccionar al menos una categoria'
        ]);

        $total_categorias = count($validated['categoria_inscripcion']);

        $mensaje_error = [];

        DB::beginTransaction();

        for($i = 0; $i <= $total_categorias - 1; $i++)
        {
            $validacion_jugador = DB::select("SELECT public.fnc_validar_t19_inscripcion_categoria('". $validated['torneo_inscripcion']. "', '". $validated['categoria_inscripcion'][$i]. "', '". $validated['jugador_inscripcion']. "') AS mensaje_validacion");

            if($validacion_jugador[0]->mensaje_validacion !== 'ok')
                $mensaje_error[] = $validacion_jugador[0]->mensaje_validacion;
        }

        if(count($mensaje_error) > 0)
        {
            DB::rollBack();

            return back()->withInput()->withErrors($mensaje_error);
        }

        /**
         * Se verifica primero que el jugador no esté inscrito en alguna categoria en las inscripciones
         */
        for($j = 0; $j <= $total_categorias - 1; $j++)
        {
            $existe_jugador = JugadorService::verifyJugadorInscripcion($validated['jugador_inscripcion'], $validated['categoria_inscripcion'][$j]);

            if($existe_jugador)
            {
                $nombre_jugador = JugadorService::getNombreJugador($validated['jugador_inscripcion']);
                $nombre_categoria = CategoriasService::getNombreCategoria($validated['categoria_inscripcion'][$j]);

                DB::rollBack();

                return back()->withInput()->withErrors("El jugador (". $nombre_jugador. ") ya se encuentra agregado en la categoría (". $nombre_categoria. ").");
            }
        }

        for($k = 0; $k <= $total_categorias - 1; $k++)
        {
            $costo = CategoriasService::getCostoCategoria($validated['categoria_inscripcion'][$k]);

            DB::table('t19_inscripciones')->insert([
                'c19_inscripcion_torneo_id' => $validated['torneo_inscripcion'],
                'c19_inscripcion_jugador_id' => $validated['jugador_inscripcion'],
                'c19_inscripcion_jugador_categoria_id' => $validated['categoria_inscripcion'][$k],
                'c19_inscripcion_pagada' => 'F',
                'c19_inscripcion_valor' => $costo,
                'c19_inscripcion_estado' => 'F'
            ]);
        }

        DB::commit();

        return back()->with('success', 'Se ha agregado el jugador a la lista de inscripciones correctamente.');
    }

    protected function eliminar(Request $request)
    {
        // PENDIENTE VALIDACIÓN REQUEST
        DB::beginTransaction();

        try
        {
            DB::table('t19_inscripciones')
            ->where('c19_inscripcion_torneo_id', $request['torneo_id'])
            ->where('c19_inscripcion_jugador_id', $request['jugador_id'])
            ->delete();
        }
        catch(Exception $e)
        {
            DB::rollBack();

            return back()->withErrors('Error inesperado al eliminar el jugador, por favor contáctese con un administrador');
        }

        DB::commit();

        return back()->with('success', 'Se ha eliminado el jugador de la lista correctamente.');
    }

    private function getJugadoresInscritos()
    {
        $lista_jugadores = json_decode(JugadorService::getListaUsuarios());
        $lista_jugadores_inscritos = [];

        foreach($lista_jugadores as $jugador)
        {
            $inscripciones = DB::table('t19_inscripciones')
            ->where('c19_inscripcion_jugador_id', $jugador->c15_jugador_id)
            ->where('c19_inscripcion_pagada', 'F')
            ->whereNull('c19_inscripcion_id_control_pagos')
            ->get()->toArray();

            if(!empty($inscripciones))
                $lista_jugadores_inscritos[] = $inscripciones;
        }

        $data = [];

        if(count($lista_jugadores_inscritos) > 0)
        {
            foreach($lista_jugadores_inscritos as $datos_jugador)
            {
                $tabla_inscripciones['torneo_id'] = $datos_jugador[0]->c19_inscripcion_torneo_id;
                $tabla_inscripciones['jugador_id'] = $datos_jugador[0]->c19_inscripcion_jugador_id;
                $tabla_inscripciones['is_inscripcion_pagada'] = $datos_jugador[0]->c19_inscripcion_pagada;
                $subtotal = 0;

                if(count($datos_jugador) > 1)
                {
                    foreach($datos_jugador as $player)
                    {
                        $tabla_inscripciones['categoria'][$player->c19_inscripcion_jugador_categoria_id] = $player->c19_inscripcion_valor;
                        $subtotal += $player->c19_inscripcion_valor;
                    }
                }
                else
                {
                    $tabla_inscripciones['categoria'][$datos_jugador[0]->c19_inscripcion_jugador_categoria_id] = $datos_jugador[0]->c19_inscripcion_valor;
                    $subtotal = (int)$datos_jugador[0]->c19_inscripcion_valor;
                }

                $tabla_inscripciones['subtotal'] = $subtotal;

                $data[] = $tabla_inscripciones;

                unset($tabla_inscripciones);
            }

            $total = 0;

            foreach($data as $item)
            {
                $total += $item['subtotal'];
            }

            $data[] = $total;
        }

        return $data;
    }

    private function getListaPagos()
    {
        $lista = DB::table('t19_control_pagos')
        ->where('c19_control_pagos_responsable_id', Auth::id())
        ->get()->toArray();

        return $lista;
    }
}
