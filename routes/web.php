<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GruposRoundRobinController;

Route::get('/', [GruposRoundRobinController::class, 'index'])
    ->name('dashboard');

Route::post('/', [GruposRoundRobinController::class, 'getGruposRoundRobin'])
    ->name('dashboard');

Route::get('/tabla', [GruposRoundRobinController::class, 'getTabla'])
    ->name('dashboard.tabla');

Route::get('/cuadros-principales', function () {
    return view('cuadros-principales');
})->name('cuadros.principales');

# require __DIR__.'/auth.php';
