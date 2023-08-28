<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class EmployeeController extends Controller
{



    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
/**********************************************************INDEX***************************************************************************** */



    public function index(Request $request)
    {
       // Obtener empleados normales
       $message= '';
       $employees = Employee::all();

       // Obtener empleados cuyos contratos o exámenes médicos expiran en 5 días o menos
       $expiringEmployees = Employee::where(function ($query) {
           $query->whereDate('contract_expiration', '<=', Carbon::now()->addDays(5))
               ->orWhereDate('exam_expiration', '<=', Carbon::now()->addDays(5));
       })->get();
   
       // Generar el contenido del mensaje
  
       foreach ($expiringEmployees as $employee) {
     /*    if ($employee->contract_expiration <= Carbon::now()->addDays(5)) {
            $message .= "Contrato expira el {$employee->contract_expiration->format('d/m/Y')}\n";
        }
        if ($employee->exam_expiration <= Carbon::now()->addDays(5)) {
            $message .= "Examen médico expira el {$employee->exam_expiration->format('d/m/Y')}\n";
        } */
        if ($employee->exam_expiration instanceof Carbon && $employee->exam_expiration <= Carbon::now()->addDays(5)) {
            $message .= "Examen médico expira el {$employee->exam_expiration->format('d/m/Y')}\n";
            return 'hola mundo';
        }

           // Genera el mensaje como se mencionó anteriormente en el ejemplo
           // $expirationMessage .= ...
       }
   
       return view('employees.index', compact('employees', 'message'));
    }



























    /***************************************************************END INDEX************************************************************************ */



    public function store(Request $request)
    {
        $data = $request->all();
        $employ =  request()->except('_token');
        if ($request->hasFile('cv_file')) {
            $employ['cv_file'] = $request->file('cv_file')->store('Employees', 'public');
        }
        if ($request->hasFile('medical_exam_file')) {
            $employ['medical_exam_file'] = $request->file('medical_exam_file')->store('Employees', 'public');
        }
        if ($request->hasFile('followup_letter_file')) {
            $employ['followup_letter_file'] = $request->file('followup_letter_file')->store('Employees', 'public');
        }
        if ($request->hasFile('history_file')) {
            $employ['history_file'] = $request->file('history_file')->store('Employees', 'public');
        }
        if ($request->hasFile('study_stands_file')) {
            $employ['study_stands_file'] = $request->file('study_stands_file')->store('Employees', 'public');
        }
        if ($request->hasFile('id_card_file')) {
            $employ['id_card_file'] = $request->file('id_card_file')->store('Employees', 'public');
        }
        if ($request->hasFile('work_certificate_file')) {
            $employ['work_certificate_file'] = $request->file('work_certificate_file')->store('Employees', 'public');
        }
        if ($request->hasFile('military_passbook_file')) {
            $employ['military_passbook_file'] = $request->file('military_passbook_file')->store('Employees', 'public');
        }

        Employee::insert($employ);
        return redirect('employees')->with('msg', 'Empleado Creado Exitosamente!');


        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'surname' => 'required',
            'id_card' => 'required',
            'type_id' => 'required',
            'address' => 'required',
            'phone' => 'required',
            'email' => 'required|email',
            'position' => 'required',
            'cv_file' => 'required',
            'medical_exam_file' => 'required',
            'followup_letter_file' => 'required',
            'history_file' => 'required',
            'study_stands_file' => 'required',
            'id_card_file' => 'required',
            'work_certificate_file' => 'required',
            'military_passbook_file' => 'required'
        ]);
    }




























    public function create()
    {
        return view('employees.create');
    }




    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Employee  $idEmployee
     * @return \Illuminate\Http\Response
    
     */

    public function edit(Request $request, $id)
    {
        $employee = Employee::findOrFail($id);
        return view('employees.edit', compact('employee'));
    }

        /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $employee = Employee::findOrFail($id);
    
        $formFields = [
            'name' => 'required|string|max:80',
            'surname' => 'required|string|max:80',
            'id_card' =>'required',
            'type_id' =>'required',
            'address' =>'required',
            'phone' =>'required',
            'email' =>'required',
            'position' =>'required',
            'cv_file' =>'required',
            'medical_exam_file' =>'required',
            'followup_letter_file' =>'required',
            'history_file' =>'required',
            'study_stands_file' =>'required',
            'id_card_file' =>'required',
            'work_certificate_file' =>'required',
            'military_passbook_file' =>'required',
            'exam_expiration' =>'required',
            'contract_expiration'=>'required'
        ];
    
        $errorMessages = [
            'name' => 'el nombre  es requerido',
            'surname' => 'el Apellido  es requerido',
            'id_card' =>'el documento de identidad es requerido',
            'type_id' =>'el tipo de documento es requerido',
            'address' =>'la dirección es requerido',
            'phone' =>'el phone es requerido',
            'email' =>'el email es requerido',
            'position' =>'el position es requerido',
            'cv_file' =>'el cv_file es requerido',
            'medical_exam_file' =>'el medical_exam_file es requerido',
            'followup_letter_file' =>'el followup_letter_file es requerido',
            'history_file' =>'el history_file es requerido',
            'study_stands_file' =>'el study_stands_file es requerido',
            'id_card_file' =>'el id_card_file es requerido',
            'work_certificate_file' =>'el work_certificate_file es requerido',
            'military_passbook_file' =>'el military_passbook_file es requerido',
            'exam_expiration' =>'el exam_expiration es requerido',
            'contract_expiration'=>'el contract_expiratio es requerido'
        ];
    
        $this->validate($request, $formFields, $errorMessages);
    
        $adjuntableFields = [
            'cv_file',
            'medical_exam_file',
            'followup_letter_file',
            'history_file',
            'study_stands_file',
            'id_card_file',
            'work_certificate_file',
            'military_passbook_file',
        ];
        foreach ($adjuntableFields as $field) {
            if ($request->hasFile($field)) {
                // Eliminar archivo antiguo si existe
                Storage::delete('public/' . $employee->$field);
                // Subir nuevo archivo
                $updatedData[$field] = $request->file($field)->store('employees', 'public');
            }
        }
      
        // Actualizar el registro de empleado
        $updatedData = $request->except(['_token', '_method']);
        $employee->update($updatedData);
        return redirect('employees')->with('msg', 'El empleado se ha editado correctamente');
    }

    //         /**
    //      * Remove the specified resource from storage.
    //      *
    //      * @param  \App\Models\Employee  $employee_id
    //      * @return \Illuminate\Http\Response
    //      */
    public function destroy($employee_id)
    {
        $employee = Employee::findOrFail($employee_id);

        $employee->delete();
        return redirect('employees')->with('msg', 'El empleado se ha eliminado correctamente');

    }
}
