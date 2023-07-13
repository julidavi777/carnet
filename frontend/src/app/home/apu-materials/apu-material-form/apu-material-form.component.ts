// apu-material-form.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApuMaterialService } from '../services/apu-material.service';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-apu-material-form',
  templateUrl: './apu-material-form.component.html',
  styleUrls: ['./apu-material-form.component.scss']
})
export class ApuMaterialFormComponent implements OnInit {
  materialForm: FormGroup;
  isEditMode = false;
  chapters: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private materialService: ApuMaterialService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.createMaterialForm();

    // Verificar si estamos en modo edición o creación
    const materialId = this.route.snapshot.params['id'];
    if (materialId) {
      this.isEditMode = true;
      this.loadMaterial(materialId);
    }
    this.getChapters();
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
      this.materialForm.patchValue({
        ...material,
        chapter_id: material?.chapter 
      });
    });
  }

  getChapters(){
    this.commonService.getChapters().subscribe((chapters:any) => {
      this.chapters = chapters
    })  
  }

  saveMaterial() {
    if (this.materialForm.valid) {
      const material = {
        ...this.materialForm.value,
        chapter_id: this.materialForm.value.chapter_id.id
      };

      if (this.isEditMode) {
        const materialId = this.route.snapshot.params['id'];
        this.materialService.update(materialId, material).subscribe(() => {
          alert("Actualizado exitosamente")
          this.router.navigate(['/home/apu-materials/']);
        });
      } else {
        this.materialService.create(material).subscribe(() => {
          alert("Registrado exitosamente")
          this.router.navigate(['/home/apu-materials/']);
        });
      }
    }
  }
}
