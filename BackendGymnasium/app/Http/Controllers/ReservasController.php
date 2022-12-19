<?php

namespace App\Http\Controllers;

use App\Models\ProximasReservas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Reservas;
use Illuminate\Support\Facades\Date;

session_start();


class ReservasController extends Controller
{

    public function index()
    {

        $reservas = Reservas::all();
        return response()->json($reservas, 200);
    }

    public function showNextDays(Request $request)
    {

        $reservas = Reservas::where('email_user', $request->email)
                            ->where('fecha', '>=', date("Y-m-d"))
                            ->where('fecha', '<=', date("Y-m-d", strtotime("+15 days")))
                            ->orderBy('fecha','asc')
                            ->get();

        return response()->json($reservas, 200);
    }






    // public function create()
    // {
    //     if (isset($_SESSION['email']) && isset($_SESSION['password'])) {

    //         return view('pistas', compact('pistas'));
    //     } else {
    //         return redirect()->route('pageError');
    //     }
    // }


    // public function show($id)
    // {
    //     if (isset($_SESSION['email']) && isset($_SESSION['password'])) {
    //         // $pista = Pista::find($id);
    //         $fecha = getdate();
    //         $fecha1 = $fecha['year'] . "/" . $fecha['mon'] . "/" . $fecha['mday'];
    //         $franjas = ["9:00-10:30", "10:30-12:00", "12:00-13:30", "16:00-17:30", "17:30-19:00", "19:00-20:30"];
    //         $reservadas = [];
    //         $dias = [date("Y/m/d", strtotime("now")), date("Y/m/d", strtotime("+1 days")), date("Y/m/d", strtotime("+2 days"))];

    //         for ($i = 0; $i < 3; $i++) {
    //             for ($j = 0; $j < count($franjas); $j++) {
    //                 $consulta = Reservas::where('id_pista', '=', $id)->where('franja', '=', $franjas[$j])
    //                     ->where('fecha', '=', $dias[$i])->get();
    //                 if (count($consulta) == 0) {
    //                     $reservadas[$i][$j] = false;
    //                 } else {
    //                     $reservadas[$i][$j] = true;
    //                 }
    //             }
    //         }

    //         return view('pistas.show', compact('pista', 'franjas', 'reservadas', 'dias'));
    //     } else {
    //         return redirect()->route('pageError');
    //     }
    // }


    // Encargado de almacenar en la BD
    public function store(Request $request)
    {
        $consulta = Reservas::where('id_sala', $request->id_sala)
                            ->where('franja', urldecode($request->franja))
                            ->where('fecha', $request->fecha)
                            ->get();


        if (count($consulta) < $request->aforo && $request->plazasLibres > 0) {

            $yaTieneReserva = false;
            $json = '{"resp":"success"}';


            // ESTE BUCLE ES PARA QUE NO SE INSERTE DOS RESERVAS IGUALES UN MISMO USUARIO
            for ($i=0; $i < count($consulta); $i++) {

                if ($consulta[$i]->email_user == $request->email_user) {

                    $yaTieneReserva = true;
                    $json = '{"resp":"alreadyReservedByThisUser"}';
                }
            }

            if (!$yaTieneReserva) {

                $reserva = new Reservas();

                $reserva->email_user = $request->email_user;
                $reserva->id_sala = $request->id_sala;
                $reserva->deporte = $request->deporte;
                $reserva->franja = urldecode($request->franja);
                $reserva->fecha = $request->fecha;

                $reserva->save();

                ProximasReservas::where('id_sala', $request->id_sala)
                                ->where('franja', urldecode($request->franja))
                                ->where('fecha', $request->fecha)
                                ->update([ 'plazasLibres' => ($request->plazasLibres - 1) ]);

            }

        } else {
            $json = '{"resp":"noPlaceAvailable"}';
        }

        return json_decode($json);
    }



    public function delete(Request $request, $id)
    {

        Reservas::find($id)->delete();

        $registro = ProximasReservas::where('id_sala', '=', $request->id_sala)
                                                  ->where('franja', '=', urldecode($request->franja))
                                                  ->where('fecha', '=', $request->fecha)
                                                  ->first();
        $registro->plazasLibres += 1;

        $registro->update();

        return json_decode('{"resp":"success"}');
    }

}
