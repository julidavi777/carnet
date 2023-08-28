<?php

namespace App\View\Components\Inscripcion;

use Illuminate\View\Component;
use App\Services\Inscripciones\PaisesService;

class Pais extends Component
{
    public $paises;
    public $tituloComponente;
    public $isPais;
    public $idComponente;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($titulo, $id, bool $isPais = false)
    {
        $this->tituloComponente = $titulo;
        $this->idComponente = $id;
        $this->isPais = $isPais;
        $this->paises = json_decode(PaisesService::getListaPaises());
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.inscripcion.pais');
    }
}
