<?php

namespace App\View\Components\Forms;

use Illuminate\View\Component;
use App\Services\TorneosService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class InscripcionesTablaPagos extends Component
{
    public $datos_tabla;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($datos)
    {
        $this->datos_tabla = $this->getDatosTabla($datos);
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.forms.inscripciones-tabla-pagos');
    }

    private function getDatosTabla(array $pagos)
    {
        $datos_tabla = [];

        foreach($pagos as $pago)
        {
            $tabla['torneo_id'] = ucfirst(strtolower(TorneosService::getNombreTorneo($pago->c19_control_pagos_torneo_id)));
            $tabla['responsable_id'] = ucfirst(strtolower(DB::table('users')->where('id', Auth::id())->pluck('name')->first()));
            $tabla['valor'] = number_format($pago->c19_control_pagos_valor);
            $tabla['pago_estado'] = $pago->c19_control_pagos_estado;
            $tabla['valor_pagado'] = number_format($pago->c19_control_pagos_valor_pagado) ?? 0;

            $datos_tabla[] = $tabla;
        }

        return $datos_tabla;
    }
}
