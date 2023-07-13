import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApuService } from '../apu.service';

@Component({
  selector: 'app-supply-apu-form',
  templateUrl: './supply-apu-form.component.html',
  styleUrls: ['./supply-apu-form.component.scss'],
})
export class SupplyApuFormComponent implements OnInit {
  chapters = [];
  supplies = [];
  constructor(
    public modalController: ModalController,
    private ApuService: ApuService
  ) { }

  ngOnInit() {
    /* this.supplies = this.ApuService.supplies;
    this.chapters = this.ApuService.chapters; */

  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true,
    });
  }

}
