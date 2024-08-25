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
        /* Schema::create('notes', function (Blueprint $table) {
            $table->id();
            $table->enum('comprehension_msg', ['Trés clair', 'Clair','Confus','Incompréhensible']);
            $table->enum('verset_base', ['Conforme', 'Nom conforme']);
            $table->enum('cible_claire_identite', ['Trés', 'Bien', 'Confus','Pas du tout']);
            $table->enum('mise_pr_msg_c_decri',['Trés clair', 'Clair', 'Confus', 'Incompréhensible']);
            $table->enum('note_globale',['Bon', 'Agréable', 'Parfait', 'Mauvais','Dangeureux']);
            $table->longText('observation')->nullable();
            $table->foreignId('predicateur_id')->constrained();
            $table->foreignId('record_audio_id')->constrained();
            $table->timestamps();
        }); */
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('notes');
    }
};
