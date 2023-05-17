import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminOportunidadService } from './admin-oportunidad.service';
import { CommercialOffer } from './interfaces/CommercialOffer.interface';

@Component({
  selector: 'app-admin-oportunidad',
  templateUrl: './admin-oportunidad.page.html',
  styleUrls: ['./admin-oportunidad.page.scss'],

})
export class AdminOportunidadPage implements OnInit {


  isBringingDataFromDatabase: boolean = false;
  files = [];
  @ViewChild('myInput') myInputVariable: ElementRef;

  dataCommercialOffer: CommercialOffer | null = null;

  formGroup: any = new FormGroup({
    requirements_determination: new FormControl(''),
    //current_status: new FormControl(''),
    requirements_verification: new FormControl(''),
  });

  isEnabledVerificacionRequisitos: boolean = true;
  showSelectFileVerificacion: boolean = false;

  checked: boolean | undefined;
  determinacionRequisitos = '';
  determinacionRequisitos1 = '';
  documentos: any[] = [];
  archivos = '';
  val = '';
  uploadedFiles: { name: string, size: number, type: string }[] = [];
  selectedFile!: string | Blob;
  
  idOfferManagement: number | null = null;

  constructor(
    private adminOportunidadService: AdminOportunidadService,
    private router: Router
    ) { }
  ngOnInit() {
    this.dataCommercialOffer = this.adminOportunidadService.dataCommercialOffer;
    console.log(this.dataCommercialOffer);


    this.valueChangesSelects();

    if(this.dataCommercialOffer.commercial_offers_management){
      //debugger
      this.idOfferManagement = this.dataCommercialOffer.commercial_offers_management?.id;

      this.isBringingDataFromDatabase = true;
      this.formGroup.controls['requirements_determination'].disable();
      this.formGroup.controls['requirements_verification'].disable();
      if(this.dataCommercialOffer?.commercial_offers_management){
        this.formGroup.patchValue(this.dataCommercialOffer?.commercial_offers_management)
      }
  
      if(this.dataCommercialOffer?.commercial_offers_management?.commercial_offers_management_files){
        this.files = this.dataCommercialOffer?.commercial_offers_management?.commercial_offers_management_files;
      } 
    }

  
/*     if(!this.dataCommercialOffer){
      this.router.navigate(['home/oferta-comercial/ofertas']);
    } */
    
    

   
  }


  actualFileSelected = null;
  countFile = 0;
  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.actualFileSelected = {
      name: file.name,
      size: file.size,
      file: file
    };
    
  }

  addFile(){
    this.countFile = this.countFile+1;
    this.files.push({...this.actualFileSelected, id: this.countFile});
    this.actualFileSelected = null;
    this.myInputVariable.nativeElement.value = "";
    /* this.documentos.push({
      nombre: file.name,
      tamaño: file.size
    });
    console.log(this.documentos); */
    console.log(this.files);
    this.files = [...this.files];
  }




  valueChangesSelects(){
    this.formGroup.get('requirements_determination').valueChanges.subscribe((value) => {
      const NOT = "2";
      if(value == NOT){
        this.isEnabledVerificacionRequisitos = false;
      }
      else{
        this.isEnabledVerificacionRequisitos = true;
      }
    });

    this.formGroup.get('requirements_verification').valueChanges.subscribe((value) => {
      const YES = "1";
      if(value == YES){
        this.showSelectFileVerificacion = true;
      }
      else{
        this.showSelectFileVerificacion = false;
      }
    });
  }

  handleChange(e: { checked: any; }) {
    var isChecked = e.checked;
}


  onSubmit(){
    if(this.isBringingDataFromDatabase){
      let data = this.formGroup.value;
      this.adminOportunidadService.updateCommercialOfferManagement(data, this.idOfferManagement).subscribe(e => {
        alert("Actualizado");
      },e => {
        alert("Error al actualizar");
      });
      return;
    }
    console.log("valores")
    console.log(this.formGroup.value)
    let formData = new FormData();
    formData.append('requirements_determination', this.formGroup.value['requirements_determination']);
    //formData.append('current_status', this.formGroup.value['current_status']);
    formData.append('requirements_verification', this.formGroup.value['requirements_verification']);
    formData.append('commercial_offer_id', this.dataCommercialOffer.id.toString());
    
   
   /*  this.files.forEach((e) => {
      formData.append('arrayFiles', e.file, e.file.name);
    }); */

    this.adminOportunidadService.storeOpportunity(formData).subscribe((e: any) => {
      let files = this.files.map(e => e.file);

      files.forEach(element => {
        const formData = new FormData();
        formData.append('commercial_offers_management_id', e.data.id);
        formData.append('file',element);
        this.adminOportunidadService.saveManagementFile(formData).subscribe(e => {
          console.log(e)
        })
      });

      alert("datos registrados")
    },err => {
      alert("Error");
    });
  }

  deleteFile(id){
    this.files = [...this.files.filter(f => f.id !== id)];
    console.log(id);
  }

}
