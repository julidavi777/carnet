<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GruposRoundRobinController;
use App\Http\Controllers\CuadrosPrincipalesController;

Route::get('/', [GruposRoundRobinController::class, 'index'])
    ->name('dashboard');

Route::post('/', [GruposRoundRobinController::class, 'getGruposRoundRobin'])
    ->name('dashboard');

Route::get('/cuadros-principales', [CuadrosPrincipalesController::class, 'index'])
    ->name('cuadros.principales');

Route::post('/cuadros-principales', [CuadrosPrincipalesController::class, 'getCuadrosPrincipales'])
    ->name('cuadros.principales');

require __DIR__.'/auth.php';
