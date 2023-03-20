<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommercialOfferController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\RoleController;
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
//AUTH
Route::get('testRoute',  [AuthController::class, 'test']);
Route::post('login',  [AuthController::class, 'login']);
Route::post('register',  [AuthController::class, 'register']);
Route::get('verifyAccount',  [AuthController::class, 'verifyAccount']);

//USERS
Route::get('users',  [UserController::class, 'index']);
Route::put('users/{user_id}',  [UserController::class, 'update']);

//ROLES
Route::get('roles', [RoleController::class, 'index']);
Route::post('roles', [RoleController::class, 'store']);
Route::put('roles/{role_id}', [RoleController::class, 'update']);
//PERMISSIONS
Route::get('permissions', [PermissionController::class, 'index']);


//CUSTOMERS
Route::post('customers',  [CustomerController::class, 'store']);
Route::get('customers',  [CustomerController::class, 'index']);
Route::get('customers/{customer}',  [CustomerController::class, 'show']);
Route::post('customers/{id_customer}',  [CustomerController::class, 'update']);
Route::get('customers/searchFilterByName/filter',  [CustomerController::class, 'searchFilter']);


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
