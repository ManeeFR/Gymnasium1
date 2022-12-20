<?php

namespace App\Http\Controllers;

use App\Models\Centro;
use Illuminate\Http\Request;

class CentrosController extends Controller
{
    public function index()
    {

        $centros = Centro::all();
        return response()->json($centros, 200);
    }
}
