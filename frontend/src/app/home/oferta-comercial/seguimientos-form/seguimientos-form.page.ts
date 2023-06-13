import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrearCotizacionService } from '../crear-cotizacion/crear-cotizacion.service';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { SeguimientosFormService } from './seguimientos-form.service';

@Component({
  selector: 'app-seguimientos-form',
  templateUrl: './seguimientos-form.page.html',
  styleUrls: ['./seguimientos-form.page.scss'],
})
export class SeguimientosFormPage implements OnInit {

  commercial_offer_id :number = 0;

  statusOptionsSeguimiento = [];

  probabilities = [];

  rowsSeguimientos = [
    /* {
      status: "app1",
      observaciones: "app2",
      created_at: "created_at",
    } */
  ]

  seguimientosForm = new FormGroup({
    status: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    probability: new FormControl('', [Validators.required]),
  })
  
  constructor(
    private crearCotizacionService: CrearCotizacionService,
    private router: Router,
    public globalService: GlobalService,
    private seguimientosFormService: SeguimientosFormService
  ) { }

  ngOnInit() {
    this.probabilities = this.seguimientosFormService.probabilities;

    let dataCommercialOffer = this.crearCotizacionService.dataCommercialOffer;
    if(dataCommercialOffer){
      this.commercial_offer_id = dataCommercialOffer.id;
    }else{
      this.router.navigate(['home/oferta-comercial/ofertas']);
    }
    this.statusOptionsSeguimiento = this.crearCotizacionService.statusOptionsSeguimiento;

    this.getSeguimientos();
  }

  get status () { return this.seguimientosForm.get('status') }
  get description () { return this.seguimientosForm.get('description') }
  get probability () { return this.seguimientosForm.get('probability') }


  getSeguimientos(){
    this.crearCotizacionService.getCommercialOffersSeguimientos(this.commercial_offer_id).subscribe((res: any) => {
      this.rowsSeguimientos = res.data;
    })
  }

  onSubmitSeguimientosForm(){

    if(!this.seguimientosForm.valid){
      this.seguimientosForm.markAllAsTouched();
      return;
    }

    if(this.seguimientosForm.valid){
      console.log(this.seguimientosForm.value)

      let data = {
        ...this.seguimientosForm.value,
        commercial_offer_id: this.commercial_offer_id
      }

      this.crearCotizacionService.saveCommercialOffersSeguimientos(data).subscribe((res: any) => {
        alert("Seguimiento registrado")
        this.getSeguimientos();
        this.seguimientosForm.reset();
      }, err => {
        alert("Error al registrar el seguimiento")
      });
    }
  }
}
