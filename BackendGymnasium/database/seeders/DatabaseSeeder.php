<?php

namespace Database\Seeders;

use App\Models\ProximasReservas;
use App\Models\Reservas;
use Illuminate\Database\Seeder;
use App\Models\Usuario;


class DatabaseSeeder extends Seeder {

    public function run() {

        Reservas::factory(20)->create();
        Usuario::factory(25)->create();
        ProximasReservas::factory(10)->create();

    }

}
