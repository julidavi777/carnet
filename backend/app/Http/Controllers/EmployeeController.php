<?php

namespace App\Http\Controllers;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
            return $this->showAll($employees);
            //return $employees;
    }
    public function store(Request $request){
        $data = $request->all();
        $employ =  request()->except('_token');
        if($request->hasFile('cv_file')){
            $employ['cv_file']= $request->file('cv_file')->store('Employees', 'public');
        }
        if($request->hasFile('medical_exam_file')){
            $employ['medical_exam_file']= $request->file('medical_exam_file')->store('Employees', 'public');
        }
        if($request->hasFile('followup_letter_file')){
            $employ['followup_letter_file']= $request->file('followup_letter_file')->store('Employees', 'public');
        }
        if($request->hasFile('history_file')){
            $employ['history_file']= $request->file('history_file')->store('Employees', 'public');
        }
        if($request->hasFile('study_stands_file')){
            $employ['study_stands_file']= $request->file('study_stands_file')->store('Employees', 'public');
        }
        if($request->hasFile('id_card_file')){
            $employ['id_card_file']= $request->file('id_card_file')->store('Employees', 'public');
        }
        if($request->hasFile('work_certificate_file')){
            $employ['work_certificate_file']= $request->file('work_certificate_file')->store('Employees', 'public');
        }
        if($request->hasFile('military_passbook_file')){
            $employ['military_passbook_file']= $request->file('military_passbook_file')->store('Employees', 'public');
        }

        Employee::insert($employ);
        return redirect('employees');
       

        $validator = Validator::make($request->all(), [
            'name' =>'required',
            'surname' =>'required',
            'id_card' =>'required',
            'type_id' =>'required',
            'address' =>'required',
            'phone' =>'required',
            'email' =>'required|email',
            'position'=>'required',
            'cv_file'=>'required',
            'medical_exam_file'=>'required',
            'followup_letter_file'=>'required',
            'history_file'=>'required',
            'study_stands_file'=>'required',
            'id_card_file'=>'required',
            'work_certificate_file'=>'required',
            'military_passbook_file'=>'required'
        ]);
  
    }
    public function test(){
        return response()->json([
            "status" => true,
            "message" => "created sucessfully"
        ],201);
    }
    public function create(Request $request){
        $validator = Validator::make($request->all(), [
            'name' =>'required',
            'surname' =>'required',
            'id_card' =>'required',
            'type_id' =>'required',
            'address' =>'required',
            'phone' =>'required',
            'email' =>'required|email',
            'position'=>'required',
            'cv_file'=>'required',
            'medical_exam_file'=>'required',
            'followup_letter_file'=>'required',
            'history_file'=>'required',
            'study_stands_file'=>'required',
            'id_card_file'=>'required',
            'work_certificate_file'=>'required'
        ]);
        if ($validator->fails()) {
            return $this->errorResponse($validator->errors(), 400);
        }
        $employee = Employee::create($request->all());
        return $this->showOne($employee, 201);
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
            'id_card' => 'nullable|integer',
            'type_id' => ['required', Rule::in(['CC', 'CE', 'PPORT'])],
            'phone' => 'nullable|integer',
            'address' => 'nullable|strng',
            'position' => 'required|string|',
            'email' => 'required|string|email|max:255|unique:Employees,email,'.$employee->id,
            'position'=>'required',
            'cv_file'=>'required',
            'medical_exam_file'=>'required',
            'followup_letter_file'=>'required',
            'history_file'=>'required',
            'study_stands_file'=>'required',
            'id_card_file'=>'required',
            'work_certificate_file'=>'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
//since here make a filter 

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
