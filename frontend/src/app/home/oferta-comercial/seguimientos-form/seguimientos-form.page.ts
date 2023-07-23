import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrearCotizacionService } from '../crear-cotizacion/crear-cotizacion.service';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { SeguimientosFormService } from './seguimientos-form.service';
import { ModalController } from '@ionic/angular';
import { SeguimientosFilesComponent } from './seguimientos-files/seguimientos-files.component';

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

  isBringingDataFromDatabase: boolean = false;
  showSelectFileVerificacion: boolean = false;
  files = [];

  constructor(
    private crearCotizacionService: CrearCotizacionService,
    private router: Router,
    public globalService: GlobalService,
    private seguimientosFormService: SeguimientosFormService,
    public modalController: ModalController
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

    this.seguimientosForm.get('status').valueChanges.subscribe((value: any) => {
      console.log('name has changed:', value)
      if(value == 2){
        this.showSelectFileVerificacion = true;
      }else{
        this.showSelectFileVerificacion = false;
      }
    });
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

      if(this.showSelectFileVerificacion && this.files.length == 0){
        alert("por favor seleccionar al menos un archivo")
        return;
      }

      const formData = new FormData();

      let files_length: any = this.files.length;
      formData.append('files_length', files_length );

      if(files_length > 0){
        this.files.forEach((file, index) => {
          formData.append('file_'+index, file.file);
        })
      }

      formData.append('status', this.seguimientosForm.value.status );
      formData.append('description', this.seguimientosForm.value.description );
      formData.append('probability', this.seguimientosForm.value.probability );
      formData.append('commercial_offer_id', this.commercial_offer_id.toString() );


      let data = {
        ...this.seguimientosForm.value,
        commercial_offer_id: this.commercial_offer_id,
        files: this.showSelectFileVerificacion ? this.files : []
      }

      console.log(data)


      this.crearCotizacionService.saveCommercialOffersSeguimientos(formData).subscribe((res: any) => {
        alert("Seguimiento registrado")
        this.getSeguimientos();
        this.seguimientosForm.reset();
      }, err => {
        alert("Error al registrar el seguimiento")
      });
    }
  }

  newFileEventChild($event){
    console.log($event)
    this.files = $event;
  }


  async  showFilesOnModal(seguimiento){
    console.log(seguimiento);

    if(seguimiento?.commercial_offers_seguimiento_files.length == 0){
      alert("este seguimiento no tiene archivos registrados")
      return;
    }

    const modal = await this.modalController.create({
      component: SeguimientosFilesComponent,
      cssClass: 'my-custom-modal-css',
      backdropDismiss: false,
      componentProps: {
        filesToPatch: seguimiento?.commercial_offers_seguimiento_files
      }
    });
    return await modal.present();

  }

 

}
