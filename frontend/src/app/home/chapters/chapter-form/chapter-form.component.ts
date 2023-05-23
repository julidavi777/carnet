import { ChaptersService } from './../chapters.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-chapter-form',
  templateUrl: './chapter-form.component.html',
  styleUrls: ['./chapter-form.component.scss'],
})
export class ChapterFormComponent implements OnInit {

  chapterForm: FormGroup; // FormGroup variable

  constructor(
    private formBuilder: FormBuilder, 
    private chaptersService: ChaptersService,
    public modalController: ModalController) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  // Initialize the form
  initializeForm(): void {
    this.chapterForm = this.formBuilder.group({
      no: ['', Validators.required],
      chapter: ['', Validators.required],
    });
  }

  // Submit function
  onSubmit(): void {
    if (this.chapterForm.valid) {
      // Call your service and handle the registration logic
      this.chaptersService.saveChapter(this.chapterForm.value).subscribe(
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
