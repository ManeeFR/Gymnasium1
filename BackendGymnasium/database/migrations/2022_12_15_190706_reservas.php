<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reservas', function (Blueprint $table) {

            $table->id()->autoIncrement()->unique();
            $table->string('email_user');
            $table->integer('id_sala');
            $table->string('deporte');
            $table->string('franja');
            $table->date('fecha');
            $table->timestamps();

            $table->foreign('email_user')->references('email')->on('usuarios');
            $table->foreign('id_sala')->references('sala')->on('listadoclases');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reservas');
    }
};
