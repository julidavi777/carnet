<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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

    protected function getGruposRoundRobin(Request $request)
    {
        $validated = $request->validate([
            "torneo" => "required|numeric",
            "categoria" => "required|numeric",
            "genero" => "required|string",
            "modalidad" => "required|string",
            "cuadro" => "required|string"
        ], [
            "torneo.required" => 'El campo torneo debe ser obligatorio',
            "torneo.numeric" => 'El campo torneo debe ser numérico',
            "categoria.required" => "Error en el campo categoria",
            "categoria.numeric" => "Error en el campo categoria",
            "genero.required" => "Error en el campo genero",
            "genero.string" => "Error en el campo genero",
            "modalidad.required" => "Error en el campo modalidad",
            "modalidad.string" => "Error en el campo modalidad",
            "cuadro.required" => "Error en el campo cuadro",
            "cuadro.string" => "Error en el campo cuadro "
        ]);

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
