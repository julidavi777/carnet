<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login',  [AuthController::class, 'login']);

//CUSTOMERS
Route::post('/customers',  [CustomerController::class, 'store']);
Route::get('/customers',  [CustomerController::class, 'index']);
Route::get('/customers/{customer}',  [CustomerController::class, 'show']);
Route::get('/customers/searchFilterByName/filter',  [CustomerController::class, 'searchFilterByName']);

//USERS
Route::get('/users',  [UserController::class, 'index']);
Route::group([

    'middleware' => 'api',

], function ($router) {
    Route::post('me',  [AuthController::class, 'me']);


});
