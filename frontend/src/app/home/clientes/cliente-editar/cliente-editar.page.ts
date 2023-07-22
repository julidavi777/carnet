import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteEditarService } from './cliente-editar.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/app/services/common.service';
import { FormContactoComponent } from '../components/form-contacto/form-contacto.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.page.html',
  styleUrls: ['./cliente-editar.page.scss'],
})
export class ClienteEditarPage implements OnInit {

  STORAGE_URL = environment.storageUrl;
  client_logo: string | null = null;
  id_customer: number | null = null;

  registeredSuccessfully:boolean = false;
  
  expandAllClass: boolean = true;
  showDigitV: boolean = false;
  
  departamentos = [];
  municipios = [];
  formContacto1Municipios = [];
  formContacto2Municipios = [];
  formContactoFacturacionMunicipios = [];
  formContactoPagosMunicipios = [];

  selectedFile: string = '';

  formContacto1: any = new FormGroup({
    name: new FormControl(''),
   phone_number: new FormControl(''),
   telephone_number: new FormControl(''),
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
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    phone_number: new FormControl(''),
    address: new FormControl('', [Validators.required]),
    departamento: new FormControl('', [Validators.required]),
    municipio: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
   /*  nombre_contacto_comercial: new FormControl('',),
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

  constructor(

    private clienteEditarService: ClienteEditarService,
    private router: Router,
    private commonService: CommonService,
    public modalController: ModalController
  ) { }

  async ngOnInit() {

    this.customerForm.controls['municipio'].disable();

    this.formContacto1.controls['municipio_id'].disable();
    this.formContacto2.controls['municipio_id'].disable();
    this.formContactoFacturacion.controls['municipio_id'].disable();
    this.formContactoPagos.controls['municipio_id'].disable();

    let dataCliente = this.clienteEditarService.getDataCliente();
    if (!dataCliente) {
      this.router.navigate(['home/clientes/clientes-list']);
      return;
    }
    //SET ID
    this.id_customer = dataCliente.id;

    //console.log(dataCliente)
    if(dataCliente.cliente_logo){
      let clienteL = dataCliente.cliente_logo.server_hash_name.replace("public", "");
      this.client_logo =  this.STORAGE_URL + clienteL;
    }

    let departamentos: any = await this.commonService.getDepartamentos().toPromise();
    let municipios: any = await this.commonService.getDepartamentosMunicipios(dataCliente.departamento_id).toPromise();
    
    //PATCH DATA
    let patchData = {
      ...dataCliente,
      departamento: departamentos.data.filter(d => d.id === dataCliente.departamento_id)[0],
      municipio: municipios.data.filter(m => m.id === dataCliente.municipio_id)[0],
    }
    if(dataCliente?.municipio_id){
      this.customerForm.controls['municipio'].enable();
    }

    this.customerForm.patchValue(patchData)

    if(dataCliente?.customers_contacts){
      if(dataCliente?.customers_contacts.length > 0){
        await this.patchValuesModals(dataCliente, departamentos)
      }
    }


    //NULL FOR cliente_logo
    this.customerForm.patchValue({
      rut_file: null,
      camara_commerce_file: null,
      income_statement_file: null,
      cliente_logo: null
    })

    

    this.getDepartamentos();
   
  }

  getDepartamentos(){
    this.commonService.getDepartamentos().subscribe((res:any) => {
      this.departamentos = res.data;
    })
  }

  onSubmit(){
    
  
    this.registeredSuccessfully = false;



    const formData = new FormData();

    formData.append('identification', this.customerForm.get('identification').value);
    formData.append('digit_v', this.customerForm.get('digit_v').value ? this.customerForm.get('digit_v').value : '');
    formData.append('identification_type', this.customerForm.get('identification_type').value);
    formData.append('name', this.customerForm.get('name').value);
    formData.append('surname', this.customerForm.get('surname').value);
    formData.append('phone_number', this.customerForm.get('phone_number').value);
    formData.append('address', this.customerForm.get('address').value);
    formData.append('municipio_id', this.customerForm.get('municipio').value?.id);
    formData.append('departamento_id', this.customerForm.get('departamento').value?.id);
    formData.append('email', this.customerForm.get('email').value);
    /* formData.append('nombre_contacto_comercial', this.customerForm.get('nombre_contacto_comercial').value);
    formData.append('commercial_contact_1', this.customerForm.get('commercial_contact_1').value);
    formData.append('commercial_contact_2', this.customerForm.get('commercial_contact_2').value);
    formData.append('commercial_contact_3', this.customerForm.get('commercial_contact_3').value); */
    formData.append('razon_social', this.customerForm.get('razon_social').value);
    formData.append('razon_comercial', this.customerForm.get('razon_comercial').value);


    formData.append('rut_file', this.customerForm.get('rut_file').value ? this.customerForm.get('rut_file').value : '');
    formData.append('camara_commerce_file', this.customerForm.get('camara_commerce_file').value ? this.customerForm.get('camara_commerce_file').value : '' );
    formData.append('income_statement_file', this.customerForm.get('income_statement_file').value ? this.customerForm.get('income_statement_file').value : '');
    formData.append('cliente_logo', this.customerForm.get('cliente_logo').value ? this.customerForm.get('cliente_logo').value : '');

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


    this.clienteEditarService.editCustomer(formData, this.id_customer).subscribe((res: any) => {
        //alert('Uploaded Successfully.');
        this.registeredSuccessfully = true;
        setTimeout(() => {
          this.registeredSuccessfully = false;
          this.formContacto1.reset();
          this.formContacto2.reset();
          this.formContactoFacturacion.reset();
          this.formContactoPagos.reset();
          this.customerForm.reset();
          this.router.navigate(['home/clientes/clientes-list']);
        }, 2000);

    }, (err: any) => {

      alert('error al registrar.');
    }
    );
  }

  async patchValuesModals(dataCliente, departamentos){
    console.log(dataCliente?.customers_contacts);
    //formContacto1
    let contact1 = dataCliente?.customers_contacts.find(e => e.customers_contact_type_id == 1);
    if(contact1){
      let municipios: any = await this.commonService.getDepartamentosMunicipios(contact1.departamento_id).toPromise();
      let patchData = {
        ...contact1,
        departamento_id: departamentos.data.filter(d => d.id === contact1.departamento_id)[0],
        municipio_id: municipios.data.filter(m => m.id === contact1.municipio_id)[0],
      }
      this.formContacto1.patchValue(patchData)
      if(contact1.municipio_id){
        
        this.formContacto1.controls['municipio_id'].enable();
      }
    }
    //formContacto2
    let contact2 = dataCliente?.customers_contacts.find(e => e.customers_contact_type_id == 2);
    if(contact2){
      let municipios: any = await this.commonService.getDepartamentosMunicipios(contact2.departamento_id).toPromise();
      let patchData = {
        ...contact2,
        departamento_id: departamentos.data.filter(d => d.id === contact2.departamento_id)[0],
        municipio_id: municipios.data.filter(m => m.id === contact2.municipio_id)[0],
      }
      this.formContacto2.patchValue(patchData)
      if(contact2.municipio_id){
        
        this.formContacto2.controls['municipio_id'].enable();
      }

    }
    //formContactoFacturacion
    let formContactoFacturacionData = dataCliente?.customers_contacts.find(e => e.customers_contact_type_id == 3);
    if(formContactoFacturacionData){
      let municipios: any = await this.commonService.getDepartamentosMunicipios(formContactoFacturacionData.departamento_id).toPromise();
      let patchData = {
        ...formContactoFacturacionData,
        departamento_id: departamentos.data.filter(d => d.id === formContactoFacturacionData.departamento_id)[0],
        municipio_id: municipios.data.filter(m => m.id === formContactoFacturacionData.municipio_id)[0],
      }

      this.formContactoFacturacion.patchValue(patchData)
      if(formContactoFacturacionData.municipio_id){
        
        this.formContactoFacturacion.controls['municipio_id'].enable();
      }

    }
    //formContactoFacturacion
    let formContactoPagosData = dataCliente?.customers_contacts.find(e => e.customers_contact_type_id == 4);
    if(formContactoPagosData){

      let municipios: any = await this.commonService.getDepartamentosMunicipios(formContactoPagosData.departamento_id).toPromise();
      
      let patchData = {
        ...formContactoPagosData,
        departamento_id: departamentos.data.filter(d => d.id === formContactoPagosData.departamento_id)[0],
        municipio_id: municipios.data.filter(m => m.id === formContactoPagosData.municipio_id)[0],
      }
      this.formContactoPagos.patchValue(patchData)
      if(formContactoPagosData.municipio_id){
        this.formContactoPagos.controls['municipio_id'].enable();
      }

    }
  }

  changeSelect(event: any){
    console.log(event.target.value)
    if(event.target.value === "2"){
      this.expandAllClass = false;
      this.showDigitV = true;
    }else{
      this.expandAllClass = true;
      this.showDigitV = false;
    }
  }

  onFileChange(event: any, name_field: string){
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

  departamentoChange(event, id_modal: number = 0) {
    let municipio_id = event.value.id;

     if(id_modal === 0) {   
      this.customerForm.controls['municipio'].reset()
      this.customerForm.controls['municipio'].disable();
    }
    /*
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
    } */
    
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

  async openContactModal(contact_type_id){
    var patchData = null;
    if(contact_type_id == 1){
      if(this.hasDefinedProp(this.formContacto1.value)){
        patchData = this.formContacto1.value;
      }
    }
    if(contact_type_id == 2){
      if(this.hasDefinedProp(this.formContacto2.value)){
        patchData = this.formContacto2.value;
      }
    }
    if(contact_type_id == 3){
      if(this.hasDefinedProp(this.formContactoFacturacion.value)){
        patchData = this.formContactoFacturacion.value;
      }
    }
    if(contact_type_id == 4){
      if(this.hasDefinedProp(this.formContactoPagos.value)){
        patchData = this.formContactoPagos.value;
      }
    }
    const modal = await this.modalController.create({
      component: FormContactoComponent,
      cssClass: 'my-custom-modal-css',
      backdropDismiss: false,
      componentProps: {
        contact_type_id,
        departamentos_param: this.departamentos,
        patchData
      }
    });
    modal.onDidDismiss()
    .then((res) => {
      if(res['data']['formValue']) {
        if(contact_type_id == 1 && this.hasDefinedProp(res['data']['formValue'])){
          this.formContacto1.patchValue(res['data']['formValue'])
        }
        if(contact_type_id == 2 && this.hasDefinedProp(res['data']['formValue'])){
          this.formContacto2.patchValue(res['data']['formValue'])
        }
        if(contact_type_id == 3 && this.hasDefinedProp(res['data']['formValue'])){
          this.formContactoFacturacion.patchValue(res['data']['formValue'])
        }
        if(contact_type_id == 4 && this.hasDefinedProp(res['data']['formValue'])){
          this.formContactoPagos.patchValue(res['data']['formValue'])
        }
      }
    });
    return await modal.present();
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
