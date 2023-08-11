<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GruposRoundRobinController;
use App\Http\Controllers\CuadrosPrincipalesController;
use App\Http\Controllers\JugadorController;

Route::middleware('preventHistory')->group(function () {
    Route::get('/', [GruposRoundRobinController::class, 'index'])
        ->name('dashboard');

    Route::post('/', [GruposRoundRobinController::class, 'getGruposRoundRobin'])
        ->name('dashboard');

    Route::get('/cuadros-principales', [CuadrosPrincipalesController::class, 'index'])
        ->name('cuadros.principales');

    Route::post('/cuadros-principales', [CuadrosPrincipalesController::class, 'getCuadrosPrincipales'])
        ->name('cuadros.principales');

    Route::prefix('/administrar-jugadores')->middleware(['auth', 'verified'])->group(function () {

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

    require __DIR__ . '/auth.php';
});
