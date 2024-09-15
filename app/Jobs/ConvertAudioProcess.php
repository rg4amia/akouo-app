<?php

namespace App\Jobs;

use App\Models\RecordAudio;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use ProtoneMedia\LaravelFFMpeg\Support\FFMpeg;

class ConvertAudioProcess implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $recordaudio;

    /**
     * Create a new job instance.
     */
    public function __construct(RecordAudio $recordAudio)
    {
        $this->recordaudio = $recordAudio;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {

        try {
            $filemane_mp3 = trim($this->recordaudio->titre) . '.mp3';
            $filemane_mp3 = str_replace(' ', '_', $filemane_mp3);

            FFMpeg::fromDisk('public')
            ->open($this->recordaudio->path)
                ->export()
                ->toDisk('convert')
                ->inFormat(new \FFMpeg\Format\Audio\Mp3())
                ->save($filemane_mp3);

            $this->recordaudio->source_convert = $filemane_mp3;
            $this->recordaudio->save();
        } catch (\Exception $e) {
            Log::info($e->getMessage());
        }
    }
}
