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
        Schema::create('predicateurs', function (Blueprint $table) {
            $table->id();
            $table->string('nom')->nullable();
            $table->string('prenoms')->nullable();
            $table->string('indicatif')->nullable();
            $table->string('telephone')->unique();
            $table->string('email')->unique();
            $table->boolean('enregistre')->default(false);
            $table->boolean('note')->default(false);
            $table->foreignId('type_structure_id')->constrained();
            $table->string('nom_structure')->nullable();
            $table->foreignId('entite_id')->constrained();
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
        Schema::dropIfExists('predicateurs');
    }
};
