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
            'identification_type' => 'required|string|max:50',
            'identification' => 'required|integer|unique:customers',
            'digit_v' => 'nullable|integer',
            'name' => 'required|string|max:50',
            'surname' => 'required|string|max:50',
            'phone_number' => 'required|integer',
            'address' => 'required|string|max:50',
            'email' => 'required|string',
            'commercial_contact_1' => 'nullable|integer',
            'commercial_contact_2' => 'nullable|integer',
            'commercial_contact_3' => 'nullable|integer',
            'razon_social' => 'required|string|max:50',
            'razon_comercial' => 'required|string|max:50',
            'rut_file' => 'required|file|mimes:doc,docx,jpg,png,pdf',
            'camara_commerce_file' => 'required|file|mimes:doc,docx,jpg,png,pdf',
            'income_statement_file' => 'required|file|mimes:doc,docx,jpg,png,pdf',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        //SAVING FILES
        
        if ($request->hasFile('rut_file')) {
            $file = $request->file('rut_file');
            $rut_file_json_urls = $this->saveFile($file);
            //$path = $file->storeAs('public', $filename);
        }

        if ($request->hasFile('camara_commerce_file')) {
            $file = $request->file('camara_commerce_file');
            $camara_commerce_file_json_urls = $this->saveFile($file);
            //$path = $file->storeAs('public', $filename);
        }

        if ($request->hasFile('income_statement_file')) {
            $file = $request->file('income_statement_file');
            $income_statement_file_json_urls = $this->saveFile($file);
            //$path = $file->storeAs('public', $filename);
        }


        $created = Customer::create([
            'identification_type' => $request->post('identification_type'),
            'identification' => $request->post('identification'),
            'digit_v' => $request->post('digit_v'),
            'name' => $request->post('name'),
            'surname' => $request->post('surname'),
            'phone_number' => $request->post('phone_number'),
            'address' => $request->post('address'),
            'email' => $request->post('email'),
            'commercial_contact_1' => $request->post('commercial_contact_1'),
            'commercial_contact_2' => $request->post('commercial_contact_2'),
            'commercial_contact_3' => $request->post('commercial_contact_3'),
            'razon_social' => $request->post('razon_social'),
            'razon_comercial' => $request->post('razon_comercial'),
            'rut_file' => $rut_file_json_urls,
            'camara_commerce_file' => $camara_commerce_file_json_urls,
            'income_statement_file' => $income_statement_file_json_urls,
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
    public function update(Request $request, Customer $customer)
    {
        //
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

    private function saveFile($file){
        $dt = Carbon::now();

        $hash = $file->hashName();

        $photo_url = $file->storeAs('public/files/customersFiles/'.$dt->toDateString(),'time_'.$dt->format('h_i_s').'_'.  $hash);

        $urls = array(
            "server_hash_name" => $photo_url,
            "original_name" => $file->getClientOriginalName()
        );

        return json_encode($urls);
    }

    public function searchFilterByName(Request $request){
        $paramValue = $request->query('filterParam');
        
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
