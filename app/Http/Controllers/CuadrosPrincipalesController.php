<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ParametrosTablaCuadroRequest;
use Illuminate\Support\Facades\DB;

class CuadrosPrincipalesController extends Controller
{
    public function index()
    {
        return view('cuadros-principales');
    }

    protected function getCuadrosPrincipales(ParametrosTablaCuadroRequest $request)
    {
        $validated = $request->validated();

        session()->flashInput($request->input());
    }
}
