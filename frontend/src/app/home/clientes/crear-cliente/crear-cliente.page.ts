import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrearClienteService } from './crear-cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.page.html',
  styleUrls: ['./crear-cliente.page.scss'],
})
export class CrearClientePage implements OnInit {

  customerForm: any = new FormGroup({
    identification_type: new FormControl('', [Validators.required]),
    identification: new FormControl('', [Validators.required]),
    digit_v: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    phone_number: new FormControl(''),
    address: new FormControl('', [Validators.required]),
    commercial_contact_1: new FormControl('', [Validators.required]),
    commercial_contact_2: new FormControl('',),
    commercial_contact_3: new FormControl('',),
    razon_social: new FormControl('',),
    razon_comercial: new FormControl('',),

    rut_file_field: new FormControl('',),//SOLO REFERENCIA NO ENVIAR
    rut_file: new FormControl('',),

    camara_commerce_file_field: new FormControl('',),//SOLO REFERENCIA NO ENVIAR
    camara_commerce_file: new FormControl('',),

    income_statement_file_field: new FormControl('',),//SOLO REFERENCIA NO ENVIAR
    income_statement_file: new FormControl('',),
  });
  
  constructor(
    private crearClienteService: CrearClienteService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.customerForm.value)

    const formData = new FormData();

    formData.append('identification', this.customerForm.get('identification').value);
    formData.append('digit_v', this.customerForm.get('digit_v').value);
    formData.append('identification_type', this.customerForm.get('identification_type').value);
    
    formData.append('file', this.customerForm.get('rut_file').value);

    /* this.crearClienteService.saveCustomer(formData).subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
    }); */
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
  }

}
