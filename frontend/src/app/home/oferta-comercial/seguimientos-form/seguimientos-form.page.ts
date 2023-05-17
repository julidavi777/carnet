import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrearCotizacionService } from '../crear-cotizacion/crear-cotizacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seguimientos-form',
  templateUrl: './seguimientos-form.page.html',
  styleUrls: ['./seguimientos-form.page.scss'],
})
export class SeguimientosFormPage implements OnInit {

  commercial_offer_id :number = 0;

  statusOptionsSeguimiento = [];

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
  })
  
  constructor(
    private crearCotizacionService: CrearCotizacionService,
    private router: Router,
  ) { }

  ngOnInit() {

    let dataCommercialOffer = this.crearCotizacionService.dataCommercialOffer;
    if(dataCommercialOffer){
      this.commercial_offer_id = dataCommercialOffer.id;
    }else{
      this.router.navigate(['home/oferta-comercial/ofertas']);
    }
    this.statusOptionsSeguimiento = this.crearCotizacionService.statusOptionsSeguimiento;

    this.getSeguimientos();
  }


  getSeguimientos(){
    this.crearCotizacionService.getCommercialOffersSeguimientos(this.commercial_offer_id).subscribe((res: any) => {
      this.rowsSeguimientos = res.data;
    })
  }

  onSubmitSeguimientosForm(){
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
