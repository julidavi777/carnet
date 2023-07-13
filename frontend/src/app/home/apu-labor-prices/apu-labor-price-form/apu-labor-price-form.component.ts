import { Component, OnInit } from '@angular/core';
import { ApuLaborPriceService } from '../services/apu-labor-price.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-apu-labor-price-form',
  templateUrl: './apu-labor-price-form.component.html',
  styleUrls: ['./apu-labor-price-form.component.scss'],
})
export class ApuLaborPriceFormComponent implements OnInit {

  laborPriceForm: FormGroup;
  chapters: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private apuLaborPriceService: ApuLaborPriceService,
    private router: Router,
    private route: ActivatedRoute,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.createLaborPriceForm();
    const laborPriceId = this.route.snapshot.params['id'];
    if (laborPriceId) {
      this.fetchLaborPrice(laborPriceId);
    }

    this.getChapters();
  }

  createLaborPriceForm() {
    this.laborPriceForm = this.formBuilder.group({
      description: ['', Validators.required],
      unit: ['', Validators.required],
      unit_price_eje_value: ['',],
      unit_price_bogota_value: ['',],
      unit_price_medellin_value: ['',],
      chapter_id: ['', Validators.required]
    });
  }

  getChapters(){
    this.commonService.getChapters().subscribe((chapters:any) => {
      this.chapters = chapters
    })  
  }

  fetchLaborPrice(id: number) {
    this.apuLaborPriceService.getLaborPrice(id)
      .subscribe(
        laborPrice => {
          this.laborPriceForm.patchValue({
            ...laborPrice,
            chapter_id: laborPrice.chapter
          });
        },
        error => {
          console.error('Error fetching labor price:', error);
        }
      );
  }

  saveLaborPrice() {
    if (this.laborPriceForm.valid) {
      const laborPriceId = this.route.snapshot.params['id'];
      const laborPriceData = {
        ...this.laborPriceForm.value,
        chapter_id: this.laborPriceForm.value.chapter_id.id,
      
      };

      if (laborPriceId) {
        this.apuLaborPriceService.updateLaborPrice(laborPriceId, laborPriceData)
          .subscribe(
            () => {
              alert("Registrado exitosamente")
              this.router.navigate(['/home/apu-labor-prices']);
            },
            error => {
              alert("Error")
              console.error('Error updating labor price:', error);
            }
          );
      } else {
        this.apuLaborPriceService.createLaborPrice(laborPriceData)
          .subscribe(
            () => {
              alert("Actualizado exitosamente")
              this.router.navigate(['/home/apu-labor-prices']);
            },
            error => {
              console.error('Error creating labor price:', error);
              alert("Error")
            }
          );
      }
    }
  }
}
