<?php

namespace App\View\Components\Forms;

use Illuminate\View\Component;
use App\Services\Usuarios\RegistroService;

class RegistroUsuario extends Component
{
    public $torneos;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->torneos = json_decode(RegistroService::getTorneos());
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.forms.registro-usuario');
    }
}
