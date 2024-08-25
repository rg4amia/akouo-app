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
        Schema::create('record_audios', function (Blueprint $table) {
            $table->id();
            $table->string('path')->nullable();
            $table->string('titre')->nullable();
            $table->string('theme_message')->nullable();
            $table->string('verset_base')->nullable();
            $table->string('source')->nullable();
            $table->string('observations')->nullable();
            $table->date('date_recording')->nullable();
            $table->foreignId('predicateur_id')->constrained();
            $table->foreignId('user_id')->constrained();
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
        Schema::dropIfExists('record_audio');
    }
};
