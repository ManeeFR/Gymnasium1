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
        Schema::create('grupales', function(Blueprint $table){

            $table->id();
            $table->string('sala');
            $table->integer('duracion');
            $table->integer('plazas');
            $table->integer('plazaslibres');
            $table->string('instructor');
        
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
    Schema::dropIfExists('grupales');
    }
};
