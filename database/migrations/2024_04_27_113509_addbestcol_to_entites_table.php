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
        Schema::table('entites', function (Blueprint $table) {

            $table->renameColumn('entite_origine', 'rattachement');

            // Clé étrangère pour la colonne pay_id
            $table->unsignedBigInteger('pay_id')->nullable();
            $table->foreign('pay_id')->references('id')->on('pays')->onDelete('set null');

            // Clé étrangère pour la colonne type_entite_id
            $table->unsignedBigInteger('type_entite_id')->nullable();
            $table->foreign('type_entite_id')->references('id')->on('type_entites')->onDelete('set null');

            // Clé étrangère pour la colonne zone_id
            $table->unsignedBigInteger('zone_id')->nullable();
            $table->foreign('zone_id')->references('id')->on('zones')->onDelete('set null');

            $table->string('link_maps')->nullable();

        });

        Schema::create('entite_user', function (Blueprint $table) {

            $table->id();
            $table->unsignedBigInteger('entite_id');
            $table->unsignedBigInteger('user_id');
            $table->timestamps();

            $table->foreign('entite_id')->references('id')->on('entites')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('entites', function (Blueprint $table) {
            //
        });
    }
};
