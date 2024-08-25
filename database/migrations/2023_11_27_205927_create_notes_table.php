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
        Schema::create('notes', function (Blueprint $table) {
            $table->id();
            $table->string('vst_base')->nullable();
            $table->string('vst_bibl_expl')->nullable();
            $table->string('coherence_vst')->nullable();
            $table->string('thematiq_msg')->nullable();
            $table->string('compreh_msg')->nullable();
            $table->string('lng_compreh_acces')->nullable();
            $table->string('cible_claire')->nullable();
            $table->string('ms_pratk_msg')->nullable();
            $table->string('expl_util')->nullable();
            $table->string('msg_fidel_mhs')->nullable();
            $table->string('note_global')->nullable();
            $table->longText('point_alerte')->nullable();
            $table->longText('observation')->nullable();
            $table->longText('recommandation')->nullable();
            $table->foreignId('predicateur_id')->constrained();
            $table->foreignId('record_audio_id')->constrained();
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
        Schema::dropIfExists('notes');
    }
};
