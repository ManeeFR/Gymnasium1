<?php

namespace App\Http\Controllers;

use App\Models\Listadoclases;
use Illuminate\Http\Request;

class ListadoclasesController extends Controller
{

    public function index(){

        $clases = Listadoclases::all();
        return response() -> json($clases, 200);
    }
}
