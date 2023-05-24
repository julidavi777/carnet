<?php

namespace App\Http\Controllers;

use App\Mail\VerifyAccountNotificationMail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
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
            //SECURE LOGIC: avoid to select admin users
            $specificRole = $specificRole == 'admin' ? 'responsable' : $specificRole;

            $users = $users->filter(function($user) use ($specificRole){
                if($user->hasRole(ucwords(strtolower($specificRole)))){
                    return $user;
                }
            })->values();

            return $this->showAll($users);
        }else{


            $users = $users->filter(function($user){
                if(!$user->hasRole('admin')){
                    return $user;
                }
            })->sortBy('name')->values();

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
            'email' => 'required|string|email|max:255|unique:users,email,'.$user->id,
            'role_id' => 'nullable|exists:roles,id',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        return DB::transaction(function() use ($request, $user) {
            try{
                $user->email = $request->post('email');
                $EMAIL_CONFIRMATION = false;
                if($user->isDirty('email')){
                    $user->email_verified_at = null;
                    $EMAIL_CONFIRMATION = true;
                    $token = Auth::login($user);

                    try {
                        $myEmail = $user->email;
                        Mail::to($myEmail)->send(new VerifyAccountNotificationMail($token));

                       /*  return response()->json([
                            'is_error' => false,
                            'message' => 'User created successfully',
                            'user' => $user,
                            'Auth' => [
                                'token' => $token,
                                'type' => 'bearer',
                            ]
                        ]); */
                    } catch (\Throwable $ex) {
                        DB::rollback();
                        return response()->json(['status' => false, 'message' => 'something went wrong send email'.$ex], 400);
                    }
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
                        "message" => "edited sucessfully",
                        "email_confirmation" => $EMAIL_CONFIRMATION
                    ], 200);
                } else {
                    DB::rollback();
                    return response()->json([
                        "status" => false,
                        "message" => "cannot edit"
                    ], 400);
                }
            }catch (\Exception $ex) {
                DB::rollback();
                // throw $ex;
                return response()->json(['status' => false, 'message' => 'something went wrong registro dog o usuario'.$ex], 400);
            }


        });

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
