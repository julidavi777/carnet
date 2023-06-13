import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrearCotizacionService } from './crear-cotizacion.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ModalController } from '@ionic/angular';
import { CotizationVersionsPage } from './cotization-versions/cotization-versions.page';
import { GlobalService } from 'src/app/services/global.service';


@Component({
  selector: 'app-crear-cotizacion',
  templateUrl: './crear-cotizacion.page.html',
  styleUrls: ['./crear-cotizacion.page.scss'],
})
export class CrearCotizacionPage implements OnInit {

    readonly STORAGE_URL = environment.storageUrl;


    @Input() isCreating: boolean = false;
    @Input() parentFormGroup;
    
    items: any[] = [];

    selectedFile: string = '';
    commercial_offer_id :number = 0;
    contization_file: any = null;
    hasCotitzationDataToPatch: boolean = false;
    isNit:boolean = false;
    isEditing: boolean = false;

    cotizationsList: any = [];
    subtotal: number;
    admin: number;
    imprevisto: number;
    utilidad: number;
    iva: number;
    total: number;

    cotizacionForm: any = new FormGroup({
      sede: new FormControl(''),
      sequential_number: new FormControl(''),
      identification: new FormControl(''),
      razon_social: new FormControl('',),
      razon_comercial: new FormControl('',),
      name: new FormControl('',),
      surname: new FormControl('',),
      valor_cotizado: new FormControl('', [Validators.required]),
      observaciones: new FormControl('', [Validators.required]),

      cotizacion_file: new FormControl('',[Validators.required]),
      cotizacion_file_field: new FormControl('',[Validators.required]),






  });


  constructor(
    private crearCotizacionService: CrearCotizacionService,
    private router: Router,
    public modalController: ModalController,
    public globalService: GlobalService,
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

    if(dataCommercialOffer && !this.isCreating){
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
    if(this.isCreating){
      this.addChildFormGroup();
    }
   
  }

  addChildFormGroup(): void {

    this.parentFormGroup.addControl('cotizacionForm', this.cotizacionForm);
  }

  get valor_cotizado(): FormControl {
    return this.cotizacionForm.get('valor_cotizado') as FormControl;
  }

  get observaciones(): FormControl {
    return this.cotizacionForm.get('observaciones') as FormControl;
  }
  get cotizacion_file_field(): FormControl {
    return this.cotizacionForm.get('cotizacion_file_field') as FormControl;
  }

  async onSubmit(){

    if(this.isCreating){

        let data = {
            ...this.cotizacionForm.value,
            cotizacion_file: this.cotizacionForm.get('cotizacion_file').value 
         }

        delete data.cotizacion_file_field;

        console.log(data)

        return;
    }

    console.log(this.cotizacionForm.value)


    const formData = new FormData();

    formData.append('valor_cotizado',this.cotizacionForm.get('valor_cotizado').value);
    formData.append('observaciones',this.cotizacionForm.get('observaciones').value);
    formData.append('cotizacion_file', this.cotizacionForm.get('cotizacion_file').value);
    formData.append('commercial_offer_id', this.commercial_offer_id.toString());

    this.crearCotizacionService.saveCotizacion(formData).subscribe((res: any) =>{
      alert("Cotizacion registrada")
      this.router.navigate(['home/oferta-comercial/ofertas'])
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



  calcularTotal() {
    this.total = this.subtotal + this.admin + this.imprevisto + this.utilidad + (this.subtotal * this.iva / 100);
  }

  getBase64(file) {

    return new Promise<any>((resolve, reject) => {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        //console.log(reader.result);
        resolve(reader.result)

      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
        reject('Error: '+ error)
      };
    })
 }


}
