<?php

namespace App\Http\Controllers;

use App\Models\Departamento;
use Illuminate\Http\Request;

class DepartamentoMunicipioController extends ApiController
{
    /**
     * Display a listing related municipios
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Departamento $departamento)
    {
        $departamentos = $departamento->municipios()
                          ->get();
                         /*  ->pluck('buyer')
                          ->sortBy('name')
                          ->unique('id')
                          ->values(); */

        return $this->showAll($departamentos);
    }
}
