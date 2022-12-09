<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller {

    public function index() {

        $users = Usuario::all();
        return response()->json($users, 200);
    }


    // Encargado de almacenar en la BD
    public function register(Request $request) {

        $usuario = new Usuario();

        $usuario->email = $request->email;
        $usuario->password = $request->password;
        $usuario->nombre = $request->nombre;

        $usuario->save();

        // if (isset($_SESSION['email']) && isset($_SESSION['password'])) {

        //     $consulta = Usuario::where('id_pista', '=', $id_pista)->where('franja', '=', $request->franja)->where('fecha', '=', $request->fecha)->get();

        //     if (count($consulta) == 0) {

        //         $reserva = new Usuario();
        //         $reserva->email_user = $_SESSION['email'];
        //         $reserva->id_pista = $id_pista;
        //         $reserva->franja = $request->franja;
        //         $reserva->fecha = $request->fecha;

        //         $reserva->save();

        //     } else {
        //         /**
        //          * Aquí habría que poner un route() o algo que indique que esa pista a esa hora y día ya está reservada
        //          */
        //     }

        //     // return redirect()->route('contactanos');

        // } else {

        //     // return redirect()->route('pageError');

        // }
    }
}
