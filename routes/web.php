<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GruposRoundRobinController;
use App\Http\Controllers\CuadrosPrincipalesController;
use App\Http\Controllers\JugadorController;
use App\Http\Controllers\InscripcionesController;

Route::middleware('preventHistory')->group(function () {
    Route::get('/', [GruposRoundRobinController::class, 'index'])
        ->name('dashboard');

    Route::post('/', [GruposRoundRobinController::class, 'getGruposRoundRobin'])
        ->name('dashboard');

    Route::get('/cuadros-principales', [CuadrosPrincipalesController::class, 'index'])
        ->name('cuadros.principales');

    Route::post('/cuadros-principales', [CuadrosPrincipalesController::class, 'getCuadrosPrincipales'])
        ->name('cuadros.principales');

    Route::middleware(['auth', 'verified'])->group(function () {

        Route::prefix('/administrar-jugadores')->group(function () {
    
            Route::get('/', [JugadorController::class, 'index'])
                ->name('inscripciones.inicio');
    
            Route::get('lista-jugadores', [JugadorController::class, 'getListaJugadores'])
                ->name('inscripciones.lista.jugadores');
    
            Route::get('datos-jugador', [JugadorController::class, 'getDataJugador'])
                ->name('inscripciones.data.jugador');
    
            Route::get('municipios/{departamento}', [JugadorController::class, 'getMunicipios'])
                ->name('inscripciones.municipios.jugador');
            
            Route::get('eliminar', [JugadorController::class, 'deleteJugador'])
                ->name('jugador.eliminar');
    
            Route::post('asignar', [JugadorController::class, 'asignarJugador'])
                ->name('inscripciones.asignar.jugador');
        });
    
        Route::prefix('/inscripciones')->group(function () {

            Route::get('/', [InscripcionesController::class, 'index'])
            ->name('inscripciones.registro');

            Route::post('/registro', [InscripcionesController::class, 'inscribir'])
            ->name('inscripciones.inscripcion');
        });
    });

    require __DIR__ . '/auth.php';
});
