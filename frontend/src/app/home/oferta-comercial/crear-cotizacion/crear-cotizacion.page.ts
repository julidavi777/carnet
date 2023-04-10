import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrearCotizacionService } from './crear-cotizacion.service';

@Component({
  selector: 'app-crear-cotizacion',
  templateUrl: './crear-cotizacion.page.html',
  styleUrls: ['./crear-cotizacion.page.scss'],
})
export class CrearCotizacionPage implements OnInit {


    selectedFile: string = '';

    cotizacionForm: any = new FormGroup({
      sede: new FormControl('', [Validators.required]),
      sequential_number: new FormControl('', [Validators.required]),
      identification: new FormControl(''),
      razon_social: new FormControl('', [Validators.required]),
      razon_comercial: new FormControl('', [Validators.required]),
      valor_cotizado: new FormControl(''),
      observaciones: new FormControl('', [Validators.required]),

      cotizacion_file: new FormControl('',),
      cotizacion_file_field: new FormControl('',),


  });

  constructor(
    private crearCotizacionService: CrearCotizacionService
  ) { }


  ngOnInit() {
    this.cotizacionForm.controls['sede'].disable();
    this.cotizacionForm.controls['sequential_number'].disable();
    this.cotizacionForm.controls['identification'].disable();
    this.cotizacionForm.controls['razon_comercial'].disable();
    this.cotizacionForm.controls['razon_social'].disable();
    //let dataCommercialOffer = this.crearCotizacionService.dataCommercialOffer;
    let dataCommercialOffer = {
      "id": 3,
      "sequential_number": "003-2023",
      "contract_type": "4",
      "contract_type_other": "111",
      "service_type": "5",
      "service_type_other": "222",
      "sector_productivo": "12",
      "sector_productivo_other": "333",
      "object_description": "123",
      "numero": "12",
      "cuantia": 321,
      "location": "123",
      "release_date": "2023-04-21 00:04:00",
      "delivery_date": "2023-04-03 00:04:00",
      "observations": "asdf",
      "anexos": null,
      "created_at": "2023-04-03 15:04:53",
      "updated_at": "2023-04-04T22:03:36.000000Z",
      "sede": "2",
      "responsable_operativo_id": 4,
      "assignment_date": "2023-04-03 10:04:53",
      "customer": {
          "id": 9,
          "identification_type": 3,
          "identification": "1111111111",
          "digit_v": null,
          "name": "123",
          "surname": "123",
          "phone_number": "123",
          "address": "12312",
          "email": "fda@gmail.com",
          "razon_social": "12",
          "razon_comercial": "123",
          "rut_file": null,
          "camara_commerce_file": null,
          "income_statement_file": null,
          "cliente_logo": null,
          "status": true,
          "created_at": "2023-04-02T02:35:55.000000Z",
          "updated_at": "2023-04-02T02:35:55.000000Z",
          "departamento_id": null,
          "municipio_id": null
      },
      "responsable_rel": {
          "id": 5,
          "name": "Dr. Christop Will",
          "surname": "Ratke",
          "email": "justine.thiel@example.com",
          "created_at": "2023-03-22T01:45:50.000000Z",
          "updated_at": "2023-03-22T01:45:50.000000Z"
      },
      "comercial_offer_visit": {
          "id": 3,
          "visit_date": "2023-04-05 00:04:00",
          "visit_place": "123",
          "person_attending": "123",
          "phone_number_person_attending": "123",
          "commercial_offer_id": 3,
          "created_at": "2023-04-03T15:31:37.000000Z",
          "updated_at": "2023-04-04T22:03:36.000000Z"
      },
      "commercial_offers_management": null
  };
    if(dataCommercialOffer){
      console.log("dataaa")
      console.log(dataCommercialOffer)
      this.cotizacionForm.patchValue({
        ...dataCommercialOffer,
        identification: dataCommercialOffer?.customer?.identification,
        razon_comercial: dataCommercialOffer?.customer?.razon_comercial,
        razon_social: dataCommercialOffer?.customer?.razon_social,
      })
    }
  }

  onSubmit(){
    console.log(this.cotizacionForm.value)


    const formData = new FormData();

    formData.append('valor_cotizado',this.cotizacionForm.get('valor_cotizado').value);
    formData.append('observaciones',this.cotizacionForm.get('observaciones').value);
    formData.append('cotizacion_file', this.cotizacionForm.get('cotizacion_file').value);

    this.crearCotizacionService.saveCotizacion(formData).subscribe(console.log)
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      this.cotizacionForm.patchValue({
        cotizacion_file: file
      });
    }
  }

}
