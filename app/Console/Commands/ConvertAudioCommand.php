<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
use Exception;

class ConvertAudioCommand extends Command
{
    protected $apiKey = "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";
    protected $apiUrl = 'https://api-inference.huggingface.co/models/facebook/wav2vec2-base';

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:convert-audio-command';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Convert audio to text using facebook/wav2vec2-base model';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        try {
            // Read the audio file
            $audioFile = public_path('audios/AUDIO_Jesus_parle_moi.amr');
            $audioContent = file_get_contents($audioFile);

            // Make request to Hugging Face API
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . $this->apiKey,
            ])->withBody($audioContent, 'audio/amr')
              ->post($this->apiUrl);

            if (!$response->successful()) {
                throw new Exception('Failed to process audio: ' . $response->body());
            }

            // Parse the response
            $result = $response->json();

            if (isset($result['text'])) {
                // Generate unique filename for the text
                $filename = uniqid() . '.txt';

                // Save the transcribed text
                Storage::disk('public')->put(
                    'converted/' . $filename,
                    $result['text']
                );

                $this->info('Audio converted successfully. Transcription saved as: ' . $filename);
                return Storage::disk('public')->path('converted/' . $filename);
            } else {
                throw new Exception('Unexpected response format from API');
            }
        } catch (Exception $e) {
            $this->error('Audio conversion failed: ' . $e->getMessage());
            Log::error('Audio conversion failed: ' . $e->getMessage(), ['exception' => $e]);
        }
    }
}
