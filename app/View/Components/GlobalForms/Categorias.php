<?php

namespace App\View\Components\GlobalForms;

use Illuminate\View\Component;
use App\Services\Inscripciones\CategoriasService;

class Categorias extends Component
{
    public $categorias;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->categorias = json_decode(CategoriasService::getCategorias());
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.global-forms.categorias');
    }
}
