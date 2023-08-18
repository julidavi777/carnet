<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InscripcionesController extends Controller
{
    public function index()
    {
        return view('inscripciones.inscribir');
    }
}
