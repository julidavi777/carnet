<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApuActivityApuController;
use App\Http\Controllers\ApuActivityController;
use App\Http\Controllers\ApuController;
use App\Http\Controllers\ApuInternalChapterController;
use App\Http\Controllers\ApuLaborPriceController;
use App\Http\Controllers\ApuMaterialController;
use App\Http\Controllers\ApuToolController;
use App\Http\Controllers\ApuTransportPriceController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ChapterApuActivityController;
use App\Http\Controllers\ChapterApuLaborPriceController;
use App\Http\Controllers\ChapterApuMaterialController;
use App\Http\Controllers\ChapterController;
use App\Http\Controllers\CommercialOfferController;
use App\Http\Controllers\CommercialOffersCotizationController;
use App\Http\Controllers\CommercialOffersManagementController;
use App\Http\Controllers\CommercialOffersManagementFileController;
use App\Http\Controllers\CommercialOffersSeguimientoController;
use App\Http\Controllers\CustomerApuActivityController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DepartamentoController;
use App\Http\Controllers\DepartamentoMunicipioController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\MunicipioController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ProjectManagementController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SupplyController;
use App\Http\Controllers\UserController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//AUTH
Route::get('employees',  [EmployeeController::class, 'index']);
Route::get('employees/create',  [EmployeeController::class, 'create']);
Route::post('employees',  [EmployeeController::class, 'store']);
Route::delete('employees/{employee_id}',  [EmployeeController::class, 'destroy']);
Route::patch('employees/{employee_id}',  [EmployeeController::class, 'update']);
Route::patch('/employees/{employee}', 'EmployeeController@update');

Route::get('employees/{employee_id}',  [EmployeeController::class, 'edit']);
Route::get('login',  [AuthController::class, 'showLogin']);
Route::post('login',  [AuthController::class, 'login'])->name('login');
Route::post('register',  [AuthController::class, 'register']);
Route::post('logout',  [AuthController::class, 'logout']);
Route::get('verifyAccount',  [AuthController::class, 'verifyAccount']);
Route::get('testRoute',  [AuthController::class, 'test']);
Route::get('testview',  [EmployeeController::class, 'test']);

Route::get('/', function () {
    return view('employees.index');
});

Route::get('/verify', function () {
    $variable = "hello";
    return view('mail.commercialOffer.commercialoffer-assigned-notification', array ([ "data" => ["variable" => $variable] ]),);
});