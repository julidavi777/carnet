<?php

namespace App\View\Components\Forms;

use Illuminate\View\Component;
use App\Services\TorneosService;
use Illuminate\Support\Facades\Auth;

class Inscripciones extends Component
{
    public $torneoId;
    public $clases;
    public $torneoAbierto;
    public $torneoSeleccionado;
    public $lista_torneos;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($torneoId, $clases = '', $torneoAbierto = false)
    {
        $torneo_usuario = Auth::user()->torneo_seleccionado;

        $this->torneoId = $torneoId;
        $this->clases = $clases;
        $this->torneoAbierto = $torneoAbierto;
        $this->torneoSeleccionado = ((!empty($torneo_usuario)) ? $torneo_usuario : 0);

        $this->lista_torneos = json_decode(TorneosService::getTorneos($this->torneoAbierto));
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.forms.inscripciones');
    }
}
