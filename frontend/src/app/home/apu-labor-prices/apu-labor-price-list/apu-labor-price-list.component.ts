import { Component, OnInit } from '@angular/core';
import { ApuLaborPriceService } from '../services/apu-labor-price.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apu-labor-price-list',
  templateUrl: './apu-labor-price-list.component.html',
  styleUrls: ['./apu-labor-price-list.component.scss'],
})
export class ApuLaborPriceListComponent implements OnInit {

  loadingIndicator = true;
  laborPrices: any[] = [];

  constructor(
    private apuLaborPriceService: ApuLaborPriceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchLaborPrices();
  }

  fetchLaborPrices() {
    this.apuLaborPriceService.getLaborPrices()
      .subscribe(
        laborPrices => {
          this.laborPrices = laborPrices;
          this.loadingIndicator = false;
        },
        error => {
          console.error('Error fetching labor prices:', error);
          this.loadingIndicator = false;
        }
      );
  }

  editLaborPrice(id: number) {
    this.router.navigate(['/home/apu-labor-prices/edit', id]);
  }

  deleteLaborPrice(id: number) {
    this.apuLaborPriceService.deleteLaborPrice(id)
      .subscribe(
        () => {
          this.fetchLaborPrices();
        },
        error => {
          console.error('Error deleting labor price:', error);
        }
      );
  }
}
