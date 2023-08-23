<?php

namespace App\View\Components\Forms;

use Illuminate\View\Component;

class InscripcionesTablaJugadores extends Component
{
    public $datos;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($datos)
    {
        $this->datos = $datos;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.forms.inscripciones-tabla-jugadores');
    }
}
