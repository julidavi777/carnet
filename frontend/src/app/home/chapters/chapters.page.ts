import { ChapterFormComponent } from './chapter-form/chapter-form.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChaptersService } from './chapters.service';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.page.html',
  styleUrls: ['./chapters.page.scss'],
})
export class ChaptersPage implements OnInit {

  rows: any[] = [];
  
  loadingIndicator: boolean = true;

  constructor(
    private chaptersService: ChaptersService,
    public modalController: ModalController) { }

  ngOnInit(): void {
    this.getChapters();
  }

  getChapters(): void {
    this.chaptersService.getChapters().subscribe(
      (data: any[]) => {
        this.rows = data;
        this.loadingIndicator = false;
      },
      (error) => {
        console.log('Error occurred while fetching chapters:', error);
        this.loadingIndicator = false;
      }
    );
  }

  async openCreateForm(){
    const modal = await this.modalController.create({
      component: ChapterFormComponent,
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

}
