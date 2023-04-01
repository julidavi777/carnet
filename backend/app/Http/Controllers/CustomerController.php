<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;

class CustomerController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $customers = Customer::get();
        return $this->showAll($customers);
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
            'identification_type' => 'required|integer',
            'identification' => 'required|integer|unique:customers',
            'digit_v' => 'nullable|integer',
            'name' => 'required|string|max:50',
            'surname' => 'required|string|max:50',
            'phone_number' => 'required|integer',
            'address' => 'required|string|max:50',
            'municipio_id' => 'required|integer|exists:municipios,id',
            'departamento_id' => 'required|integer|exists:departamentos,id',
            'email' => 'required|string',
            'nombre_contacto_comercial' => 'required|string',
            'commercial_contact_1' => 'required|integer',
            'commercial_contact_2' => 'nullable|integer',
            'commercial_contact_3' => 'nullable|integer',
            'razon_social' => 'required|string|max:50',
            'razon_comercial' => 'required|string|max:50',
            'rut_file' => 'nullable|file|mimes:doc,docx,jpg,png,pdf',
            'camara_commerce_file' => 'nullable|file|mimes:doc,docx,jpg,png,pdf',
            'income_statement_file' => 'nullable|file|mimes:doc,docx,jpg,png,pdf',
            'cliente_logo' => 'nullable|file|mimes:jpg,png',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        //SAVING FILES

            $rut_file_json_urls = null;
        if ($request->hasFile('rut_file')) {
            $file = $request->file('rut_file');
            $rut_file_json_urls = $this->saveFile($file, 'customersFiles');
            
        }

        $camara_commerce_file_json_urls = null;
        if ($request->hasFile('camara_commerce_file')) {
            $file = $request->file('camara_commerce_file');
            $camara_commerce_file_json_urls = $this->saveFile($file, 'customersFiles');
            
        }

        $income_statement_file_json_urls = null;
        if ($request->hasFile('income_statement_file')) {
            $file = $request->file('income_statement_file');
            $income_statement_file_json_urls = $this->saveFile($file, 'customersFiles');
            
        }

        $cliente_logo_file_json_urls = null;
        if ($request->hasFile('cliente_logo')) {
            $file = $request->file('cliente_logo');
            $cliente_logo_file_json_urls = $this->saveFile($file, 'customersFiles');
            
        }


        $created = Customer::create([
            'identification_type' => $request->post('identification_type'),
            'identification' => $request->post('identification'),
            'digit_v' => $request->post('digit_v'),
            'name' => $request->post('name'),
            'surname' => $request->post('surname'),
            'phone_number' => $request->post('phone_number'),
            'address' => $request->post('address'),
            'municipio_id' => $request->post('municipio_id'),
            'departamento_id' => $request->post('departamento_id'),
            'email' => $request->post('email'),
            'nombre_contacto_comercial' => $request->post('nombre_contacto_comercial'),
            'commercial_contact_1' => $request->post('commercial_contact_1'),
            'commercial_contact_2' => $request->post('commercial_contact_2'),
            'commercial_contact_3' => $request->post('commercial_contact_3'),
            'razon_social' => $request->post('razon_social'),
            'razon_comercial' => $request->post('razon_comercial'),
            'rut_file' => $rut_file_json_urls,
            'camara_commerce_file' => $camara_commerce_file_json_urls,
            'income_statement_file' => $income_statement_file_json_urls,
            'cliente_logo' => $cliente_logo_file_json_urls,
        ]);

        if($created){
            return response()->json([
                "status" => true,
                "message" => "created sucessfully"
            ],201);
        }else{
            return response()->json([
                "status" => false,
                "message" => "cannot create"
            ],400);
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function show(Customer $customer)
    {
        return $this->showOne($customer);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $idCustomer)
    {
        $customer = Customer::findOrFail($idCustomer);

        $data = $request->all();

        $validator = Validator::make($data, [
            'identification_type' => 'nullable|integer',
            'identification' => 'nullable|integer|unique:customers,identification,'.$customer->id,
            'digit_v' => 'nullable|integer',
            'name' => 'nullable|string|max:50',
            'surname' => 'nullable|string|max:50',
            'phone_number' => 'nullable|integer',
            'address' => 'nullable|string|max:50',
            'municipio_id' => 'nullable|integer|exists:municipios,id',
            'departamento_id' => 'nullable|integer|exists:departamentos,id',
            'email' => 'nullable|string',
            'nombre_contacto_comercial' => 'nullable|string',
            'commercial_contact_1' => 'nullable|integer',
            'commercial_contact_2' => 'nullable|integer',
            'commercial_contact_3' => 'nullable|integer',
            'razon_social' => 'nullable|string|max:50',
            'razon_comercial' => 'nullable|string|max:50',
            'rut_file' => 'nullable|file|mimes:doc,docx,jpg,png,pdf',
            'camara_commerce_file' => 'nullable|file|mimes:doc,docx,jpg,png,pdf',
            'income_statement_file' => 'nullable|file|mimes:doc,docx,jpg,png,pdf',
            'cliente_logo' => 'nullable|file|mimes:jpg,png',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        //SAVING FILES

        $rut_file_json_urls = $customer->rut_file;
        if ($request->hasFile('rut_file')) {
            //DELETE FILE
            if(!is_null($customer->rut_file)){
                unlink(storage_path('app/'.$customer->rut_file['server_hash_name']));
            }

            //SAVE NEW FILE

            $file = $request->file('rut_file');
            $rut_file_json_urls = $this->saveFile($file, 'customersFiles');
            
        }

        $camara_commerce_file_json_urls = $customer->camara_commerce_file;
        if ($request->hasFile('camara_commerce_file')) {
            //DELETE FILE
            if(!is_null($customer->camara_commerce_file)){
                unlink(storage_path('app/'.$customer->camara_commerce_file['server_hash_name']));
            }

            //SAVE NEW FILE
            $file = $request->file('camara_commerce_file');
            $camara_commerce_file_json_urls = $this->saveFile($file, 'customersFiles');
            
        }

        $income_statement_file_json_urls = $customer->income_statement_file;
        if ($request->hasFile('income_statement_file')) {
            //DELETE FILE
            if(!is_null($customer->income_statement_file)){
                unlink(storage_path('app/'.$customer->income_statement_file['server_hash_name']));
            }

            //SAVE NEW FILE
            $file = $request->file('income_statement_file');
            $income_statement_file_json_urls = $this->saveFile($file, 'customersFiles');
            
        }

        $cliente_logo_file_json_urls = $customer->cliente_logo;
        if ($request->hasFile('cliente_logo')) {
            //DELETE FILE
            if(!is_null($customer->cliente_logo)){
                unlink(storage_path('app/'.$customer->cliente_logo['server_hash_name']));
            }

            //SAVE NEW FILE
            $file = $request->file('cliente_logo');
            $cliente_logo_file_json_urls = $this->saveFile($file, 'customersFiles');
            
        }
  
        $updated = Customer::where('id', $customer->id)->update([    
            'identification_type' => $request->post('identification_type'),
            'identification' => $request->post('identification'),
            'digit_v' => $request->post('digit_v'),
            'name' => $request->post('name'),
            'surname' => $request->post('surname'),
            'phone_number' => $request->post('phone_number'),
            'address' => $request->post('address'),
            'municipio_id' => $request->post('municipio_id'),
            'departamento_id' => $request->post('departamento_id'),
            'email' => $request->post('email'),
            'nombre_contacto_comercial' => $request->post('nombre_contacto_comercial'),
            'commercial_contact_1' => $request->post('commercial_contact_1'),
            'commercial_contact_2' => $request->post('commercial_contact_2'),
            'commercial_contact_3' => $request->post('commercial_contact_3'),
            'razon_social' => $request->post('razon_social'),
            'razon_comercial' => $request->post('razon_comercial'),
            'rut_file' => $rut_file_json_urls,
            'camara_commerce_file' => $camara_commerce_file_json_urls,
            'income_statement_file' => $income_statement_file_json_urls,
            'cliente_logo' => $cliente_logo_file_json_urls,
        ]);

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
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Customer $customer)
    {
        //
    }

    public function searchFilter(Request $request){
        $paramValue = $request->query('filterParam');
        $paramValueIdentification = $request->query('filterParamIdentification');
        
        if(!is_null($paramValueIdentification)){
            $customer = Customer::where('identification', $paramValueIdentification)->first();
            
            if(is_null($customer)){
                return response()->json(["data" => []]);
            }

            return $this->showOne($customer);
        }

        if(is_null($paramValue)){
            $customers = Customer::get();
            return $this->showAll($customers);
        }
  
        $customers = Customer::where('identification', 'ilike', '%'.$paramValue.'%')->
                               orWhere('name', 'ilike', '%'.$paramValue.'%')->
                               orWhere('surname', 'ilike', '%'.$paramValue.'%')->
                               orWhere('razon_social', 'ilike', '%'.$paramValue.'%')->
                               orWhere('razon_comercial', 'ilike', '%'.$paramValue.'%')
                                ->get();
                                
        return $this->showAll($customers);
    }
}
