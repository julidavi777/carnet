import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApuActivitiesFormComponent } from './apu-activities-form/apu-activities-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apu-activities',
  templateUrl: './apu-activities.page.html',
  styleUrls: ['./apu-activities.page.scss'],
})
export class ApuActivitiesPage implements OnInit {

  data: any[] = [
    {
      "id": 1,
    "city": "ARMENIA",
    "project": "Coomeva",
    "capacity": "1.01",
    "description": "Localización y replanteo general (sin comisión de topografia)",
    "unit": "M2",
    "quantity": 106.32,
    "unit_price": "$ 1,834"
    },
    {
      "id": 2,
    "city": "ARMENIA",
    "project": "Coomeva",
    "capacity": "1.02",
    "description": "Desmonte y reinstalacion de puestos de trabajo. incluye superficie de trabajo, patas, retorno, cajonera, divicion en vidrio y canaletas.",
    "unit": "EA",
    "quantity": 6.00,
    "unit_price": "$ 26,943"
    },
    {
      "id": 3,
    "city": "ARMENIA",
    "project": "Coomeva",
    "capacity": "1.03",
    "description": "Desmonte y descableado front de 1 puesto incluye embalaje y traslado al lugar que coomeva indique en el perimetro urbano ",
    "unit": "EA",
    "quantity": 2.00,
    "unit_price": "$ 70,271"
    }
    ];
  loadingIndicator: boolean = true;

  constructor(
    public modalController: ModalController,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.getSupplies();
  }

  getSupplies(): void {

    setTimeout(() => {
      this.loadingIndicator = false;
    }, 500);
   /*  this.suppliesService.getSupplies().subscribe(
      (response: any) => {
        this.data = response;
        this.loadingIndicator = false;
      },
      (error) => {
        console.error('Error fetching supplies:', error);
        this.loadingIndicator = false;
      }
    ); */
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
      
    });
    return await modal.present();
  }

  onCreateApu(id){
    console.log(id)
    this.router.navigate(['/home/apu'], { queryParams: {id}});
  }
}
