<?php

namespace App\View\Components\Forms;

use Illuminate\View\Component;

class Inscripciones extends Component
{
    public $torneoId;
    public $clases;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($torneoId, $clases = '')
    {
        $this->torneoId = $torneoId;
        $this->clases = $clases;
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
