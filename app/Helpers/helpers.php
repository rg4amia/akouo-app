<?php

use Carbon\Carbon;

if (!function_exists('getTime')) {

    function getTime(string $formattedDate): string
    {
        $now = Carbon::now();
        $date = Carbon::parse($formattedDate);
        $diff = $now->diff($date);

        if ($diff->d >= 7) {
            return "Il y a {$diff->d} jours ". str_pad($diff->h, 2, '0', STR_PAD_LEFT) . ":" . str_pad($diff->i, 2, '0', STR_PAD_LEFT);
        }
        if ($diff->d > 1) {
            return "Il y a {$diff->d} jours ". str_pad($diff->h, 2, '0', STR_PAD_LEFT) . ":". str_pad($diff->i, 2, '0', STR_PAD_LEFT);
        }
        if ($diff->h >= 1) {
            $days = (int)($diff->h / 24);
            $hours = $diff->h % 24;
            $minutes = $diff->i;
            return "Il y a $days jour(s) $hours h ". str_pad($minutes, 2, '0', STR_PAD_LEFT) . " m";
        }
        return "Aujourd'hui à " . $now->format("H:i");
    }
}


