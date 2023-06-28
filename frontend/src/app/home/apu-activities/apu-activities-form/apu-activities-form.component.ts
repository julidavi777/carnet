import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-apu-activities-form',
  templateUrl: './apu-activities-form.component.html',
  styleUrls: ['./apu-activities-form.component.scss'],
})
export class ApuActivitiesFormComponent implements OnInit {

  apuActivityForm: FormGroup; // FormGroup variable

  constructor(
    private formBuilder: FormBuilder, 
    public modalController: ModalController) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  // Initialize the form
  initializeForm(): void {
    this.apuActivityForm = this.formBuilder.group({
      city: ['', Validators.required],
      project: ['', Validators.required],
      capacity: ['', Validators.required],
      description: ['', Validators.required],
      unit: ['', Validators.required],
      quantity: ['', Validators.required],
      unit_price: ['', Validators.required]
    });
  }

  // Submit function
  onSubmit(): void {
    if (this.apuActivityForm.valid) {
      // Call your service and handle the registration logic
      /* this.suppliesService.saveSupply(this.apuActivityForm.value).subscribe(
        response => {
          // Display an alert upon successful registration
          alert('Registered successfully!');
        },
        error => {
          // Handle any errors that occurred during the registration
          console.log(error);
        }
      ); */
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
