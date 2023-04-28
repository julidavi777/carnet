<?php

namespace App\Http\Livewire\Inscripciones;

use Illuminate\Support\Facades\Http;
use Livewire\Component;

class Pais extends Component
{
    public $paises;

    public function render()
    {
        $response = Http::get('https://restcountries.com/v3.1/subregion/South%20America');

        $this->paises = $response->json();
        
        return view('livewire.inscripciones.pais');
    }
}
