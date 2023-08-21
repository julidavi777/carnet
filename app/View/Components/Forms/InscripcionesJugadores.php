<?php

namespace App\View\Components\Forms;

use Illuminate\View\Component;
use App\Services\Usuarios\JugadorService;

class InscripcionesJugadores extends Component
{
    public $listaJugadores;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->listaJugadores = json_decode(JugadorService::getListaUsuarios());
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.forms.inscripciones-jugadores');
    }
}
