import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApuActivitiesFormComponent } from './apu-activities-form/apu-activities-form.component';
import { Router } from '@angular/router';
import { ApuActivitiesService } from './apu-activities.service';

@Component({
  selector: 'app-apu-activities',
  templateUrl: './apu-activities.page.html',
  styleUrls: ['./apu-activities.page.scss'],
})
export class ApuActivitiesPage implements OnInit {

  data: any[] = [];

  loadingIndicator: boolean = true;
  

  constructor(
    public modalController: ModalController,
    private router: Router,
    private apuActivitiesService: ApuActivitiesService
    ) {}

  ngOnInit(): void {
    this.getApuActivities();
    
  }

  getApuActivities(): void {

    
    this.apuActivitiesService.getApuActivities().subscribe(
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
      component: ApuActivitiesFormComponent,
      cssClass: 'my-custom-modal-css',
      backdropDismiss: false,
      componentProps: {
      }
    });
    modal.onDidDismiss()
    .then((res) => {
      this.ngOnInit();
    });
    return await modal.present();
  }

  onCreateApu(id){
    console.log(id)
    this.router.navigate(['/home/apu'], { queryParams: {id}});
  }
}
