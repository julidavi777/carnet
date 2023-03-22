import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-oportunidad',
  templateUrl: './admin-oportunidad.page.html',
  styleUrls: ['./admin-oportunidad.page.scss'],

})
export class AdminOportunidadPage implements OnInit {

  formGroup: any = new FormGroup({
    determRequisitos: new FormControl(''),
    estadoActualProceso: new FormControl(''),
    verificacionRequisitos: new FormControl(''),
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

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.documentos.push({
      nombre: file.name,
      tamaño: file.size
    });
  }


  constructor() { }

  ngOnInit() {
    this.valueChangesSelects();

  }

  valueChangesSelects(){
    this.formGroup.get('determRequisitos').valueChanges.subscribe((value) => {
      const NOT = "2";
      if(value == NOT){
        this.isEnabledVerificacionRequisitos = false;
      }
      else{
        this.isEnabledVerificacionRequisitos = true;
      }
    });

    this.formGroup.get('verificacionRequisitos').valueChanges.subscribe((value) => {
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

onUpload() {
  const formData = new FormData();
  formData.append('file', this.selectedFile);


  // this.uploadedFiles.push({
  //   name: this.selectedFile.name,
  //   size: this.selectedFile.size,
  //   type: this.selectedFile.type
  // });
}

  onSubmit(){
    console.log("valores")
    console.log(this.formGroup.value)
  }

}
