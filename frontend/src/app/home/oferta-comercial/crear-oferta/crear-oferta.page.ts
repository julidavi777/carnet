import { CrearOfertaService } from './crear-oferta.service';
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
    assignment_date: new FormControl('',[Validators.required]),
    razon_comercial: new FormControl('', [Validators.required]),
    responsable: new FormControl('', [Validators.required]),
    contract_type: new FormControl(''),
    service_type: new FormControl('', [Validators.required]),
    sector_productivo: new FormControl('', [Validators.required]),
    object_description: new FormControl('',[Validators.required]),
    numero: new FormControl('',[Validators.required]),
    cuantia: new FormControl('',),
    location: new FormControl('',),
    release_date: new FormControl('',),
    delivery_date: new FormControl('',),
    visit_date: new FormControl('',),
    observations: new FormControl('',),



    anexos_file_field: new FormControl('',),//SOLO REFERENCIA NO ENVIAR
    anexos_file: new FormControl('',),


  });
  CrearOfertaService: any;

  constructor(
    //private CrearOfertaService:CrearOfertaService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.offersForm.value)

    const formData = new FormData();

    formData.append('sequential_number', this.offersForm.get('sequential_number').value);
    formData.append('responsible', this.offersForm.get('responsible').value);
    formData.append('assignment_date', this.offersForm.get('assignment_date').value);
    formData.append('razon_comercial', this.offersForm.get('razon_comercial').value);
    formData.append('responsable', this.offersForm.get('responsable').value);
    formData.append('contract_type', this.offersForm.get('contract_type').value);
    formData.append('service_type', this.offersForm.get('service_type').value);
    formData.append('sector_productivo', this.offersForm.get('sector_productivo').value);
    formData.append('object_description', this.offersForm.get('object_description').value);
    formData.append('numero', this.offersForm.get('numero').value);
    formData.append('cuantia', this.offersForm.get('cuantia').value);
    formData.append('location', this.offersForm.get('location').value);
    formData.append('release_date', this.offersForm.get('release_date').value);
    formData.append('delivery_date', this.offersForm.get('delivery_date').value);
    formData.append('visit_date', this.offersForm.get('visit_date').value);
    formData.append('observations', this.offersForm.get('observations').value);
    formData.append('anexos', this.offersForm.get('anexos').value);

    formData.append('file', this.offersForm.get('anexos').value);

    this.CrearOfertaService.saveOffer(formData).subscribe((res: any) => {
        console.log(res);
        alert('Uploaded Successfully.');
    });
  }


}
