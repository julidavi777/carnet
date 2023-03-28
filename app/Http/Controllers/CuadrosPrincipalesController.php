<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ParametrosTablaCuadroRequest;
use App\Services\CuadrosPrincipalesService;

class CuadrosPrincipalesController extends Controller
{
    protected $filas = 0;

    public function index()
    {
        return view('cuadros-principales', ['filas' => $this->filas]);
    }

    protected function getCuadrosPrincipales(ParametrosTablaCuadroRequest $request)
    {
        $validated = $request->validated();

        session()->flashInput($request->input());

        $this->filas = CuadrosPrincipalesService::getCuadrosPrincipales($validated['torneo'], $validated['categoria'], $validated['genero'], $validated['modalidad'], $validated['cuadro'], true);

        return view('cuadros-principales', [
            'filas' => $this->filas,
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
