import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ApuActivitiesService } from '../apu-activities.service';
import { CommonService } from 'src/app/services/common.service';
import { ClientesService } from '../../clientes/clientes.service';

@Component({
  selector: 'app-apu-activities-form',
  templateUrl: './apu-activities-form.component.html',
  styleUrls: ['./apu-activities-form.component.scss'],
})
export class ApuActivitiesFormComponent implements OnInit {

  apuActivityForm: FormGroup; // FormGroup variable
  units: any[]  = [];
  chapters: any[] = [];
  customers: any[] = [];

  constructor(
    private formBuilder: FormBuilder, 
    public modalController: ModalController,
    private apuActivitiesService: ApuActivitiesService,
    private commonService: CommonService,
    private clientesService: ClientesService,

    ) { }

  ngOnInit(): void {
    this.units = this.apuActivitiesService.getUnits()
    this.initializeForm();
    this.getChapters();
    this.getCustomers();
  }

  // Initialize the form
  initializeForm(): void {
    this.apuActivityForm = this.formBuilder.group({
      description: ['', Validators.required],
      unit: ['', Validators.required],
      quantity: ['', Validators.required],
      unit_value: ['', Validators.required],
      customer_id: ['', Validators.required],
      chapter_id: ['', Validators.required]
    });
  }

  getChapters(): void {
    this.commonService.getChapters().subscribe((chapters: any) =>{
      this.chapters = chapters;
    })
  }

  getCustomers(): void {
    this.clientesService.getCustomers().subscribe((res: any) =>{
      this.customers = res['data'];
    })
  }

  // Submit function
  onSubmit(): void {
    console.log(this.apuActivityForm.value)

    let data = {
      ...this.apuActivityForm.value,
      chapter_id: this.apuActivityForm.value.chapter_id.id,
      unit: this.apuActivityForm.value.unit.id,
      customer_id: this.apuActivityForm.value.customer_id.id,
    }

    if (this.apuActivityForm.valid) {
      // Call your service and handle the registration logic
      this.apuActivitiesService.saveApuActivity(data).subscribe(
        response => {
          // Display an alert upon successful registration
          alert('Registrado correctamente!');
        },
        error => {
          // Handle any errors that occurred during the registration
          alert('Error');
        }
      );
    } else {
      // If the form is invalid, display an error message or perform appropriate validation handling
      alert('Por favor llene todos los campos');
    }
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true,
    });
  }

}
