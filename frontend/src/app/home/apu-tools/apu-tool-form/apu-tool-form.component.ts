import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApuToolService } from '../services/apu-tools.service';
import { ApuTool } from '../interfaces/apu-tool.interface';

@Component({
  selector: 'app-apu-tool-form',
  templateUrl: './apu-tool-form.component.html',
  styleUrls: ['./apu-tool-form.component.scss'],
})
export class ApuToolFormComponent implements OnInit {

  apuToolForm: FormGroup;
  isEditMode: boolean = false;
  apuToolId: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apuToolService: ApuToolService
  ) { }

  ngOnInit() {
    this.createForm();
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.apuToolId = +params['id'];
        this.getApuTool(this.apuToolId);
      }
    });
  }

  createForm() {
    this.apuToolForm = this.formBuilder.group({
      description: ['', Validators.required],
      unit: ['', Validators.required],
      unitValue: ['', Validators.required],
      referenceLink: ['']
    });
  }

  getApuTool(id: number) {
    this.apuToolService.getApuTool(id).subscribe((data: ApuTool) => {
      this.apuToolForm.patchValue(data);
    });
  }

  saveApuTool() {
    if (this.apuToolForm.invalid) {
      return;
    }

    const apuToolData = this.apuToolForm.value;
    if (this.isEditMode) {
      this.apuToolService.updateApuTool(this.apuToolId, apuToolData).subscribe(() => {
        this.router.navigate(['/apu-tools']);
      });
    } else {
      this.apuToolService.createApuTool(apuToolData).subscribe(() => {
        this.router.navigate(['/apu-tools']);
      });
    }
  }

}
