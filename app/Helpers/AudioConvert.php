<?php

namespace App\Helpers;

use FFMpeg\FFMpeg;
use Illuminate\Support\Facades\Storage;

class AudioConvert {

    public function convertAudio($audio)
    {
       // $ffmpeg = FFMpeg::create();
       // $audio = $ffmpeg->open($audio);
       // $formato = new \FFMpeg\Format\Audio\Mp3();
       // $audio->save($formato, 'audio.mp3');
       // Storage::put('public/audios/audio.mp3', fopen('audio.mp3', 'r+'));
    }
}
