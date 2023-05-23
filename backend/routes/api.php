<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ChapterController;
use App\Http\Controllers\CommercialOfferController;
use App\Http\Controllers\CommercialOffersCotizationController;
use App\Http\Controllers\CommercialOffersManagementController;
use App\Http\Controllers\CommercialOffersManagementFileController;
use App\Http\Controllers\CommercialOffersSeguimientoController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DepartamentoController;
use App\Http\Controllers\DepartamentoMunicipioController;
use App\Http\Controllers\MunicipioController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SupplyController;
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
Route::post('testRoute',  [AuthController::class, 'test']);
Route::post('login',  [AuthController::class, 'login']);
Route::post('register',  [AuthController::class, 'register']);
Route::get('verifyAccount',  [AuthController::class, 'verifyAccount']);

//USERS
Route::get('users',  [UserController::class, 'index']);
Route::put('users/{user_id}',  [UserController::class, 'update']);
Route::delete('users/{user_id}',  [UserController::class, 'destroy']);

//ROLES
Route::get('roles', [RoleController::class, 'index']);
Route::post('roles', [RoleController::class, 'store']);
Route::put('roles/{role_id}', [RoleController::class, 'update']);
Route::delete('roles/{role_id}', [RoleController::class, 'destroy']);
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
Route::post('commercialOffers/{commercialOfferId}',  [CommercialOfferController::class, 'update']);
Route::get('commercialOffers/others/getNextValue',  [CommercialOfferController::class, 'getNextValue']);


//COMMERCIAL OFFERS MANAGEMENT
Route::post('commercialOffersManagement',  [CommercialOffersManagementController::class,'store']);
Route::post('commercialOffersManagement/{CommercialOffersManagement}',  [CommercialOffersManagementController::class,'update']);
Route::get('commercialOffersManagement/{id_commercial_offer}/commercialOffersManagementFiles',  [CommercialOffersManagementController::class,'showByIdCommercialOffer']);

//COMMERCIAL OffersManagementFile

Route::post('commercialOffersManagementFile',  [CommercialOffersManagementFileController::class,'store']);
Route::get('commercialOffersManagementFile',  [CommercialOffersManagementFileController::class, 'index']);

Route::apiResource('municipios', MunicipioController::class)->only(['index']);

Route::apiResource('departamentos', DepartamentoController::class)->only(['index']);
Route::apiResource('departamentos.municipios', DepartamentoMunicipioController::class)->only(['index']);

// CommercialOffersCotization
Route::post('commercialOffersCotizations',  [CommercialOffersCotizationController::class,'store']);
Route::get('commercialOffersCotizations',  [CommercialOffersCotizationController::class,'index']);

//CommercialOffersSeguimiento
Route::post('commercialOffersSeguimientos',  [CommercialOffersSeguimientoController::class,'store']);
Route::get('commercialOffers/{id_offer}/commercialOffersSeguimientos',  [CommercialOffersSeguimientoController::class,'indexByIdOffer']);

Route::apiResource('chapters', ChapterController::class);
Route::resource('supplies', SupplyController::class);

Route::group([

    'middleware' => 'api',
], function ($router) {
    Route::post('me',  [AuthController::class, 'me']);
    Route::post('logout',  [AuthController::class, 'logout']);


});
