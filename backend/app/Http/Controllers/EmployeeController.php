<?php

namespace App\Http\Controllers;

use App\Mail\VerifyAccountNotificationMail;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class EmployeeController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $employees = Employee::get();
            return $this->showAll($employees)->sort('name');
    }



     /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Employee  $idEmployee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $idCustomer)
    {
        $employee = Employee::findOrFail($idCustomer);

        $data = $request->all();

        $validator = Validator::make($data, [
            'name' => 'nullable|string',
            'surname' => 'nullable|string',
            'email' => 'required|string|email|max:255|unique:Employees,email,'.$employee->id,
            'id_card' => 'nullable|integer',
            'type_id' => ['required', Rule::in(['CC', 'CE', 'PPORT'])],
            'phone' => 'nullable|integer',
            'address' => 'nullable|strng'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        return DB::transaction(function() use ($request, $employee) {
            try{
                $employee->email = $request->post('email');
                $EMAIL_CONFIRMATION = false;
                if($employee->isDirty('email')){
                    $employee->email_verified_at = null;
                    $EMAIL_CONFIRMATION = true;
                    $token = Auth::login($employee);

                    try {
                        $myEmail = $employee->email;
                        Mail::to($myEmail)->send(new VerifyAccountNotificationMail($token));

                       /*  return response()->json([
                            'is_error' => false,
                            'message' => 'Employee created successfully',
                            'Employee' => $employee,
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




                $employee->name = $request->post('name');
                $employee->surname = $request->post('surname');

                if(!is_null($request->post('role_id'))){

                    $employee->syncRoles([$request->role_id]);
                }

                $updated = $employee->update();

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
     * @param  \App\Models\Employee  $employee_id
     * @return \Illuminate\Http\Response
     */
    public function destroy($employee_id)
    {
        $employee = Employee::findOrFail($employee_id);

        $employee->delete();

        return $this->showOne($employee);
    }
}
