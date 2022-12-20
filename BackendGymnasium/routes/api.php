<?php

use App\Http\Controllers\CentrosController;
use App\Http\Controllers\ListadoclasesController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\ReservasController;
use App\Http\Controllers\ProximasReservasController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::get('/users', [UsuarioController::class, 'index']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/clases', [ListadoclasesController::class, 'index']);


Route::get('/usuarios', [UsuarioController::class, 'index']);
Route::get('/login', [UsuarioController::class, 'login']);
Route::get('/register', [UsuarioController::class, 'register']);
Route::post('/usuarios', [UsuarioController::class, 'register']);
Route::get('/usuarios/{email}', [UsuarioController::class, 'userByEmail']);

Route::get('/reservas', [ReservasController::class, 'index']);
Route::get('/reservas/nextDays', [ReservasController::class, 'showNextDays']);

Route::post('/reservas', [ReservasController::class, 'store']);
Route::delete('/reservas/{id}', [ReservasController::class, 'delete']);

Route::get('/clasestrimestre/sidebar', [ProximasReservasController::class, 'showNextDaysAll']);
Route::get('/reservas/{deporte}', [ProximasReservasController::class, 'clasesByDeporte']);

Route::get('/centros', [CentrosController::class, 'index']);

