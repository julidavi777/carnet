import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { read } from 'fs';
import { CrearClienteService } from './crear-cliente.service';
import { CommonService } from 'src/app/services/common.service';
import { DomSanitizer } from '@angular/platform-browser';


interface HtlmInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.page.html',
  styleUrls: ['./crear-cliente.page.scss'],
})
export class CrearClientePage implements OnInit {

  registeredSuccessfully:boolean = false;
  expandAllClass: boolean = true;
  showDigitV: boolean = false;
  keyword = 'name';

  departamentos = [];
  municipios = [];
  formContacto1Municipios = [];
  formContacto2Municipios = [];
  formContactoFacturacionMunicipios = [];
  formContactoPagosMunicipios = [];

  selectedFile: string = '';



  formContacto1: any = new FormGroup({
     name: new FormControl('', [Validators.required]),
    phone_number: new FormControl('', [Validators.required]),
    telephone_number: new FormControl('', [Validators.required]),
    telephone_number_ext: new FormControl(''),
    email: new FormControl(''),
    departamento_id: new FormControl(''),
    municipio_id: new FormControl(''),
    customers_contact_type_id: new FormControl(1)
  });

  formContacto2: any = new FormGroup({
     name: new FormControl(''),
    phone_number: new FormControl(''),
    telephone_number: new FormControl(''),
    telephone_number_ext: new FormControl(''),
    email: new FormControl(''),
    departamento_id: new FormControl(''),
    municipio_id: new FormControl(''),
    customers_contact_type_id: new FormControl(2)
  });

  formContactoFacturacion: any = new FormGroup({
     name: new FormControl(''),
    phone_number: new FormControl(''),
    telephone_number: new FormControl(''),
    telephone_number_ext: new FormControl(''),
    email: new FormControl(''),
    departamento_id: new FormControl(''),
    municipio_id: new FormControl(''),
    customers_contact_type_id: new FormControl(3)
  });

  formContactoPagos: any = new FormGroup({
    name: new FormControl(''),
    phone_number: new FormControl(''),
    telephone_number: new FormControl(''),
    telephone_number_ext: new FormControl(''),
    email: new FormControl(''),
    departamento_id: new FormControl(''),
    municipio_id: new FormControl(''),
    customers_contact_type_id: new FormControl(4)
  });

  customerForm: any = new FormGroup({
    identification_type: new FormControl('', [Validators.required]),
    identification: new FormControl('', [Validators.required]),
    digit_v: new FormControl(''),
    name: new FormControl('',),
    surname: new FormControl('',),
    phone_number: new FormControl(''),
    address: new FormControl('', [Validators.required]),
    departamento: new FormControl('', [Validators.required]),
    municipio: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    /* nombre_contacto_comercial: new FormControl('',),
    commercial_contact_1: new FormControl('', [Validators.required]),
    commercial_contact_2: new FormControl('',),
    commercial_contact_3: new FormControl('',), */
    razon_social: new FormControl('',),
    razon_comercial: new FormControl('',),


    rut_file_field: new FormControl('',),//SOLO REFERENCIA NO ENVIAR
    rut_file: new FormControl('',),

    logo_customers_file_field: new FormControl('',),//SOLO REFERENCIA NO ENVIAR
    logo_customers_file: new FormControl('',),

    camara_commerce_file_field: new FormControl('',),//SOLO REFERENCIA NO ENVIAR
    camara_commerce_file: new FormControl('',),

    income_statement_file_field: new FormControl('',),//SOLO REFERENCIA NO ENVIAR
    income_statement_file: new FormControl('',),

    cliente_logo_field: new FormControl('',),//SOLO REFERENCIA NO ENVIAR
    cliente_logo: new FormControl('',),
  });

  get municipio () { return this.customerForm.get('municipio') }

  constructor(
    private crearClienteService: CrearClienteService,
    private commonService: CommonService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.customerForm.controls['municipio'].disable();

    this.formContacto1.controls['municipio_id'].disable();
    this.formContacto2.controls['municipio_id'].disable();
    this.formContactoFacturacion.controls['municipio_id'].disable();
    this.formContactoPagos.controls['municipio_id'].disable();

    this.getDepartamentos();
  }

  getDepartamentos(){
    this.commonService.getDepartamentos().subscribe((res:any) => {
      this.departamentos = res.data;
    })
  }


  onSubmit(){

    this.registeredSuccessfully = false;

    console.log(this.customerForm.value)

    const formData = new FormData();

    formData.append('identification', this.customerForm.get('identification').value);
    formData.append('digit_v', this.customerForm.get('digit_v').value);
    formData.append('identification_type', this.customerForm.get('identification_type').value);
    formData.append('name', this.customerForm.get('name').value);
    formData.append('surname', this.customerForm.get('surname').value);
    formData.append('phone_number', this.customerForm.get('phone_number').value);
    formData.append('address', this.customerForm.get('address').value);
    formData.append('departamento_id', this.customerForm.get('departamento').value?.id);
    formData.append('municipio_id', this.customerForm.get('municipio').value?.id);
    formData.append('email', this.customerForm.get('email').value);
    /* formData.append('nombre_contacto_comercial', this.customerForm.get('nombre_contacto_comercial').value);
    formData.append('commercial_contact_1', this.customerForm.get('commercial_contact_1').value);
    formData.append('commercial_contact_2', this.customerForm.get('commercial_contact_2').value);
    formData.append('commercial_contact_3', this.customerForm.get('commercial_contact_3').value); */
    formData.append('razon_social', this.customerForm.get('razon_social').value);
    formData.append('razon_comercial', this.customerForm.get('razon_comercial').value);


    formData.append('rut_file', this.customerForm.get('rut_file').value);
    formData.append('camara_commerce_file', this.customerForm.get('camara_commerce_file').value);
    formData.append('income_statement_file', this.customerForm.get('income_statement_file').value);
    formData.append('cliente_logo', this.customerForm.get('cliente_logo').value);

    //MODALS DATA
    if(this.hasDefinedProp(this.formContacto1.value)){
      formData.append('form_contacto1',JSON.stringify( {
        ...this.formContacto1.value,
        departamento_id: this.formContacto1.get('departamento_id').value?.id,
        municipio_id:this.formContacto1.get('municipio_id').value?.id
      }));
    }else{
      formData.append('form_contacto1', '')
    }

    if(this.hasDefinedProp(this.formContacto2.value)){
      formData.append('form_contacto2',JSON.stringify( {
        ...this.formContacto2.value,
        departamento_id: this.formContacto2.get('departamento_id').value?.id,
        municipio_id:this.formContacto2.get('municipio_id').value?.id
      }));
    }else{
      formData.append('form_contacto2', '')
    }

    if(this.hasDefinedProp(this.formContactoFacturacion.value)){
      formData.append('form_contacto_facturacion', JSON.stringify({
        ...this.formContactoFacturacion.value,
        departamento_id: this.formContactoFacturacion.get('departamento_id').value?.id,
        municipio_id:this.formContactoFacturacion.get('municipio_id').value?.id
      }));
    }else{
      formData.append('form_contacto_facturacion','')
    }
    if(this.hasDefinedProp(this.formContactoPagos.value)){
      formData.append('form_contacto_pagos', JSON.stringify({
        ...this.formContactoPagos.value,
        departamento_id: this.formContactoPagos.get('departamento_id').value?.id,
        municipio_id:this.formContactoPagos.get('municipio_id').value?.id
      }));
    }else{
      formData.append('form_contacto_pagos','')
    }

    this.crearClienteService.saveCustomer(formData).subscribe(res => {
        //alert('Uploaded Successfully.');
        this.registeredSuccessfully = true;
        setTimeout(() => {
          this.registeredSuccessfully = false;
        }, 3000);
    }, err => {

      alert('error al registrar.');
    }
    );
  }

  changeSelectTipoDoc(event: any ){
    console.log(event.target.value)
    if(event.target.value === "2"){
      this.expandAllClass = false;
      this.showDigitV = true;
    }else{
      this.expandAllClass = true;
      this.showDigitV = false;
    }
  }

  onFileChange(event: any, name_field: string, ){
    if(name_field == "rut_file_field" ){
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.customerForm.patchValue({
          rut_file: file
        });
      }
    }

    if(name_field ==  "camara_commerce_file_field"){
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.customerForm.patchValue({
          camara_commerce_file: file
        });
      }
    }

    if(name_field ==  "income_statement_file_field"){
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.customerForm.patchValue({
          income_statement_file: file
        });
      }
    }

    if(name_field ==  "logo_customers_file_field"){
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.customerForm.patchValue({
          camara_commerce_file: file
        });
      }
    }

    /* if(name_field ==  "cliente_logo_field"){
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.customerForm.patchValue({
          cliente_logo: file

        });

        // const reader = new FileReader();
        // reader.onload = event => this.photoSelected = reader.result;
        // reader.readAsDataURL(this.photoSelected)
      }
    } */
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.customerForm.patchValue({
        cliente_logo: file
      });
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.result !== null) {
          this.selectedFile = reader.result.toString();
        }
      };
    }
  }


  text: string;

  results: string[];

  departamentoChange(event, id_modal: number = 0) {
    let municipio_id = event.value.id;

    if(id_modal === 0) {
      this.customerForm.controls['municipio'].reset()
      this.customerForm.controls['municipio'].disable();
    }
    if(id_modal === 1){
      this.formContacto1.controls['municipio_id'].reset()
      this.formContacto1.controls['municipio_id'].disable();
    }
    if(id_modal === 2){
      this.formContacto2.controls['municipio_id'].reset()
      this.formContacto2.controls['municipio_id'].disable();
    }
    if(id_modal === 3){
      this.formContactoFacturacion.controls['municipio_id'].reset()
      this.formContactoFacturacion.controls['municipio_id'].disable();
    }
    if(id_modal === 4){
      this.formContactoPagos.controls['municipio_id'].reset()
      this.formContactoPagos.controls['municipio_id'].disable();
    }

    /* this.mylookupservice.getResults(event.query).then(data => {
        this.results = data;
    }); */
    this.commonService.getDepartamentosMunicipios(municipio_id).subscribe((res: any) => {
      if(id_modal === 0) {
        this.customerForm.controls['municipio'].enable();
        this.municipios = res.data;
      }
      if(id_modal === 1){
        this.formContacto1.controls['municipio_id'].enable();
        this.formContacto1Municipios = res.data;
      }
      if(id_modal === 2){
        this.formContacto2.controls['municipio_id'].enable();
        this.formContacto2Municipios = res.data;
      }
      if(id_modal === 3){
        this.formContactoFacturacion.controls['municipio_id'].enable();
        this.formContactoFacturacionMunicipios = res.data;
      }
      if(id_modal === 4){
        this.formContactoPagos.controls['municipio_id'].enable();
        this.formContactoPagosMunicipios = res.data;
      }
    });
  }


  printData(){
    console.log("this.formContacto1.value")
    console.log(this.formContacto1.value)
    console.log("this.formContacto2.value")
    console.log(this.formContacto2.value)
    console.log("this.formContactoFacturacion.value")
    console.log(this.formContactoFacturacion.value)
    console.log("this.formContactoPagos.value")
    console.log(this.formContactoPagos.value)
  }

  hasDefinedProp(obj) {
    let a = Object.keys(obj)
    var hasValue = false;

    a.forEach((key :any) => {

      if(key !== "customers_contact_type_id"){
        /* debugger */
        if (/* obj[key] !== null || */ obj[key] !== "") {
          hasValue =  true
        }
      }
    })

    return hasValue
  }






}
