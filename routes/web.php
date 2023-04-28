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
    });

    require __DIR__.'/auth.php';
});
