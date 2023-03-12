<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommercialOfferController;
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
Route::get('testRoute',  [AuthController::class, 'test']);
Route::post('login',  [AuthController::class, 'login']);
Route::post('register',  [AuthController::class, 'register']);
Route::get('verifyAccount',  [AuthController::class, 'verifyAccount']);

//CUSTOMERS
Route::post('customers',  [CustomerController::class, 'store']);
Route::get('customers',  [CustomerController::class, 'index']);
Route::get('customers/{customer}',  [CustomerController::class, 'show']);
Route::put('customers/{customer}',  [CustomerController::class, 'update']);
Route::get('customers/searchFilterByName/filter',  [CustomerController::class, 'searchFilter']);

//USERS
Route::get('users',  [UserController::class, 'index']);

//COMMERCIAL OFFERS
Route::post('commercialOffers',  [CommercialOfferController::class, 'store']);
Route::get('commercialOffers',  [CommercialOfferController::class, 'index']);
Route::put('commercialOffers/{commercialOffer}',  [CommercialOfferController::class, 'update']);
Route::get('commercialOffers/others/getNextValue',  [CommercialOfferController::class, 'getNextValue']);

Route::group([

    'middleware' => 'api',
], function ($router) {
    Route::post('me',  [AuthController::class, 'me']);
    Route::post('logout',  [AuthController::class, 'logout']);


});
