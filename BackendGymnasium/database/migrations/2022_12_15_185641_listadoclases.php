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
        Schema::create('listadoclases', function(Blueprint $table){

            $table->id()->autoIncrement();
            $table->integer('sala')->unique();
            $table->string('deporte');
            $table->string('imagen');
            $table->string('descripcion');
            $table->integer('aforo');
            $table->string('instructor');
            $table->integer('duracion');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
    Schema::dropIfExists('listadoclases');
    }
};
