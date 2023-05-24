import { SuppliesService } from './../supplies.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-supply-form',
  templateUrl: './supply-form.component.html',
  styleUrls: ['./supply-form.component.scss'],
})
export class SupplyFormComponent implements OnInit {

  supplyForm: FormGroup; // FormGroup variable

  constructor(
    private formBuilder: FormBuilder, 
    private suppliesService: SuppliesService,
    public modalController: ModalController) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  // Initialize the form
  initializeForm(): void {
    this.supplyForm = this.formBuilder.group({
      code: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      unidad: ['', Validators.required],
      value: ['', Validators.required]
    });
  }

  // Submit function
  onSubmit(): void {
    if (this.supplyForm.valid) {
      // Call your service and handle the registration logic
      this.suppliesService.saveSupply(this.supplyForm.value).subscribe(
        response => {
          // Display an alert upon successful registration
          alert('Registered successfully!');
        },
        error => {
          // Handle any errors that occurred during the registration
          console.log(error);
        }
      );
    } else {
      // If the form is invalid, display an error message or perform appropriate validation handling
      alert('Please fill in all the required fields.');
    }
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true,
    });
  }
}