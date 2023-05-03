<?php

namespace App\View\Components\Inscripcion;

use Illuminate\View\Component;
use App\Services\Inscripciones\PaisesService;

class Pais extends Component
{
    public $paises;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
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
