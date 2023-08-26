<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Services\TorneosService;
use App\Services\Usuarios\JugadorService;

class ListaPagosComponent extends Component
{
    public $datos_tabla;
    public $showModal;
    public $ariaHidden;
    public $backdropClasses;
    public $jugadores;

    protected $listeners = ['showJugadores' => 'getJugadoresInscritos'];

    public function mount($datos)
    {
        $this->datos_tabla = $this->getDatosTabla($datos);
        $this->showModal = 'hidden';
        $this->backdropClasses = 'fixed top-0 left-0 right-0 flex items-center justify-center z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full';
        $this->ariaHidden = true;
        $this->jugadores = [];
    }

    public function render()
    {
        return view('livewire.lista-pagos-component');
    }

    private function getDatosTabla(array $pagos)
    {
        $datos_tabla = [];

        foreach($pagos as $pago)
        {
            $tabla['id_pago'] = $pago->c19_control_pagos_id;
            $tabla['torneo_id'] = ucfirst(strtolower(TorneosService::getNombreTorneo($pago->c19_control_pagos_torneo_id)));
            //$tabla['responsable_id'] = ucfirst(strtolower(DB::table('users')->where('id', Auth::id())->pluck('name')->first()));
            $tabla['valor'] = number_format($pago->c19_control_pagos_valor);
            $tabla['pago_estado'] = $pago->c19_control_pagos_estado;
            $tabla['valor_pagado'] = number_format($pago->c19_control_pagos_valor_pagado) ?? 0;

            $datos_tabla[] = $tabla;
        }

        return $datos_tabla;
    }

    public function getJugadoresInscritos($id_pago)
    {
        $this->jugadores = json_decode(JugadorService::getListaJugadoresInscritos($id_pago));
        $this->backdropClasses = 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40 flex items-center justify-center overflow-y-auto ';
        $this->showModal = '';
    }

    public function closeModal()
    {
        $this->showModal = 'hidden';
        $this->ariaHidden = false;
        $this->jugadores = [];
    }
}
