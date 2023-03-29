<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Services\CuadrosPrincipalesService;

class AvanceCuadrosPrincipales extends Component
{
    public $datos;
    public $filas;
    public $cuadros_principales;

    public function mount($datos)
    {
        $this->datos = $datos;

        $this->getCuadrosPrincipales();
    }

    public function render()
    {
        return view('livewire.avance-cuadros-principales');
    }

    public function getCuadrosPrincipales()
    {
        $this->cuadros_principales = CuadrosPrincipalesService::getCuadrosPrincipales($this->datos[0], $this->datos[1], $this->datos[2], $this->datos[3], $this->datos[4]);
        $this->filas = count($this->cuadros_principales);
    }
}
