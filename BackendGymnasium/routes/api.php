<?php

use App\Http\Controllers\ListadoclasesController;
use App\Http\Controllers\UsuarioController;
use App\Models\Listadoclases;
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

Route::get('/login', [UsuarioController::class, 'login']);
Route::get('/register', [UsuarioController::class, 'register']);
Route::get('/clases', [ListadoclasesController::class, 'index']);
Route::get('/usuarios', [UsuarioController::class, 'index']);
Route::get('/usuarios/{email}', [UsuarioController::class, 'userByEmail']);


Route::post('/usuarios', [UsuarioController::class, 'register']);
