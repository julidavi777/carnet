import { Component, OnInit } from '@angular/core';
import { ApuTransportPriceService } from '../services/apu-transport-price.service';

@Component({
  selector: 'app-apu-transport-price-list',
  templateUrl: './apu-transport-price-list.component.html',
  styleUrls: ['./apu-transport-price-list.component.scss'],
})
export class ApuTransportPriceListComponent implements OnInit {

  rows: any[];
  loadingIndicator: boolean = true;

  constructor(private apuTransportPriceService: ApuTransportPriceService) { }

  ngOnInit() {
    this.loadTransportData();
  }

  loadTransportData() {
    this.apuTransportPriceService.getTransportData().subscribe(data => {
      this.rows = data;
      this.loadingIndicator = false;
    });
  }


}
