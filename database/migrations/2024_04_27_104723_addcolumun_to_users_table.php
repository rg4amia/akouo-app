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
        Schema::table('users', function (Blueprint $table) {
            // Clé étrangère pour la colonne pay_id
            $table->unsignedBigInteger('pay_id')->nullable();
            $table->foreign('pay_id')->references('id')->on('pays')->onDelete('set null');

            // Clé étrangère pour la colonne cellule_id
            $table->unsignedBigInteger('cellule_id')->nullable();
            $table->foreign('cellule_id')->references('id')->on('entites')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
