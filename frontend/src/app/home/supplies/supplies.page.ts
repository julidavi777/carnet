import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SuppliesService } from './supplies.service';
import { SupplyFormComponent } from './supply-form/supply-form.component';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.page.html',
  styleUrls: ['./supplies.page.scss'],
})
export class SuppliesPage implements OnInit {

  data: any[];
  loadingIndicator: boolean = true;

  constructor(
    private suppliesService: SuppliesService,
    public modalController: ModalController) {}

  ngOnInit(): void {
    this.getSupplies();
  }

  getSupplies(): void {
    this.suppliesService.getSupplies().subscribe(
      (response: any) => {
        this.data = response;
        this.loadingIndicator = false;
      },
      (error) => {
        console.error('Error fetching supplies:', error);
        this.loadingIndicator = false;
      }
    );
  }

  async openCreateForm(){
    const modal = await this.modalController.create({
      component: SupplyFormComponent,
      cssClass: 'my-custom-modal-css',
      backdropDismiss: false,
      componentProps: {
      }
    });
    modal.onDidDismiss()
    .then((res) => {
      
    });
    return await modal.present();
  }
}
