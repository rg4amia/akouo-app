<?php

use App\Http\Controllers\Api\AuthenticateController;
use App\Http\Controllers\Api\ParameterController;
use App\Http\Controllers\Api\NoteRecordController;
use App\Http\Controllers\Api\RecordAudioController;
use App\Http\Controllers\ApiBackend\LoginController;
use App\Http\Controllers\ApiBackend\RecordingController;
use App\Http\Controllers\ApiBackend\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('bakend-office')->name('bakend-office.')->group(function () {

    Route::controller(UserController::class)->prefix('users')->group(function () {
        Route::post('/store', 'store');
        Route::get('/', 'index');
    });

    Route::controller(LoginController::class)->group(function () {
        Route::post('/login', 'login');
    });

    Route::controller(RecordingController::class)->group(function () {
        Route::get('/records', 'index');
    });
});

Route::post('user/login', [AuthenticateController::class, 'login']);
Route::post('user/store', [AuthenticateController::class, 'store']);
Route::get('parametre/index', [ParameterController::class, 'index']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('note/store', [NoteRecordController::class, 'store']);
    Route::get('record-audio/index', [RecordAudioController::class, 'index']);
    Route::get('record-audio/by-predicateur', [RecordAudioController::class, 'indexRecordByPredicateur']);
    Route::post('record-audio/store', [RecordAudioController::class, 'store']);
});
