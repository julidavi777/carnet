<?php

namespace App\View\Components\Forms;

use Illuminate\View\Component;
use App\Services\Inscripciones\CategoriasService;

class InscripcionesCategorias extends Component
{
    public $clases;
    public $categoriaId;
    public $categorias;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($clases, $categoriaId)
    {
        $this->clases = $clases;
        $this->categoriaId = $categoriaId;

        $this->categorias = json_decode(CategoriasService::getCategorias());
        //
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.forms.inscripciones-categorias');
    }
}
