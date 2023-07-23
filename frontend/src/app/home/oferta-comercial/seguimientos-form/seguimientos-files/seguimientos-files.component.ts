import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-seguimientos-files',
  templateUrl: './seguimientos-files.component.html',
  styleUrls: ['./seguimientos-files.component.scss'],
})
export class SeguimientosFilesComponent implements OnInit {

  @Input() filesToPatch: any[] = [];
  isModalMode: boolean = false;


  files = [];
  
  @ViewChild('fileInput') fileInputRef: ElementRef;
  @Output() newFileEvent = new EventEmitter<Array<any>>();
  
  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
    if(this.filesToPatch.length > 0) {
      this.isModalMode = true;
      this.files = this.filesToPatch;
    }
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

  async addFile(){
    this.countFile = this.countFile+1;
    this.files.push({...this.actualFileSelected, id: this.countFile});
    this.actualFileSelected = null;
    this.fileInputRef.nativeElement.value = "";
    /* this.documentos.push({
      nombre: file.name,
      tamaño: file.size
    });
    console.log(this.documentos); */
    console.log(this.files);
    this.files = [...this.files];

    this.newFileEvent.emit(this.files);

  }

  deleteFile(id){
    this.files = [...this.files.filter(f => f.id !== id)];
    this.newFileEvent.emit(this.files);
    console.log(id);
  }

  

 dismiss() {

  this.modalController.dismiss({
    'dismissed': true,
  });
}

}
