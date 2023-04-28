<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InscripcionesController extends Controller
{
    /*
        c15_jugador_id                
        c15_jugador_apellidos         
        c15_jugador_nombres           
        c15_jugador_genero            
        c15_jugador_nacionalidad      
        c15_jugador_telefono_contacto 
        c15_jugador_correo_contacto  
        c15_jugador_pais_residencia   
        c15_jugador_ciudad_residencia 
        c15_jugador_club_id           
        c15_jugador_categoria_id      
        c15_jugador_ranking           
        c15_jugador_fecha_nacimiento 
        c15_jugador_punto
    */
    public function index()
    {
        return view('inscripciones.inicio');
    }
}
