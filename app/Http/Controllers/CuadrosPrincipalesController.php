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

        #$query = DB::select("SELECT * FROM public.fnc_consultar_cuadro_torneo(11, 1, 'T', 'I', 'A')");
        #dd($query);
        #session()->flashInput($request->input());
    }
}
