import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-oportunidad',
  templateUrl: './admin-oportunidad.page.html',
  styleUrls: ['./admin-oportunidad.page.scss'],

})
export class AdminOportunidadPage implements OnInit {
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

}
