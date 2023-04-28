<?php

namespace App\Services\Inscripciones;

use Illuminate\Support\Facades\DB;

class ClubService 
{
    public static function getClub()
    {
        $clubes = DB::table('t10_clubes')
            ->get();

        return $clubes->toJson();
    }
}