import { OfertaEditarService } from './oferta-editar.service';
import { CrearOfertaService } from './../crear-oferta/crear-oferta.service';


import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-oferta-editar',
  templateUrl: './oferta-editar.page.html',
  styleUrls: ['./oferta-editar.page.scss'],
})
export class OfertaEditarPage implements OnInit {


    nextSequentialNumber: number = 0;
    isCustomerFound: boolean | null= null;
    registeredSuccessfully: boolean = false;
    identification_type = null;

    usersListResponsable: any = [];

    idOffer: number | null = null;

    offersForm: any = new FormGroup({
    sede: new FormControl('', [Validators.required]),
    sequential_number: new FormControl('', [Validators.required]),
    customer_identification: new FormControl('',),
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('',[Validators.required]),
    assignment_date: new FormControl('',[Validators.required]),
    razon_comercial: new FormControl('', [Validators.required]),
    razon_social: new FormControl('', [Validators.required]),
    responsable_id: new FormControl('', [Validators.required]),
    responsable_operativo_id: new FormControl('', [Validators.required]),
    contract_type: new FormControl(''),
    contract_type_other: new FormControl(''),
    service_type: new FormControl('', [Validators.required]),
    service_type_other: new FormControl(''),
    sector_productivo: new FormControl('', [Validators.required]),
    sector_productivo_other: new FormControl(''),
    object_description: new FormControl('',[Validators.required]),
    numero: new FormControl('',[Validators.required]),
    cuantia: new FormControl('',),
    location: new FormControl('',),
    release_date: new FormControl('',),
    delivery_date: new FormControl('',),
    observations: new FormControl('',),
    
    anexos_file_field: new FormControl('',),//SOLO REFERENCIA NO ENVIAR
    anexos: new FormControl('',),
    
    //MODAL VISIT
    visit_date: new FormControl('',),
    visit_place: new FormControl('',),
    person_attending: new FormControl('',),
    phone_number_person_attending: new FormControl('',),

  });

  get sequential_number () { return this.offersForm.get('sequential_number') }
  get customer_identification () { return this.offersForm.get('customer_identification') }

  get name () { return this.offersForm.get('name') }
  get surname () { return this.offersForm.get('surname') }
  get razon_comercial () { return this.offersForm.get('razon_comercial') }
  get razon_social () { return this.offersForm.get('razon_social') }

  get contract_type () {return this.offersForm.get('contract_type')}
  get service_type () {return this.offersForm.get('service_type')}
  get sector_productivo () {return this.offersForm.get('sector_productivo')}

  constructor(
    private crearOfertaService:CrearOfertaService,
    private ofertaEditarService: OfertaEditarService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUsers();
    this.offersForm.controls['customer_identification'].disable();
    this.offersForm.controls['sequential_number'].disable();
    this.offersForm.controls['name'].disable();
    this.offersForm.controls['surname'].disable();
    this.offersForm.controls['razon_social'].disable();
    this.offersForm.controls['razon_comercial'].disable();

    console.log(this.ofertaEditarService.getDataOffer())  
    let editData = this.ofertaEditarService.getDataOffer();
    if(editData){
      delete editData?.anexos;
      this.idOffer = editData.id;
      this.offersForm.patchValue({
        ...editData,
        customer_identification: editData.customer.identification,
        name: editData.customer.name,
        surname: editData.customer.surname,
        razon_social: editData.customer.razon_social,
        razon_comercial: editData.customer.razon_comercial,
        responsable_id: editData?.responsable_rel?.id,
        release_date: this.formatDate(editData.release_date),
        delivery_date: this.formatDate(editData.delivery_date),
        visit_date: this.formatDate(editData?.comercial_offer_visit?.visit_date),
        visit_place: editData?.comercial_offer_visit?.visit_place,
        person_attending: editData?.comercial_offer_visit?.person_attending,
        phone_number_person_attending: editData?.comercial_offer_visit?.phone_number_person_attending,
      })  
      let idsNames = ['CC', 'NIT', 'CE']
      this.identification_type = idsNames[editData.customer.identification_type-1] ;
    }else{
      this.router.navigate(['home/oferta-comercial/ofertas']);
    }

  }

  onSubmit(){
    console.log(this.offersForm.value)

    const formData = new FormData();

    formData.append('sede', this.offersForm.get('sede').value);
    formData.append('sequential_number', this.offersForm.get('sequential_number').value);
    formData.append('responsable_id', this.offersForm.get('responsable_id').value);
    formData.append('responsable_operativo_id', this.offersForm.get('responsable_operativo_id').value);
    formData.append('customer_identification', this.offersForm.get('customer_identification').value);
    formData.append('assignment_date', this.offersForm.get('assignment_date').value);
    formData.append('contract_type', this.offersForm.get('contract_type').value);
    formData.append('contract_type_other', this.offersForm.get('contract_type_other').value);
    formData.append('service_type', this.offersForm.get('service_type').value);
    formData.append('service_type_other', this.offersForm.get('service_type_other').value);
    formData.append('sector_productivo', this.offersForm.get('sector_productivo').value);
    formData.append('sector_productivo_other', this.offersForm.get('sector_productivo_other').value);
    formData.append('object_description', this.offersForm.get('object_description').value);
    formData.append('numero', this.offersForm.get('numero').value);
    formData.append('cuantia', this.offersForm.get('cuantia').value);
    formData.append('location', this.offersForm.get('location').value);
    formData.append('release_date', this.offersForm.get('release_date').value);
    formData.append('delivery_date', this.offersForm.get('delivery_date').value);
    formData.append('visit_date', this.offersForm.get('visit_date').value);
    formData.append('observations', this.offersForm.get('observations').value);
    formData.append('anexos', this.offersForm.get('anexos').value ? this.offersForm.get('anexos').value: '');

    formData.append('file', this.offersForm.get('anexos').value);

    //MODAL DATA
    formData.append('visit_date', this.offersForm.get('visit_date').value);
    formData.append('visit_place', this.offersForm.get('visit_place').value);
    formData.append('person_attending', this.offersForm.get('person_attending').value);
    formData.append('phone_number_person_attending', this.offersForm.get('phone_number_person_attending').value);

        
    this.ofertaEditarService.editOffer(formData, this.idOffer ).subscribe((res: any) => {
        console.log(res);
        this.registeredSuccessfully = true;
    },err => {
      alert("Error al registrar")
    });
  }

 
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
    this.crearOfertaService.getUsers().subscribe((res: any) => {
      this.usersListResponsable = res.data;
    });
  }


  onFileChange(event: any, name_field: string){
    if(name_field == "anexos_file_field" ){
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.offersForm.patchValue({
          anexos: file
        });
      }
    }
  }

  private formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

}
