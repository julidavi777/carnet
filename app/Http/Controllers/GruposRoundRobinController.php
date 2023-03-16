<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ParametrosTablaCuadroRequest;
use App\Services\RoundRobinService;

class GruposRoundRobinController extends Controller
{
    public $torneo = 0;
    public $categoria = 1;
    public $genero = 'T';
    public $modalidad = 'I';
    public $cuadro = 'G';
    public $grupo = 0;

    public function index()
    {
        $this->grupo = RoundRobinService::getGrupos($this->torneo, $this->categoria, $this->genero, $this->modalidad, $this->cuadro);

        return view('dashboard', ['total_grupos' => $this->grupo]);
    }

    protected function getGruposRoundRobin(ParametrosTablaCuadroRequest $request)
    {
        $validated = $request->validated();

        session()->flashInput($request->input());

        $this->grupo = RoundRobinService::getGrupos($validated['torneo'], $validated['categoria'], $validated['genero'], $validated['modalidad'], $validated['cuadro']);

        return view('dashboard', [
            'total_grupos' => $this->grupo,
            'datos' => [
                (int)$validated['torneo'], 
                (int)$validated['categoria'], 
                $validated['genero'], 
                $validated['modalidad'], 
                $validated['cuadro']
            ]
        ]);
    }
}
