<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use App\Providers\RouteServiceProvider as ServiceProvider;

session_start();

class UsuarioController extends Controller {

    public function index() {

        $users = Usuario::all();
        return response()->json($users, 200);
    }


    // Encargado de almacenar en la BD
    public function register(Request $request) {

        $user = UsuarioController::userByEmail($request->email);

        if (!$user) {

            $usuario = new Usuario();

            $usuario->email = $request->email;
            $usuario->password = $request->password;
            $usuario->nombre = $request->nombre;
            $usuario->remember_token = bin2hex(openssl_random_pseudo_bytes((45 - (45 % 2)) / 2));

            $usuario->save();

            $_SESSION['email_user'] = $request->email;
            // $_SESSION['password_user'] = $request->password;


            // return redirect(ServiceProvider::LOGIN);
            $json = '{"resp":"success"}';


        } else {
            $json = '{"resp":"error"}';

            // return redirect(ServiceProvider::REGISTER);
            // return redirect()->route('/register');
        }
        return json_decode($json);




        // $users = Usuario::all();

        // $repetido = false;

        // for ($i=0; $i < count($users); $i++) {
        //     if ($users[$i]->email === $request->email) {
        //         $repetido = true;
        //     }
        // }

        // if ($repetido) {

        //     // Agregar texto en rojo que ponga "Ya existe un usuario registrado con ese email"

        // } else {

        //     $usuario = new Usuario();

        //     $usuario->email = $request->email;
        //     $usuario->password = $request->password;
        //     $usuario->nombre = $request->nombre;

        //     $usuario->save();

        // }

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


    public function userByEmail($email) {

        // Quedaría mejor usar una consulta SQL (que busque por email) en vez de un for

        $users = Usuario::all();

        for ($i = 0; $i < count($users); $i++) {

            if ($users[$i]->email == $email) {

                return $users[$i];

            }
        }

    }

    public function login(Request $request) {

        $usuario = Usuario::where('email', '=', $request->email)
                          ->where('password', '=', $request->password)
                          ->get();

        if (count($usuario) === 1) {
            $_SESSION['email_user'] = $request->email;
            // $_SESSION['password_user'] = $request->password;
        }
        return redirect()->route('login');
    }
}
