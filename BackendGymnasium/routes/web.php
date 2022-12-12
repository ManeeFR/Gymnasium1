<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\ReservasController;
use App\Http\Controllers\ListadoclasesController;

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

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/clases', [ListadoclasesController::class, 'index']);

// Route::post('/usuarios', [UsuarioController::class, 'register']);
// Route::get('/usuarios/{email}', [UsuarioController::class, 'userByEmail']);

// Route::get('/login', [UsuarioController::class, 'login']);
// Route::get('/register', [UsuarioController::class, 'register']);

// Route::post('/reservas', [ReservaController::class, 'create']);


Route::get('/', function () {
    return view('welcome');
});

Route::get('/clases', [ListadoclasesController::class, 'index']);

Route::post('/usuarios', [UsuarioController::class, 'register']);
Route::get('/usuarios/{email}', [UsuarioController::class, 'userByEmail']);

Route::get('/login', [UsuarioController::class, 'login']);
Route::get('/register', [UsuarioController::class, 'register']);

Route::get('/reservas', [ReservasController::class, 'index']);
Route::post('/reservas', [ReservasController::class, 'store']);
