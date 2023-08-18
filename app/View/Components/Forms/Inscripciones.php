<?php

namespace App\View\Components\Forms;

use Illuminate\View\Component;

class Inscripciones extends Component
{
    public $torneoId;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($torneoId)
    {
        $this->torneoId = $torneoId;
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
