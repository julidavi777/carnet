import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrearCotizacionService } from './crear-cotizacion.service';

@Component({
  selector: 'app-crear-cotizacion',
  templateUrl: './crear-cotizacion.page.html',
  styleUrls: ['./crear-cotizacion.page.scss'],
})
export class CrearCotizacionPage implements OnInit {


    cotizacionForm: any = new FormGroup({
      sede: new FormControl('', [Validators.required]),
      consecutivo: new FormControl('', [Validators.required]),
      identification_type: new FormControl(''),
      razon_social: new FormControl('', [Validators.required]),
      razon_comercial: new FormControl('', [Validators.required]),
      valor_cotizado: new FormControl(''),
      observaciones: new FormControl('', [Validators.required]),


    cotizacion_file_field: new FormControl('',),//SOLO REFERENCIA NO ENVIAR
    cotizacion_file: new FormControl('',),


  });

  constructor(
    private CrearCotizacionService: CrearCotizacionService
  ) { }


  ngOnInit() {
  }

  onSubmit(){
    console.log(this.cotizacionForm.value)


    const formData = new FormData();

    formData.append('sede',this.cotizacionForm.get('sede').value);
    formData.append('consecutivo',this.cotizacionForm.get('consecutivo').value);
    formData.append('identification_type',this.cotizacionForm.get('identification_type').value);
    formData.append('razon_social',this.cotizacionForm.get('razon_social').value);
    formData.append('razon_comercial',this.cotizacionForm.get('razon_comercial').value);
    formData.append('valor_cotizado',this.cotizacionForm.get('valor_cotizado').value);
    formData.append('observaciones',this.cotizacionForm.get('observaciones').value);

    formData.append('file', this.cotizacionForm.get('cotizacion_file').value);

  }

}
