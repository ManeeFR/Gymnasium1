<?php

namespace Database\Factories;


use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\ProximasReservas;
use Illuminate\Support\Str;

class ProximasReservasFactory extends Factory {
    /**
     * The name of the factory's corresponding model.
     *
     * @return string
     */
    protected $model = ProximasReservas::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition() {
        // $fecha = getdate();
        return [
            'id_sala'  => $this->faker->numberBetween(1, 6),
            'deporte'  => $this->faker->randomElement(['Boxeo, Crossfit, Actividades para mayores']),
            'franja' => $this->faker->randomElement(['9:00 - 10:30', '10:30 - 12:00', '12:00 - 13:30', '16:00 - 17:30', '17:30 - 19:00', '19:00 - 20:30']),
            'plazasLibres' => $this->faker->randomNumber(1,10),
            'plazasMaximas' => $this->faker->randomElement([10,15,20]),
            'fecha' => $this->faker->date('Y/m/d', strtotime("now"))
            // 'dia'  => $this->faker->numberBetween($fecha['mday'], $fecha['mday'] + 3),
            // 'mes'  => $fecha['mon']
        ];
    }
}
