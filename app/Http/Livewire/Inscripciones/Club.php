<?php

namespace App\Http\Livewire\Inscripciones;

use Livewire\Component;
use App\Services\Inscripciones\ClubService;

class Club extends Component
{
    public $clubes;

    public function render()
    {
        $this->clubes = $this->getClubList();

        return view('livewire.inscripciones.club');
    }

    private function getClubList()
    {
        $clubService = ClubService::getClub();

        return json_decode($clubService);
    }
}
