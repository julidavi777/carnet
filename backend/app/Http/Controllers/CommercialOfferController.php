<?php

namespace App\Http\Controllers;

use App\Models\CommercialOffer;
use App\Models\Customer;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CommercialOfferController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $customers = CommercialOffer::get();

        $customers = $customers->map(function($e){
            $e->assignment_date = Carbon::parse($e->created_at)->format('Y-m-d H:m:s') ;
            return $e;
        });

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
            'customer_identification' => 'required|integer|exists:customers,identification',
            'sequential_number' => 'required|integer|unique:commercial_offers',
            'contract_type' => 'required|string|max:50',
            'service_type' => 'required|string|max:50',
            'sector_productivo' => 'required|string|max:50',
            'object_description' => 'required|string',
            'numero' => 'nullable|integer',
            'cuantia' => 'nullable|integer',
            'location' => 'required|string|max:50',
            'release_date' => 'required|date',
            'delivery_date' => 'required|date',
            'visit_date' => 'required|date',
            'observations' => 'nullable|string',
            'anexos' => 'nullable|file|mimes:doc,docx,jpg,png,pdf',
            'responsable_id' => 'required|integer|exists:users,id'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        //SAVING FILES

        $anexos_json_urls = null;
        if ($request->hasFile('anexos')) {
            $file = $request->file('anexos');
            $anexos_json_urls = $this->saveFile($file, 'commercialOffersFiles');
            
        }

        //get Customer
        $customer = Customer::where('identification', $request->post('customer_identification'))->first();

        $created = CommercialOffer::create([
            'sequential_number'  => $request->post('sequential_number'),
            'contract_type'  => $request->post('contract_type'),
            'service_type'  => $request->post('service_type'),
            'sector_productivo'  => $request->post('sector_productivo'),
            'object_description'  => $request->post('object_description'),
            'sequential_number'  => $request->post('sequential_number'),
            'numero'  => $request->post('numero'),
            'cuantia'  => $request->post('cuantia'),
            'location'  => $request->post('location'),
            'release_date'  => $request->post('release_date'),
            'delivery_date'  => $request->post('delivery_date'),
            'visit_date'  => $request->post('visit_date'),
            'observations'  => $request->post('observations'),
            'anexos'  => $anexos_json_urls,
            'customer_id'  => $customer->id,
            'responsable_id'  => $request->post('responsable_id')
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
     * @param  \App\Models\CommercialOffer  $commercialOffer
     * @return \Illuminate\Http\Response
     */
    public function show(CommercialOffer $commercialOffer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CommercialOffer  $commercialOffer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CommercialOffer $commercialOffer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CommercialOffer  $commercialOffer
     * @return \Illuminate\Http\Response
     */
    public function destroy(CommercialOffer $commercialOffer)
    {
        //
    }

    public function getNextValue(){
        $customersCount = CommercialOffer::count();
        
        return response()->json([
            "data" => $customersCount + 1
        ], 200); 
    }
}
