<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('entites', function (Blueprint $table) {
            // Clé étrangère pour la colonne attachement_id
            $table->unsignedBigInteger('rattachement_id')->nullable();
            $table->foreign('rattachement_id')->references('id')->on('rattachements')->onDelete('set null');

             // Clé étrangère pour la colonne entite_origine_id
            $table->unsignedBigInteger('entite_origine_id')->nullable();
            $table->foreign('entite_origine_id')->references('id')->on('entites')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('entites', function (Blueprint $table) {
            //
        });
    }
};
