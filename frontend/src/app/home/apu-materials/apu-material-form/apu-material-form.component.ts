// apu-material-form.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApuMaterialService } from '../services/apu-material.service';

@Component({
  selector: 'app-apu-material-form',
  templateUrl: './apu-material-form.component.html',
  styleUrls: ['./apu-material-form.component.scss']
})
export class ApuMaterialFormComponent implements OnInit {
  materialForm: FormGroup;
  isEditMode = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private materialService: ApuMaterialService
  ) { }

  ngOnInit() {
    this.createMaterialForm();

    // Verificar si estamos en modo edición o creación
    const materialId = this.route.snapshot.params['id'];
    if (materialId) {
      this.isEditMode = true;
      this.loadMaterial(materialId);
    }
  }

  createMaterialForm() {
    this.materialForm = this.formBuilder.group({
      code: ['', Validators.required],
      description: ['', Validators.required],
      unit: ['', Validators.required],
      unit_value: ['', Validators.required],
      reference_link: [''],
      chapter_id: ['', Validators.required]
    });
  }

  loadMaterial(id: number) {
    this.materialService.getById(id).subscribe(material => {
      this.materialForm.patchValue(material);
    });
  }

  saveMaterial() {
    if (this.materialForm.valid) {
      const material = this.materialForm.value;

      if (this.isEditMode) {
        const materialId = this.route.snapshot.params['id'];
        this.materialService.update(materialId, material).subscribe(() => {
          this.router.navigate(['/home/apu-materials/']);
        });
      } else {
        this.materialService.create(material).subscribe(() => {
          this.router.navigate(['/home/apu-materials/']);
        });
      }
    }
  }
}
