<?php

namespace Database\Seeders;

use App\Models\Reservas;
use Illuminate\Database\Seeder;
use App\Models\Usuario;


class DatabaseSeeder extends Seeder {

    public function run() {

        Reservas::factory(60)->create();
        Usuario::factory(25)->create();

    }

}
