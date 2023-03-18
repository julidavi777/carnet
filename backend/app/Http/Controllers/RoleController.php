<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Spatie\Permission\Models\Role;

class RoleController extends ApiController
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $roles = Role::with('permissions')->whereNotIn('name', ['admin'])->get();
        return $this->showAll($roles);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       $data = $request->all();

        $validator = Validator::make($data, [
            'name' => 'required|string',
            'permissions' => 'required|array',
            'permissions.*' => 'string|exists:permissions,name',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        return DB::transaction(function() use ($data) {
        try{
            $role = Role::create(['name' => $data['name']]);
            $role->givePermissionTo($data['permissions']);

            return response()->json(['status' => false, 'message' => 'Role created'], 201);
                
        } catch (\Exception $ex) {
            DB::rollback();
            // throw $ex;
            return response()->json(['status' => false, 'message' => 'something went wrong registro role'.$ex], 400);
        }
    });
    }
    
}
