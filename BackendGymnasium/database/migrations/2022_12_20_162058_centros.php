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
        Schema::create('centros', function (Blueprint $table) {

            $table->id()->autoIncrement()->unique();
            $table->string('poblacion');
            $table->string('provincia');
            $table->integer('metrosCuadrados');
            $table->string('gerente');
            $table->integer('mensualidad');
            $table->string('imagen');
            $table->integer('anyoFundacion');
            $table->string('direccion');
            $table->integer('telefono');
            $table->timestamps();


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('centros');
    }
};
