<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GruposRoundRobinController;
use App\Http\Controllers\CuadrosPrincipalesController;
use App\Http\Controllers\InscripcionesController;

Route::middleware('preventHistory')->group(function()
{
    Route::get('/', [GruposRoundRobinController::class, 'index'])
        ->name('dashboard');

    Route::post('/', [GruposRoundRobinController::class, 'getGruposRoundRobin'])
        ->name('dashboard');

    Route::get('/cuadros-principales', [CuadrosPrincipalesController::class, 'index'])
        ->name('cuadros.principales');

    Route::post('/cuadros-principales', [CuadrosPrincipalesController::class, 'getCuadrosPrincipales'])
        ->name('cuadros.principales');

    Route::prefix('/inscripciones')->middleware(['auth', 'verified'])->group(function()
    {
        Route::get('/', [InscripcionesController::class, 'index'])
            ->name('inscripciones.inicio');

        Route::get('jugadores', [InscripcionesController::class, 'getListaJugadores'])
            ->name('inscripciones.lista.jugadores');

        Route::get('jugador', [InscripcionesController::class, 'getDataJugador'])
            ->name('inscripciones.data.jugador');

        Route::post('asignar', [InscripcionesController::class, 'asignarJugador'])
            ->name('inscripciones.asignar.jugador');

        Route::get('municipios/{departamento}', [InscripcionesController::class, 'getMunicipios'])
            ->name('inscripciones.municipios.jugador');
    });

    require __DIR__.'/auth.php';
});
