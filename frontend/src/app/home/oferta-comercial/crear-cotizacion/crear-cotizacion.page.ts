import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrearCotizacionService } from './crear-cotizacion.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ModalController } from '@ionic/angular';
import { CotizationVersionsPage } from './cotization-versions/cotization-versions.page';

@Component({
  selector: 'app-crear-cotizacion',
  templateUrl: './crear-cotizacion.page.html',
  styleUrls: ['./crear-cotizacion.page.scss'],
})
export class CrearCotizacionPage implements OnInit {

    readonly STORAGE_URL = environment.storageUrl;

    selectedFile: string = '';
    commercial_offer_id :number = 0;
    contization_file: any = null;
    hasCotitzationDataToPatch: boolean = false;
    isNit:boolean = false;
    isEditing: boolean = false;

    cotizationsList: any = [];

    cotizacionForm: any = new FormGroup({
      sede: new FormControl('', [Validators.required]),
      sequential_number: new FormControl('', [Validators.required]),
      identification: new FormControl(''),
      razon_social: new FormControl('',),
      razon_comercial: new FormControl('',),
      name: new FormControl('',),
      surname: new FormControl('',),
      valor_cotizado: new FormControl('', [Validators.required]),
      observaciones: new FormControl('', [Validators.required]),

      cotizacion_file: new FormControl('',),
      cotizacion_file_field: new FormControl('',),


  });


  constructor(
    private crearCotizacionService: CrearCotizacionService,
    private router: Router,
    public modalController: ModalController
  ) { }


  ngOnInit() {

    this.cotizacionForm.controls['sede'].disable();
    this.cotizacionForm.controls['sequential_number'].disable();
    this.cotizacionForm.controls['identification'].disable();
    this.cotizacionForm.controls['razon_comercial'].disable();
    this.cotizacionForm.controls['razon_social'].disable();
    this.cotizacionForm.controls['name'].disable();
    this.cotizacionForm.controls['surname'].disable();

    let dataCommercialOffer = this.crearCotizacionService.dataCommercialOffer;

    if(dataCommercialOffer){
      if(dataCommercialOffer?.commercial_offers_contizations.length > 0){
        this.cotizationsList = dataCommercialOffer?.commercial_offers_contizations;
        this.cotizacionForm.patchValue(dataCommercialOffer?.commercial_offers_contizations[0]);
        this.contization_file = dataCommercialOffer?.commercial_offers_contizations[0]?.cotizacion_file;
        this.hasCotitzationDataToPatch = true;
        
        this.cotizacionForm.controls['valor_cotizado'].disable();
        this.cotizacionForm.controls['observaciones'].disable();
      }
      
      this.commercial_offer_id = dataCommercialOffer.id;

      if(dataCommercialOffer?.customer?.identification_type == 2){
        this.isNit = true;
      }
      console.log("dataaa")
      console.log(dataCommercialOffer)
      this.cotizacionForm.patchValue({
        ...dataCommercialOffer,
        identification: dataCommercialOffer?.customer?.identification,
        razon_comercial: dataCommercialOffer?.customer?.razon_comercial,
        razon_social: dataCommercialOffer?.customer?.razon_social,
        name: dataCommercialOffer?.customer?.name,
        surname: dataCommercialOffer?.customer?.surname,
      })
    }/* else{
      this.router.navigate(['home/oferta-comercial/ofertas']);
    } */
   
  }

  onSubmit(){
    console.log(this.cotizacionForm.value)


    const formData = new FormData();

    formData.append('valor_cotizado',this.cotizacionForm.get('valor_cotizado').value);
    formData.append('observaciones',this.cotizacionForm.get('observaciones').value);
    formData.append('cotizacion_file', this.cotizacionForm.get('cotizacion_file').value);
    formData.append('commercial_offer_id', this.commercial_offer_id.toString());

    this.crearCotizacionService.saveCotizacion(formData).subscribe((res: any) =>{
      alert("Cotizacion registrada")
      
    },
    err => {
      alert("Error al registrar la cotizacion")
    })
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      this.cotizacionForm.patchValue({
        cotizacion_file: file
      });
    }
  }


  watchDocument(){

    if(this.contization_file){

      let result = this.contization_file.server_hash_name.replace("public/", "");
      console.log(result)
  
      window.open(this.STORAGE_URL+result, "_blank");
    }
  }

  editContization(){
    this.isEditing = true;

    this.cotizacionForm.controls['valor_cotizado'].enable();
    this.cotizacionForm.controls['observaciones'].enable();
  }

  cancelEditContization(){
    this.isEditing = false;
    this.cotizacionForm.controls['valor_cotizado'].disable();
    this.cotizacionForm.controls['observaciones'].disable();
  }


  async openModalVersions(){
    
    const modal = await this.modalController.create({
      component: CotizationVersionsPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        data: this.cotizationsList
      }
    });
    modal.onDidDismiss()
    .then((res) => {
      
    });
    return await modal.present();
  }



  
}
