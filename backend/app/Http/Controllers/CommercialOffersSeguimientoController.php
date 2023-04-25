<?php

namespace App\Http\Controllers;

use App\Models\CommercialOffersSeguimiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CommercialOffersSeguimientoController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $commercialOffersSeguimientos = CommercialOffersSeguimiento::orderByDesc('id')->get();
        return $this->showAll($commercialOffersSeguimientos);
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
            'status' => 'required|string',
            'description' => 'required|string',
            'commercial_offer_id' => 'required|integer|exists:commercial_offers,id',
        ]);
        
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        
        $record = CommercialOffersSeguimiento::create([
            'status' => $request->post('status'),
            'description' => $request->post('description'),
            'commercial_offer_id' => $request->post('commercial_offer_id'),
        ]);
        
        if($record){
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
     * @param  \App\Models\CommercialOffersSeguimiento  $commercialOffersSeguimiento
     * @return \Illuminate\Http\Response
     */
    public function show(CommercialOffersSeguimiento $commercialOffersSeguimiento)
    {
        //
    }
    
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CommercialOffersSeguimiento  $commercialOffersSeguimiento
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CommercialOffersSeguimiento $commercialOffersSeguimiento)
    {
        //
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CommercialOffersSeguimiento  $commercialOffersSeguimiento
     * @return \Illuminate\Http\Response
     */
    public function destroy(CommercialOffersSeguimiento $commercialOffersSeguimiento)
    {
        //
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexByIdOffer($idOffer)
    {
        $commercialOffersSeguimientos = CommercialOffersSeguimiento::where('commercial_offer_id', $idOffer)->orderByDesc('id')->get();
        return $this->showAll($commercialOffersSeguimientos);
    }
}
