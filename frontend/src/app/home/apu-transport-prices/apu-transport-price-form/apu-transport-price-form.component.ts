import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApuTransportPriceService } from '../services/apu-transport-price.service';

@Component({
  selector: 'app-apu-transport-price-form',
  templateUrl: './apu-transport-price-form.component.html',
  styleUrls: ['./apu-transport-price-form.component.scss'],
})
export class ApuTransportPriceFormComponent implements OnInit {

  transportForm: FormGroup;
  isEditMode: boolean = false;
  transportId: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apuTransportPriceService: ApuTransportPriceService
  ) { }

  ngOnInit() {
    this.transportId = this.route.snapshot.params['id'];
    this.isEditMode = !!this.transportId;
    this.createTransportForm();
    if (this.isEditMode) {
      this.loadTransportData();
    }
  }

  createTransportForm() {
    this.transportForm = this.formBuilder.group({
      description: ['', Validators.required],
      unit: ['', Validators.required],
      unit_price_eje_value: ['', Validators.required],
      unit_price_bogota_value: ['', Validators.required],
      unit_price_medellin_value: ['', Validators.required]
    });
  }

  loadTransportData() {
    this.apuTransportPriceService.getTransport(this.transportId).subscribe(data => {
      this.transportForm.patchValue(data);
    });
  }

  saveTransport() {
    if (this.transportForm.valid) {
      if (this.isEditMode) {
        this.apuTransportPriceService.updateTransport(this.transportId, this.transportForm.value).subscribe(() => {
          this.router.navigate(['/']);
        });
      } else {
        this.apuTransportPriceService.createTransport(this.transportForm.value).subscribe(() => {
          this.router.navigate(['/']);
        });
      }
    }
  }
}
