<?php

namespace App\Http\Livewire\Inscripciones;

use Livewire\Component;
use App\Services\Inscripciones\DepartamentoMunicipioService;

class Departamento extends Component
{
    public $departamentos;
    public $departamentoId;

    public function render()
    {
        $this->departamentos = json_decode(DepartamentoMunicipioService::getDepartamentos());

        return view('livewire.inscripciones.departamento');
    }
}
