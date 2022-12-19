<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProximasReservas;


class ProximasReservasController extends Controller
{
    //


    public function index()
    {

        $reservas = ProximasReservas::all();
        return response()->json($reservas, 200);
    }




    public function clasesByDeporte(Request $request)
    {

        $clases = ProximasReservas::where('deporte', $request->deporte)
                                  ->where('fecha', '>=', date("Y-m-d"))
                                  ->where('fecha', '<=', date("Y-m-d", strtotime("+15 days")))
                                  ->orderBy('fecha','asc')
                                  ->get();

        return response()->json($clases, 200);
    }


    public function showNextDaysAll()
    {

        $reservas = ProximasReservas::where('fecha', '>=', date("Y-m-d"))
                                    ->where('fecha', '<=', date("Y-m-d", strtotime("+15 days")))
                                    ->orderBy('fecha','asc')
                                    ->get();

        return response()->json($reservas, 200);
    }


}
