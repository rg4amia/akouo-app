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

            // Clé étrangère pour la colonne type_utilisateur_id
            $table->unsignedBigInteger('type_utilisateur_id')->nullable();
            $table->foreign('type_utilisateur_id')->references('id')->on('type_utilisateurs')->onDelete('set null');

            // Clé étrangère pour la colonne entite_origine_id
            $table->unsignedBigInteger('entite_origine_id')->nullable();
            $table->foreign('entite_origine_id')->references('id')->on('entites')->onDelete('set null');

            // Ajouter la colonne de suppression douce
            $table->softDeletes();
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
