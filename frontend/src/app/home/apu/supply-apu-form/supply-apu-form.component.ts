import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApuService } from '../apu.service';
import { ApuToolService } from '../../apu-tools/services/apu-tools.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApuMaterialService } from '../../apu-materials/services/apu-material.service';
import { ApuLaborPriceService } from '../../apu-labor-prices/services/apu-labor-price.service';
import { ApuTransportPriceService } from '../../apu-transport-prices/services/apu-transport-price.service';

@Component({
  selector: 'app-supply-apu-form',
  templateUrl: './supply-apu-form.component.html',
  styleUrls: ['./supply-apu-form.component.scss'],
})
export class SupplyApuFormComponent implements OnInit {
  @Input() internalChapterChoosed: any;

  chapters = [];
  supplies = [];
  items = [];
  formGroup: FormGroup;

  constructor(
    public modalController: ModalController,
    private formBuilder: FormBuilder,
    private ApuService: ApuService,
    private apuToolService: ApuToolService,
    private apuMaterialService: ApuMaterialService,
    private apuLaborPriceService: ApuLaborPriceService,
    private apuTransportPriceService: ApuTransportPriceService,
  ) { }

  ngOnInit() {
    if(this.internalChapterChoosed.id == 1){
      this.getTools();
    }
    if(this.internalChapterChoosed.id == 2){
      this.getMaterials();
    }
    if(this.internalChapterChoosed.id == 3){
      this.getTransportData()
    }
    if(this.internalChapterChoosed.id == 4){
      this.getLaborPrices()
    }


    console.log(this.internalChapterChoosed)
    /* this.supplies = this.ApuService.supplies;
    this.chapters = this.ApuService.chapters; */
    this.createForm();

  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      description: ['', Validators.required],
      unit: ['', Validators.required],
      performance_value: ['', Validators.required],
      unit_value: ['', Validators.required],
    });
  }

  getTools(){
    this.apuToolService.getApuTools().subscribe((tools) => {
      this.items = tools;
    });
  }

  getMaterials(){
    this.apuMaterialService.getAll().subscribe((materials) => {
      this.items = materials;
    });
  }

  getLaborPrices(){
    this.apuLaborPriceService.getLaborPrices().subscribe((lprices) => {
      this.items = lprices;
    });
  }

  getTransportData(){
    this.apuTransportPriceService.getTransportData().subscribe((tprices) => {
      this.items = tprices;
    });
  }

  dismiss() {
    let res = null;
    if(this.formGroup.valid){
      res = {
        item_data: {
          ...this.formGroup.value,
          manager: this.internalChapterChoosed.name,
          name: this.formGroup.value.description,
          internal_chapter_id: this.internalChapterChoosed.id,
          treeStatus: "disabled"
        },

      }
    }
    this.modalController.dismiss({
      'dismissed': true,
      "data": res
    });
  }

  

  onAddItem(){
    console.log(this.formGroup.value)
    this.dismiss()
  }

  onChangeItem(event){
    console.log(event)

    let item_found = this.items.find(item => item.id === event.value.id);
    if(item_found){
      this.formGroup.patchValue(item_found)
    }
  }

}
