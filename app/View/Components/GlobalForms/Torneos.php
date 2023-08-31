<?php

namespace App\View\Components\GlobalForms;

use Illuminate\View\Component;
use App\Services\TorneosService;
use Illuminate\Support\Facades\Auth;

class Torneos extends Component
{
    public $torneoId;
    public $clases;
    public $torneoAbierto;
    public $torneoSeleccionado;
    public $lista_torneos;
    public $isRegister;
    public $isReadOnly;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($torneoId, bool $torneoAbierto = false, bool $isRegister = false, $clases = '', bool $isReadOnly = false)
    {
        $this->isReadOnly = $isReadOnly;
        $this->torneoId = $torneoId;
        $this->clases = $clases;
        $this->torneoAbierto = $torneoAbierto;
        $this->torneoSeleccionado = (Auth::check()) ? Auth::user()->torneo_seleccionado : 0;
        $this->isRegister = $isRegister;

        $this->lista_torneos = json_decode(TorneosService::getTorneos($this->torneoAbierto));
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.global-forms.torneos');
    }
}
