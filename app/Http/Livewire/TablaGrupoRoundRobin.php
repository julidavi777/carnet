<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Services\RoundRobinService;

class TablaGrupoRoundRobin extends Component
{
    public $datos, $grupo, $total_jugadores;
    public $datos_grupo;

    public function mount($datos, $grupo)
    {
        $this->datos = $datos;
        $this->grupo = $grupo;

        $this->getTablaRoundRobin();
    }

    public function render()
    {
        return view('livewire.tabla-grupo-round-robin');
    }

    public function getTablaRoundRobin()
    {
        $this->datos_grupo = RoundRobinService::getTabla($this->datos[0], $this->datos[1], $this->datos[2], $this->datos[3], $this->datos[4], $this->grupo);
        $this->total_jugadores = count($this->datos_grupo);
    }
}
