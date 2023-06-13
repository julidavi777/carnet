<?php

namespace App\Http\Controllers;

use App\Mail\commercialOfferAssignedNotification;
use App\Models\CommercialOffer;
use App\Models\CommercialOffersVisit;
use App\Models\Customer;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class CommercialOfferController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $queryParams = $request->query();

        /* if(count($queryParams) == 0){
            return "hello";
        } */

        $commercialOffers = CommercialOffer::get();

        $years = $commercialOffers->pluck('sequential_number')->map(function($sn){
            $pieces = explode("-", $sn);
            return (object)["id" => $pieces[1], "name" => $pieces[1]];
        })->unique("id")->values();

        $commercialOffers = $commercialOffers->map(function($e){
            $e->assignment_date = Carbon::parse($e->created_at)->format('Y-m-d H:m:s') ;
            $e->customer;
            $e->responsableRel;
            $e->comercial_offer_visit;
            $e->user;
            $e->commercial_offers_management;
            $e->commercial_offers_contizations;
            $e->commercial_offers_seguimientos;
            if(isset($e->commercial_offers_management)){
                $e->commercial_offers_management->commercial_offers_management_files;
            }
            return $e;
        })->sortBy('id')->values();


        $AJUDICADA_A_CUBIKAR = "2";
        if($request->query('needsAwardedOffers') == "yes"){
            $commercialOffers = $commercialOffers->filter(function($e) use ($AJUDICADA_A_CUBIKAR){
                
                $commercial_offers_seguimiento = $e->commercial_offers_seguimientos->sortByDesc('id')->first();

                if(!is_null($commercial_offers_seguimiento)){
                    return $commercial_offers_seguimiento->status == $AJUDICADA_A_CUBIKAR;
                }

            })->sortBy('id')->values();

        }   


        if(count($queryParams) != 0){
            /* $commercialOffers = $commercialOffers->filter(function($commercialOffer) use ($queryParams){
                
            }); */
            /* foreach ($commercialOffers as $commercialOffer) {

                if(isset($queryParams["hello"]) && !is_null($queryParams["hello"])){
                    return $commercialOffer;
                }
            } */
        }

        return response()->json(["data" => $commercialOffers, "years" => $years], 200);
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
            'sede' => 'required|string',
            'customer_identification' => 'required|integer|exists:customers,identification',
            'sequential_number' => 'required|string|unique:commercial_offers',
            'contract_type' => 'required|string|max:50',
            'contract_type_other' => 'nullable|string|max:50',
            'service_type' => 'required|string|max:50',
            'service_type_other' => 'nullable|string|max:50',
            'sector_productivo' => 'required|string|max:50',
            'sector_productivo_other' => 'nullable|string|max:50',
            'object_description' => 'required|string',
            'numero' => 'nullable|integer',
            'cuantia' => 'nullable|integer',
            'location' => 'required|string|max:50',
            'release_date' => 'required|date',
            'delivery_date' => 'required|date',
            //'visit_date' => 'required|date',
            'observations' => 'nullable|string',
            'anexos' => 'nullable|file|mimes:doc,docx,jpg,png,pdf',
            'responsable_id' => 'required|integer|exists:users,id',
            'responsable_operativo_id' => 'required|integer|exists:users,id',

            'visit_date' => 'nullable|date',
            'visit_place' => 'nullable|string',
            'person_attending' => 'nullable|string',
            'phone_number_person_attending' => 'nullable|integer'
        ]);

        //return $data;

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        return DB::transaction(function() use ($request) {
            try{
                //SAVING FILES

                $anexos_json_urls = null;
                if ($request->hasFile('anexos')) {
                    $file = $request->file('anexos');
                    $anexos_json_urls = $this->saveFile($file, 'commercialOffersFiles');
                    
                }

                //get Customer
                $customer = Customer::where('identification', $request->post('customer_identification'))->first();

                $createdCommercialOffer = CommercialOffer::create([
                    'sede'  => $request->post('sede') ,
                    'sequential_number'  => strval($request->post('sequential_number')) ,
                    'contract_type'  => $request->post('contract_type'),
                    'contract_type_other'  => $request->post('contract_type_other'),
                    'service_type'  => $request->post('service_type'),
                    'service_type_other'  => $request->post('service_type_other'),
                    'sector_productivo'  => $request->post('sector_productivo'),
                    'sector_productivo_other'  => $request->post('sector_productivo_other'),
                    'object_description'  => $request->post('object_description'),
                    'sequential_number'  => $request->post('sequential_number'),
                    'numero'  => $request->post('numero'),
                    'cuantia'  => $request->post('cuantia'),
                    'location'  => $request->post('location'),
                    'release_date'  => $request->post('release_date'),
                    'delivery_date'  => $request->post('delivery_date'),
                    'observations'  => $request->post('observations'),
                    'anexos'  => $anexos_json_urls,
                    'customer_id'  => $customer->id,
                    'responsable_id'  => $request->post('responsable_id'),//responsable comercial 
                    'responsable_operativo_id'  => $request->post('responsable_operativo_id'),
                    
                
                ]);

                if(
                    !is_null($request->post('visit_date')) || 
                    !is_null($request->post('visit_place')) ||
                    !is_null($request->post('person_attending')) ||
                    !is_null($request->post('phone_number_person_attending'))
                ){
                    CommercialOffersVisit::create([
                        'visit_date'  => $request->post('visit_date'),
                        'visit_place' => $request->post('visit_place'),
                        'person_attending' => $request->post('person_attending'),
                        'phone_number_person_attending' => $request->post('phone_number_person_attending'),
                        'commercial_offer_id' => $createdCommercialOffer->id,
                    ]);
                }

                if($createdCommercialOffer){

                    $responsableComercialEmail = User::where('id', $request->post('responsable_id'))->first()->email;

                
                    $responsableOperativoEmail = User::where('id', $request->post('responsable_operativo_id'))->first()->email;
                    
                    try {
                        Mail::to($responsableOperativoEmail)->send(
                            new commercialOfferAssignedNotification(
                            strval($request->post('sequential_number')), 
                            $customer->name." ".$customer->surname, 
                            "responsable_operativo"
                            )
                        );
                        Mail::to($responsableComercialEmail)->send(
                            new commercialOfferAssignedNotification(
                            strval($request->post('sequential_number')), 
                            $customer->name." ".$customer->surname, 
                            "responsable_comercial"
                            )
                        );

    
                    } catch (\Throwable $ex) {
                        DB::rollback();
                        return response()->json(['status' => false, 'message' => 'something went wrong send email'.$ex], 400);
                    }

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

        } catch (\Exception $ex) {
        DB::rollback();
        // throw $ex;
        return response()->json(['status' => false, 'message' => 'something went wrong registro dog o usuario'.$ex], 400);
        }});
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
    public function update(Request $request, $commercialOfferId)
    {  
        $commercialOffer = CommercialOffer::findOrFail($commercialOfferId);
        
        $data = $request->all();

        $validator = Validator::make($data, [
            //'customer_identification' => 'nullable|integer|exists:customers,identification',
            'sede' => 'required|string',
            'contract_type' => 'nullable|string|max:50',
            'contract_type_other' => 'nullable|string|max:50',
            'service_type' => 'nullable|string|max:50',
            'service_type_other' => 'nullable|string|max:50',
            'sector_productivo' => 'nullable|string|max:50',
            'sector_productivo_other' => 'nullable|string|max:50',
            'object_description' => 'nullable|string',
            'numero' => 'nullable|integer',
            'cuantia' => 'nullable|integer',
            'location' => 'nullable|string|max:50',
            'release_date' => 'nullable|date',
            'delivery_date' => 'nullable|date',
            //'visit_date' => 'nullable|date',
            'observations' => 'nullable|string',
            'anexos' => 'nullable|file|mimes:doc,docx,jpg,png,pdf',
            'responsable_id' => 'nullable|integer|exists:users,id',
            'responsable_operativo_id' => 'nullable|integer|exists:users,id'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        return DB::transaction(function() use ($request, $commercialOffer) {
            try{
            //get Customer
            //$customer = Customer::where('identification', $request->post('customer_identification'))->first();

            //SAVING FILES

            $anexos_json_urls = $commercialOffer->anexos;
            if ($request->hasFile('anexos')) {

                //DELETE FILE
                if(!is_null($commercialOffer->anexos)){
                    unlink(storage_path('app/'.$commercialOffer->anexos['server_hash_name']));
                }


                $file = $request->file('anexos');
                $anexos_json_urls = $this->saveFile($file, 'commercialOffersFiles');
                
            }
    
    
            $updated = CommercialOffer::where('id', $commercialOffer->id)->update([    
                'sede'  => $request->post('sede'),
                'contract_type'  => $request->post('contract_type'),
                'contract_type_other'  => $request->post('contract_type_other'),
                'service_type'  => $request->post('service_type'),
                'service_type_other'  => $request->post('service_type_other'),
                'sector_productivo'  => $request->post('sector_productivo'),
                'sector_productivo_other'  => $request->post('sector_productivo_other'),
                'object_description'  => $request->post('object_description'),
                'numero'  => $request->post('numero'),
                'cuantia'  => $request->post('cuantia'),
                'location'  => $request->post('location'),
                'release_date'  => $request->post('release_date'),
                'delivery_date'  => $request->post('delivery_date'),
                //'visit_date'  => $request->post('visit_date'),
                'observations'  => $request->post('observations'),
                'anexos'  => $anexos_json_urls,
                //'customer_id'  => $customer->id,
                'responsable_id'  => $request->post('responsable_id'),
                'responsable_operativo_id'  => $request->post('responsable_operativo_id')
            ]);

            if(
                !is_null($request->post('visit_date')) || 
                !is_null($request->post('visit_place')) ||
                !is_null($request->post('person_attending')) ||
                !is_null($request->post('phone_number_person_attending'))
            ){
                if(!is_null($commercialOffer->comercial_offer_visit()->first())){
                    CommercialOffersVisit::where('id', $commercialOffer->comercial_offer_visit()->first()['id'])->update([
                        'visit_date'  => $request->post('visit_date'),
                        'visit_place' => $request->post('visit_place'),
                        'person_attending' => $request->post('person_attending'),
                        'phone_number_person_attending' => $request->post('phone_number_person_attending'),
                    ]);
                }else{
                    CommercialOffersVisit::create([
                        'visit_date'  => $request->post('visit_date'),
                        'visit_place' => $request->post('visit_place'),
                        'person_attending' => $request->post('person_attending'),
                        'phone_number_person_attending' => $request->post('phone_number_person_attending'),
                        'commercial_offer_id' => $commercialOffer->id,
                    ]);
                }
            }

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
        } catch (\Exception $ex) {
            DB::rollback();
            // throw $ex;
            return response()->json(['status' => false, 'message' => 'something went wrong registro dog o usuario'.$ex], 400);
            }
        });
        
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

        $actualYear =  Carbon::now()->format('Y');

        $customers = CommercialOffer::orderByDesc('id')->get();
         
        $newSequentialNumber = "";
        if(count($customers) > 0){
            $newSequentialNumber = explode('-', $customers[0]['sequential_number'])[0];
            $newSequentialNumber = intval($newSequentialNumber+1);

        }else{
            $newSequentialNumber = 1;
        }
        
        //FORMAT SPECIAL
        $newSequentialNumber = str_pad($newSequentialNumber, 3, "0", STR_PAD_LEFT).'-'.$actualYear;

        //return $customersCount;
        return response()->json([
            "data" => $newSequentialNumber 
        ], 200); 
    }
}
