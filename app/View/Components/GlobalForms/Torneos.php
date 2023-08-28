<?php

namespace App\View\Components\GlobalForms;

use Illuminate\View\Component;
use App\Services\TorneosService;

class Torneos extends Component
{
    public $torneos;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->torneos = json_decode(TorneosService::getTorneos(true));
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
