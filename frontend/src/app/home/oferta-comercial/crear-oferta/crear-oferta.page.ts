import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-crear-oferta',
  templateUrl: './crear-oferta.page.html',
  styleUrls: ['./crear-oferta.page.scss'],
})
export class CrearOfertaPage implements OnInit {

    offersForm: any = new FormGroup({
    sequential_number: new FormControl('', [Validators.required]),
    process_status: new FormControl('', [Validators.required]),
    responsible: new FormControl('',[Validators.required]),
    assignment_date: new FormControl('', [Validators.required]),
    completed_check_list: new FormControl('', [Validators.required]),
    razon_social: new FormControl(''),
    modalidad: new FormControl('', [Validators.required]),
    object_description: new FormControl('', [Validators.required]),
    cuantia: new FormControl('',[Validators.required]),
    location: new FormControl('',[Validators.required]),
    estado_secop: new FormControl('',),
    release_date: new FormControl('',),
    origin_portal: new FormControl('',),
    observations: new FormControl('',),

    rut_file_field: new FormControl('',),//SOLO REFERENCIA NO ENVIAR
    rut_file: new FormControl('',),

    camara_commerce_file_field: new FormControl('',),//SOLO REFERENCIA NO ENVIAR
    camara_commerce_file: new FormControl('',),

    income_statement_file_field: new FormControl('',),//SOLO REFERENCIA NO ENVIAR
    income_statement_file: new FormControl('',),
  });
  CrearOfertaService: any;

  constructor(
    // private crearClienteService: CrearClienteService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.offersForm.value)

    const formData = new FormData();

    formData.append('sequential_number', this.offersForm.get('sequential_number').value);
    formData.append('process_status', this.offersForm.get('process_status').value);
    formData.append('responsible', this.offersForm.get('responsible').value);
    formData.append('assignment_date', this.offersForm.get('assignment_date').value);
    formData.append('icompleted_check_list', this.offersForm.get('completed_check_list').value);
    formData.append('razon_social', this.offersForm.get('razon_social').value);
    formData.append('modalidad', this.offersForm.get('modalidad').value);
    formData.append('number_code', this.offersForm.get('modalidad').value);
    formData.append('object_description', this.offersForm.get('object_description').value);
    formData.append('cuantia', this.offersForm.get('cuantia').value);
    formData.append('location', this.offersForm.get('location').value);
    formData.append('estado_secop', this.offersForm.get('estado_secop').value);
    formData.append('release_date', this.offersForm.get('release_date').value);
    formData.append('origin_portal', this.offersForm.get('origin_portal').value);
    formData.append('observations', this.offersForm.get('observations').value);

    formData.append('file', this.offersForm.get('rut_file').value);

    this.CrearOfertaService.saveOffer(formData).subscribe((res: any) => {
        console.log(res);
        alert('Uploaded Successfully.');
    });
  }


}
