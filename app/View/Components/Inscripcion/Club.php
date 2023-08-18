<?php

namespace App\View\Components\Inscripcion;

use Illuminate\View\Component;
use App\Services\Inscripciones\ClubService;

class Club extends Component
{
    public $clubes;
    public $clases;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($clases = '')
    {
        $this->clases = $clases;
        $this->clubes = json_decode(ClubService::getClub());
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.inscripcion.club');
    }
}
