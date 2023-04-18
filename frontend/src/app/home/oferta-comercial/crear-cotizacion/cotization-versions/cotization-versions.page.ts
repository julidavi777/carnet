import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cotization-versions',
  templateUrl: './cotization-versions.page.html',
  styleUrls: ['./cotization-versions.page.scss'],
})
export class CotizationVersionsPage implements OnInit {

  readonly STORAGE_URL = environment.storageUrl;

  @Input() data: any[];
  rows = [
    {
      value: 123
    }
  ]
  loadingIndicator: boolean = false;
  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(this.data)
    this.rows = this.data;
  }

  watchDocument(contization_file){

    if(contization_file){

      let result = contization_file.server_hash_name.replace("public/", "");
      console.log(result)
  
      window.open(this.STORAGE_URL+result, "_blank");
    }
  }

  dismiss() {

    this.modalController.dismiss({
      'dismissed': true,
    });
  }

}
