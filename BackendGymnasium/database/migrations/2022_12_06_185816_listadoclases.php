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
            $table->string('title');
            $table->string('iconUrl');
            $table->string('longDescription');
            $table->string('category');
            $table->integer('lessonsCount');
            $table->string('typeClass');
            $table->string('instructor');
            $table->integer('plazasMaximas');
            $table->integer('duracion');
            $table->integer('sala');
        
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
