<?php

namespace App\Http\Controllers;

use App\Mail\commercialOfferAssignedNotification;
use App\Models\CommercialOffer;
use App\Models\CommercialOffersCotization;
use App\Models\CommercialOffersManagement;
use App\Models\CommercialOffersManagementFile;
use App\Models\CommercialOffersVisit;
use App\Models\Customer;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
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
            if(isset($queryParams["operativo_responsables"]) && !is_null($queryParams["operativo_responsables"])){
                $commercialOffers = $commercialOffers->filter(function($e) use ($queryParams){
                    if($e->responsable_operativo_id == $queryParams["operativo_responsables"]){
                        return $e;
                    }
                })->values();
            }
            if(isset($queryParams["comercial_responsables"]) && !is_null($queryParams["comercial_responsables"])){
                $commercialOffers = $commercialOffers->filter(function($e) use ($queryParams){

                    if($e->responsableRel->toArray()["id"] == $queryParams["comercial_responsables"]){
                        return $e;
                    }
                })->values();
            }
            if(isset($queryParams["clientes"]) && !is_null($queryParams["clientes"])){
                $commercialOffers = $commercialOffers->filter(function($e) use ($queryParams){
                    if($e->customer->id == $queryParams["clientes"]){
                        return $e;
                    }
                })->values();
            }
            if(isset($queryParams["estados"]) && !is_null($queryParams["estados"])){
                $commercialOffers = $commercialOffers->filter(function($e) use ($queryParams){
                    //dd($e->commercial_offers_seguimientos->toArray()[0]['status']);
                    if(count($e->commercial_offers_seguimientos->toArray()) > 0 ){
                        if($e->commercial_offers_seguimientos->toArray()[0]['status'] == $queryParams["estados"]){
                            return $e;
                        }
                    }
                })->values();
            }

            if(isset($queryParams["sedes"]) && !is_null($queryParams["sedes"])){
                $commercialOffers = $commercialOffers->filter(function($e) use ($queryParams){
                    if($e->sede == $queryParams["sedes"]){
                        return $e;
                    }
                })->values();
            }

            if(isset($queryParams["unidad_negocios"]) && !is_null($queryParams["unidad_negocios"])){
                $commercialOffers = $commercialOffers->filter(function($e) use ($queryParams){
                    if($e->service_type == $queryParams["unidad_negocios"]){
                        return $e;
                    }
                })->values();
            }

            if(isset($queryParams["years"]) && !is_null($queryParams["years"])){
                $commercialOffers = $commercialOffers->filter(function($e) use ($queryParams){
                    if(explode("-", $e->sequential_number)[1] == $queryParams["years"]){
                        return $e;
                    }
                })->values();
            }
        }

        //DATA FOR PDF

        $control_date = Carbon::now()->format('d/m/Y');
        $total_offers_managed = $commercialOffers->count();

        //
        $res = $commercialOffers->groupBy('service_type');

        return $res;

        $companies = collect();
        foreach ($commercialOffers->groupBy('customer.name') as $key => $commercialOffer) {

            $commercial_offer_contizations = $commercialOffer->pluck('commercial_offers_contizations')->collapse();

            $percentage = 0;
            if($total_offers_managed != 0){
                $percentage =  number_format(($commercialOffer->count() * 100) / $total_offers_managed, 1);
            }

            $companies->push((object)[
                "company_name" => $key,
                "sum_cotizations" => $commercial_offer_contizations->sum('valor_cotizado'),
                "total_offers" => $commercialOffer->count(),
                "percentage" => $percentage
            ]);
        }


        $total_cotizations = $companies->sum('sum_cotizations');

        $companies = $companies->map(function ($companie) use ($total_cotizations) {
            $percentage_cotization = 0;
            if($total_cotizations != 0){
                $percentage_cotization =  number_format(($companie->sum_cotizations * 100) / $total_cotizations, 7);
            }
            $companie->percentage_cotization = $percentage_cotization;
            return $companie;
        });

        return response()->json([
            "data_for_pdf" => [
                "control_date" => $control_date,
                "total_offers_managed" => $total_offers_managed,
                "total_cotizations" => $total_cotizations,
                "offers_managed_companies" => $companies 
            ],
            "data" => $commercialOffers, 
            "years" => $years,
        ], 200);
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

        $validationRules = [
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
            'responsable_id' => 'required|integer|exists:users,id',
            'responsable_operativo_id' => 'required|integer|exists:users,id',

            'visit_date' => 'nullable|date',
            'visit_place' => 'nullable|string',
            'person_attending' => 'nullable|string',
            'phone_number_person_attending' => 'nullable|integer',
            

            //management fields
            'requirements_determination' => 'required|string',
            'requirements_verification' => 'nullable|string',

            //cotization fields 
            'valor_cotizado' => 'required|string|max:50',
            'observaciones' => 'required|string|max:50',
            'cotizacion_file' => 'required|file|mimes:xlsx,doc,docx,jpg,png,pdf',
        ];

        for ($i=0; $i < $data['file_opportunity_length']; $i++) { 
            $validationRules['file_opportunity_'.$i] = 'file|mimes:xlsx,doc,docx,jpg,png,pdf';
        }


        $validator = Validator::make($data, $validationRules);
        


        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        return DB::transaction(function() use ($request, $data) {
            $savedFilesManagement = [];
            try{
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
                    'customer_id'  => $customer->id,
                    'responsable_id'  => $request->post('responsable_id'),//responsable comercial 
                    'responsable_operativo_id'  => $request->post('responsable_operativo_id'),
                    
                
                ]);

                //save visit data
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

                //save management information

                $commercialOffersManagementCreated = CommercialOffersManagement::create([
                    'requirements_determination' => $request->post('requirements_determination'),
                    //'current_status' => $request->post('current_status'),
                    'requirements_verification' => $request->post('requirements_verification'),
                    'commercial_offer_id' => $createdCommercialOffer->id
                ]);

                //save management files
                for ($i=0; $i < $data['file_opportunity_length']; $i++) { 
                    $file = null;
                    if ($request->hasFile('file_opportunity_'.$i)) {
                        $file = $request->file('file_opportunity_'.$i);
                        $file = $this->saveFile($file, 'commercialOffersManagementsFiles');
                        array_push($savedFilesManagement, $file['server_hash_name']);
                    }
        
                     CommercialOffersManagementFile::create([
                        'file' => $file,
                        'commercial_offers_management_id' => $commercialOffersManagementCreated->id 
                    ]);
                }

                //save cotization data
                $contizacion_file_json_urls = null;
                if ($request->hasFile('cotizacion_file')) {
                    $file = $request->file('cotizacion_file');
                    $contizacion_file_json_urls = $this->saveFile($file, 'commercialOffersContizations');
                }

                CommercialOffersCotization::create([
                    'valor_cotizado' => $request->post('valor_cotizado'),
                    'observaciones' => $request->post('observaciones'),
                    'cotizacion_file' => $contizacion_file_json_urls,
                    'commercial_offer_id' => $createdCommercialOffer->id,
                ]);

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
        Storage::delete($savedFilesManagement);
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
