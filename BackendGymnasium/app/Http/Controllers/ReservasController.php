<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Reservas;

session_start();


class ReservasController extends Controller
{

    public function index() {

        $reservas = Reservas::all();
        return response()->json($reservas, 200);

    }

    public function create()
    {
        if (isset($_SESSION['email']) && isset($_SESSION['password'])) {
            // $pistas = Pista::all();
            return view('pistas', compact('pistas'));
        } else {
            return redirect()->route('pageError');
        }
    }


    public function show($id)
    {
        if (isset($_SESSION['email']) && isset($_SESSION['password'])) {
            // $pista = Pista::find($id);
            $fecha = getdate();
            $fecha1 = $fecha['year'] . "/" . $fecha['mon'] . "/" . $fecha['mday'];
            $franjas = ["9:00-10:30", "10:30-12:00", "12:00-13:30", "16:00-17:30", "17:30-19:00", "19:00-20:30"];
            $reservadas = [];
            $dias = [date("Y/m/d", strtotime("now")), date("Y/m/d", strtotime("+1 days")), date("Y/m/d", strtotime("+2 days"))];

            for ($i = 0; $i < 3; $i++) {
                for ($j = 0; $j < count($franjas); $j++) {
                    $consulta = Reservas::where('id_pista', '=', $id)->where('franja', '=', $franjas[$j])
                        ->where('fecha', '=', $dias[$i])->get();
                    if (count($consulta) == 0) {
                        $reservadas[$i][$j] = false;
                    } else {
                        $reservadas[$i][$j] = true;
                    }
                }
            }

            return view('pistas.show', compact('pista', 'franjas', 'reservadas', 'dias'));
        } else {
            return redirect()->route('pageError');
        }
    }

    // Encargado de almacenar en la BD
    public function store(Request $request)
    {
        // if (isset($_SESSION['email']) && isset($_SESSION['password'])) {

            $consulta = Reservas::where('id_pista', '=', $request->id_pista)->where('franja', '=', $request->franja)->where('fecha', '=', $request->fecha)->get();

            if (count($consulta) == 0) {
                $reserva = new Reservas();
                $reserva->email_user = $request->email_user;
                $reserva->id_pista = $request->id_pista;
                $reserva->franja = $request->franja;
                $reserva->fecha = $request->fecha;

                $reserva->save();
            } else {
                /**
                 * Aquí habría que poner un route() o algo que indique que esa pista a esa hora y día ya está reservada
                 */
            }

            // return redirect()->route('contactanos');
        // } else {
            // return redirect()->route('pageError');
        // }
    }
}
