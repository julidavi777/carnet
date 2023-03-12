import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { read } from 'fs';
import { CrearClienteService } from './crear-cliente.service';

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
<<<<<<< Updated upstream



=======
  selectedFile: string = '';
>>>>>>> Stashed changes

  customerForm: any = new FormGroup({
    identification_type: new FormControl('', [Validators.required]),
    identification: new FormControl('', [Validators.required]),
    digit_v: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    phone_number: new FormControl(''),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    nombre_contacto_comercial: new FormControl('',),
    commercial_contact_1: new FormControl('', [Validators.required]),
    commercial_contact_2: new FormControl('',),
    commercial_contact_3: new FormControl('',),
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

    private crearClienteService: CrearClienteService
  ) { }

  ngOnInit() {
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
    formData.append('email', this.customerForm.get('address').value);
    formData.append('nombre_contacto_comercial', this.customerForm.get('nombre_contacto_comercial').value);
    formData.append('commercial_contact_1', this.customerForm.get('commercial_contact_1').value);
    formData.append('commercial_contact_2', this.customerForm.get('commercial_contact_2').value);
    formData.append('commercial_contact_3', this.customerForm.get('commercial_contact_3').value);
    formData.append('razon_social', this.customerForm.get('razon_social').value);
    formData.append('razon_comercial', this.customerForm.get('razon_comercial').value);


    formData.append('rut_file', this.customerForm.get('rut_file').value);
    formData.append('camara_commerce_file', this.customerForm.get('camara_commerce_file').value);
    formData.append('income_statement_file', this.customerForm.get('income_statement_file').value);
    formData.append('cliente_logo', this.customerForm.get('cliente_logo').value);

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

  changeSelect(event: any ){
    console.log(event.target.value)
    if(event.target.value === "2"){
      this.expandAllClass = false;
      this.showDigitV = true;
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

    if(name_field ==  "cliente_logo_field"){
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.customerForm.patchValue({
          cliente_logo: file

        });

        // const reader = new FileReader();
        // reader.onload = event => this.photoSelected = reader.result;
        // reader.readAsDataURL(this.photoSelected)
      }
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.result !== null) {
          this.selectedFile = reader.result.toString();
        }
      };
    }
  }



}
