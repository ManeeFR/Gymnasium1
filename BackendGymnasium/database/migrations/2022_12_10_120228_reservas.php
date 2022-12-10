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
        Schema::create('usuarios', function(Blueprint $table){

            $table->increments('id');
            $table->string('email_user');
            $table->integer('id_pista');
            $table->string('franja');
            $table->date('fecha');

            // $table->integer('dia');
            // $table->integer('mes');
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
    Schema::dropIfExists('usuarios');
    }
};
