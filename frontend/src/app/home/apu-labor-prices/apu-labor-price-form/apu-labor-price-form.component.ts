import { Component, OnInit } from '@angular/core';
import { ApuLaborPriceService } from '../services/apu-labor-price.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apu-labor-price-form',
  templateUrl: './apu-labor-price-form.component.html',
  styleUrls: ['./apu-labor-price-form.component.scss'],
})
export class ApuLaborPriceFormComponent implements OnInit {

  laborPriceForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apuLaborPriceService: ApuLaborPriceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.createLaborPriceForm();
    const laborPriceId = this.route.snapshot.params['id'];
    if (laborPriceId) {
      this.fetchLaborPrice(laborPriceId);
    }
  }

  createLaborPriceForm() {
    this.laborPriceForm = this.formBuilder.group({
      description: ['', Validators.required],
      unit: ['', Validators.required],
      unit_price_eje_value: ['', Validators.required],
      unit_price_bogota_value: ['', Validators.required],
      unit_price_medellin_value: ['', Validators.required]
    });
  }

  fetchLaborPrice(id: number) {
    this.apuLaborPriceService.getLaborPrice(id)
      .subscribe(
        laborPrice => {
          this.laborPriceForm.patchValue(laborPrice);
        },
        error => {
          console.error('Error fetching labor price:', error);
        }
      );
  }

  saveLaborPrice() {
    if (this.laborPriceForm.valid) {
      const laborPriceId = this.route.snapshot.params['id'];
      const laborPriceData = this.laborPriceForm.value;

      if (laborPriceId) {
        this.apuLaborPriceService.updateLaborPrice(laborPriceId, laborPriceData)
          .subscribe(
            () => {
              this.router.navigate(['/apu-labor-prices']);
            },
            error => {
              console.error('Error updating labor price:', error);
            }
          );
      } else {
        this.apuLaborPriceService.createLaborPrice(laborPriceData)
          .subscribe(
            () => {
              this.router.navigate(['/apu-labor-prices']);
            },
            error => {
              console.error('Error creating labor price:', error);
            }
          );
      }
    }
  }
}
