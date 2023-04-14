<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $specificRole = $request->query('specific_role');
        $users = User::get();

        if(!is_null($specificRole)){
            //SECURE LOGIC
            $specificRole = $specificRole == 'admin' ? 'responsable' : $specificRole;
            
            $users = $users->filter(function($user) use ($specificRole){
                if($user->hasRole($specificRole)){
                    return $user;
                }
            })->values();
            
            return $this->showAll($users);
        }else{
            

            $users = $users->filter(function($user){
                if(!$user->hasRole('admin')){
                    return $user;
                }
            })->values();
            
            return $this->showAll($users);
        }

        
    }

    

     /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $idUser
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $idCustomer)
    {
        $user = User::findOrFail($idCustomer);

        $data = $request->all();

        $validator = Validator::make($data, [
            'name' => 'nullable|string',
            'surname' => 'nullable|string',
            'role_id' => 'nullable|exists:roles,id',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }


        $user->name = $request->post('name');
        $user->surname = $request->post('surname');

        if(!is_null($request->post('role_id'))){

            $user->syncRoles([$request->role_id]);
        }

        $updated = $user->update();

        if ($updated) {
            return response()->json([
                "status" => true,
                "message" => "edited sucessfully"
            ], 200);
        } else {
            return response()->json([
                "status" => false,
                "message" => "cannot edit"
            ], 400);
        }
    }

        /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user_id
     * @return \Illuminate\Http\Response
     */
    public function destroy($user_id)
    {   
        $user = User::findOrFail($user_id);

        $user->delete();

        return $this->showOne($user);
    }
}
