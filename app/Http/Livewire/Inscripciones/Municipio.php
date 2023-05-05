<?php

namespace App\Http\Livewire\Inscripciones;

use Livewire\Component;
use App\Services\Inscripciones\DepartamentoMunicipioService;

class Municipio extends Component
{
    public $municipios = [];
    public $view_select = false;

    protected $listeners = [
        'departamento' => 'setDepartamento',
        'eliminar-municipios' => 'deleteMunicipio'
    ];

    public function render()
    {
        return view('livewire.inscripciones.municipio');
    }

    public function setDepartamento($departamento)
    {
        $this->view_select = true;
        $this->municipios = json_decode(DepartamentoMunicipioService::getMunicipios($departamento));
    }

    public function deleteMunicipio()
    {
        $this->view_select = false;
    }
}
