<?php
namespace App\Traits;

use Carbon\Carbon;

trait SaveFile{

    protected function saveFile($file, $name_folder){
         $dt = Carbon::now();
 
         $hash = $file->hashName();
 
         $photo_url = $file->storeAs('public/files/'.$name_folder.'/'.$dt->toDateString(),'time_'.$dt->format('h_i_s').'_'.  $hash);
 
         $urls = array(
             "server_hash_name" => $photo_url,
             "original_name" => $file->getClientOriginalName()
         );
 
         return $urls;
     }
}