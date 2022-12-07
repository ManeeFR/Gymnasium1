<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{

    public function index(){

        $users = Usuario::all();
        return response() -> json($users, 200);
    }
}
