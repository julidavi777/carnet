<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::get();

        $users = $users->filter(function($user){
            if(!$user->hasRole('admin')){
                return $user;
            }
        })->values();
        
        return $this->showAll($users);
    }
}
