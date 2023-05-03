<?php

namespace App\View\Components\Inscripcion;

use Illuminate\Support\Facades\Http;
use Illuminate\View\Component;

class Pais extends Component
{
    public $test;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
        $this->test = 'test';
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
