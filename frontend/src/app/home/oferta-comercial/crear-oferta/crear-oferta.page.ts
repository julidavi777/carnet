import { CrearOfertaService } from './crear-oferta.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-crear-oferta',
  templateUrl: './crear-oferta.page.html',
  styleUrls: ['./crear-oferta.page.scss'],
  providers: [MessageService]
})
export class CrearOfertaPage implements OnInit {


    nextSequentialNumber: number = 0;
    isCustomerFound: boolean | null= null;

    usersListResponsableComercial: any = [];
    usersListResponsableOperativo: any = [];
    sedes: any[] = [];
    negocio_unidades: any[] = [];

    offersForm: any = new FormGroup({
    sede: new FormControl('', [Validators.required]),
    sequential_number: new FormControl('', [Validators.required]),
    customer_identification: new FormControl('' ,  [Validators.required]),
    name: new FormControl('', ),
    surname: new FormControl('',),
    razon_comercial: new FormControl('', ),
    razon_social: new FormControl('', ),
    responsable_id: new FormControl('', [Validators.required]),
    responsable_operativo_id: new FormControl('', [Validators.required]),
    contract_type: new FormControl('' , [Validators.required]),
    contract_type_other: new FormControl(''),
    service_type: new FormControl('', [Validators.required]),
    service_type_other: new FormControl(''),
    sector_productivo: new FormControl('', [Validators.required]),
    sector_productivo_other: new FormControl(''),
    object_description: new FormControl('',[Validators.required]),
    numero: new FormControl(''),
    cuantia: new FormControl('',),
    location: new FormControl('',[Validators.required]),
    release_date: new FormControl('',[Validators.required]),
    delivery_date: new FormControl('',[Validators.required]),
    observations: new FormControl('',),

    //MODAL VISIT
    visit_date: new FormControl('',),
    visit_place: new FormControl('',),
    person_attending: new FormControl('',),
    phone_number_person_attending: new FormControl('',),

  });

  
  //Children properties
  adminOpportunitiesFiles: any[] = [];
  requirementsVerificationValues: object | any= {};
  validateArrayAdminOpportunitiesFiles: boolean = false;
  
  isValidCustomerField: boolean = false;

  constructor(

    private crearOfertaService: CrearOfertaService
  ) { }

  ngOnInit() {
    this.sedes = this.crearOfertaService.sedes;
    this.negocio_unidades = this.crearOfertaService.negocio_unidades;

    this.offersForm.controls['sequential_number'].disable();

    this.offersForm.controls['name'].disable();
    this.offersForm.controls['surname'].disable();
    this.offersForm.controls['razon_social'].disable();
    this.offersForm.controls['razon_comercial'].disable();
    
    this.getSequentialNumber();
    this.searchIdentificationActions();
    this.getUsers();
    
  }
  
  
    get sede () { return this.offersForm.get('sede') }
    get sequential_number () { return this.offersForm.get('sequential_number') }
    get customer_identification () { return this.offersForm.get('customer_identification') }
  
    get name () { return this.offersForm.get('name') }
    get surname () { return this.offersForm.get('surname') }
    get razon_social () { return this.offersForm.get('razon_social') }
    get razon_comercial () { return this.offersForm.get('razon_comercial') }
    get responsable_id () { return this.offersForm.get('responsable_id') }
    get responsable_operativo_id () { return this.offersForm.get('responsable_operativo_id') }
  
    get contract_type () {return this.offersForm.get('contract_type')}
    get service_type () {return this.offersForm.get('service_type')}
    get sector_productivo () {return this.offersForm.get('sector_productivo')}
    get object_description () {return this.offersForm.get('object_description')}
    get location () {return this.offersForm.get('location')}
    get release_date () {return this.offersForm.get('release_date')}
    get delivery_date () {return this.offersForm.get('delivery_date')}
  
  
  
  onSubmit(){
    

    if(!this.offersForm.valid){
      this.offersForm.markAllAsTouched();
      return;
    }
    
   /*  if(!this.offersForm.get('cotizacionForm').valid){
      this.offersForm.get('cotizacionForm').markAllAsTouched();
      return;
    } */
    
    //child admin oportunidad form validations
    if(this.isEmpty(this.requirementsVerificationValues)){
      this.showErrorToast("En el formulario de gestionar oportunidades se deben seleccionar la determinación")
      return;
    }
    
    if(this.adminOpportunitiesFiles.length == 0 && this.validateArrayAdminOpportunitiesFiles){
      this.showErrorToast("En el formulario de gestionar oportunidades se debe registrar por lo menos un archivo")
      return;
    }
/*     console.log(this.offersForm.value)
    console.log(this.offersForm.value.cotizacionForm)
    console.log(this.adminOpportunitiesFiles)
    console.log(this.requirementsVerificationValues) */

    const formData = new FormData();


    //commercial offers management
    //adminOpportunitiesFiles
    this.adminOpportunitiesFiles.forEach((file, index) => {
      formData.append('file_opportunity_'+index, file.file);
    })
    let lng: any = this.adminOpportunitiesFiles.length;
    formData.append('file_opportunity_length', lng );
    //rest of field
    formData.append('requirements_determination', this.requirementsVerificationValues?.requirements_determination ? this.requirementsVerificationValues?.requirements_determination : ''  );
    formData.append('requirements_verification', this.requirementsVerificationValues?.requirements_verification ? this.requirementsVerificationValues?.requirements_verification : ''  );
    //commercial offers management end

    //data cotizacion
    let dataCotizacion = this.offersForm.value.cotizacionForm;

    formData.append('valor_cotizado', dataCotizacion?.valor_cotizado)
    formData.append('observaciones', dataCotizacion?.observaciones )
    formData.append('cotizacion_file', dataCotizacion?.cotizacion_file )
    //data cotizacion end

    formData.append('sede', this.offersForm.get('sede').value ? this.offersForm.get('sede').value : '');
    formData.append('sequential_number', this.offersForm.get('sequential_number').value ? this.offersForm.get('sequential_number').value : '');
    formData.append('responsable_id', this.offersForm.get('responsable_id').value ? this.offersForm.get('responsable_id').value : '');
    formData.append('responsable_operativo_id', this.offersForm.get('responsable_operativo_id').value ? this.offersForm.get('responsable_operativo_id').value : '');
    formData.append('customer_identification', this.offersForm.get('customer_identification').value ? this.offersForm.get('customer_identification').value : '');
    formData.append('contract_type', this.offersForm.get('contract_type').value ? this.offersForm.get('contract_type').value : '');
    formData.append('contract_type_other', this.offersForm.get('contract_type_other').value ? this.offersForm.get('contract_type_other').value : '');
    formData.append('service_type', this.offersForm.get('service_type').value ? this.offersForm.get('service_type').value : '');
    formData.append('service_type_other', this.offersForm.get('service_type_other').value ? this.offersForm.get('service_type_other').value : '');
    formData.append('sector_productivo', this.offersForm.get('sector_productivo').value ? this.offersForm.get('sector_productivo').value : '');
    formData.append('sector_productivo_other', this.offersForm.get('sector_productivo_other').value ? this.offersForm.get('sector_productivo_other').value : '');
    formData.append('object_description', this.offersForm.get('object_description').value ? this.offersForm.get('object_description').value : '');
    formData.append('numero', this.offersForm.get('numero').value ? this.offersForm.get('numero').value : '');
    formData.append('cuantia', this.offersForm.get('cuantia').value ? this.offersForm.get('cuantia').value : '');
    formData.append('location', this.offersForm.get('location').value ? this.offersForm.get('location').value : '');
    formData.append('release_date', this.offersForm.get('release_date').value ? this.offersForm.get('release_date').value : '');
    formData.append('delivery_date', this.offersForm.get('delivery_date').value ? this.offersForm.get('delivery_date').value : '');
    formData.append('observations', this.offersForm.get('observations').value ? this.offersForm.get('observations').value : '');


    //MODAL DATA
    formData.append('visit_date', this.offersForm.get('visit_date').value ? this.offersForm.get('visit_date').value : '');
    formData.append('visit_place', this.offersForm.get('visit_place').value ? this.offersForm.get('visit_place').value : '');
    formData.append('person_attending', this.offersForm.get('person_attending').value ? this.offersForm.get('person_attending').value : '');
    formData.append('phone_number_person_attending', this.offersForm.get('phone_number_person_attending').value ? this.offersForm.get('phone_number_person_attending').value : '');

    this.crearOfertaService.saveOffer(formData).subscribe((res: any) => {
        this.showSuccessToast("Oferta registrada exitosamente");
        //this.offersForm.reset();
    },err => {
      this.showErrorToast("Error al registrar")
    });
  }

  getSequentialNumber(){
    this.crearOfertaService.getSequentialNumber().subscribe((res: any) => {
      this.nextSequentialNumber = res.data;
      this.sequential_number.setValue(this.nextSequentialNumber);
    })
  }

  identification_type = null;
  searchIdentificationActions(){
    this.customer_identification.valueChanges.pipe(
      debounceTime(370)
    ).subscribe((res: any) => {
      this.name.reset()
      this.surname.reset()
      this.razon_social.reset()
      this.razon_comercial.reset()
      this.isCustomerFound = null;
      console.log({res})
      /* if(res.length > 0){
        this.showCancelButton = true;
      }
      this.loadingIndicator = true; */
      this.crearOfertaService.searchFilterByIdentification(res).subscribe((resFilter: any) => {
        console.log(resFilter.data)
        if(resFilter.data.length == 0){
          this.isCustomerFound = false;
        }else{
          this.isCustomerFound = true;
          this.name.setValue(resFilter.data.name);
          this.surname.setValue(resFilter.data.surname)
          this.razon_social.setValue(resFilter.data.razon_social)
          this.razon_comercial.setValue(resFilter.data.razon_comercial)
          let idsNames = ['CC', 'NIT', 'CE']
          this.identification_type = idsNames[resFilter.data.identification_type-1] ;
          
        }
        //this.rows = resFilter.data;
        //this.loadingIndicator = false;
      })
    });
  }

  getUsers(){
    this.crearOfertaService.getUsers("COMERCIAL").subscribe((res: any) => {
      this.usersListResponsableComercial = res.data;
    });
    this.crearOfertaService.getUsers("OPERATIVO").subscribe((res: any) => {
      this.usersListResponsableOperativo = res.data;
    });
  }

  newFileEventChildAdminOportunidad($event){
    console.log($event)
    this.adminOpportunitiesFiles = $event;
  }

  requirementsVerificationValuesEvent($event){
    let obj = $event;

    if(obj.requirements_determination == "1" && obj.requirements_verification == "1"){
      this.validateArrayAdminOpportunitiesFiles = true;
    }else{
      this.validateArrayAdminOpportunitiesFiles = false;
    }

    this.requirementsVerificationValues = $event;
  }

  showSuccessToast(message: string) : void{
    this.messageService.clear();
    this.messageService.add({ key: 'successToast',  severity: 'success', summary: 'Éxito', detail: message });
  }

  showErrorToast(message: string) : void{
    this.messageService.clear();
    this.messageService.add({ key: 'errorToast',  severity: 'error', summary: 'Error', detail: message });
  }

  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }


}
