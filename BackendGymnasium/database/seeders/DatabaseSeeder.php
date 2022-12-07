<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Usuario;


class DatabaseSeeder extends Seeder {

    public function run() {

        Usuario::factory(25)->create();

    }
    
}
