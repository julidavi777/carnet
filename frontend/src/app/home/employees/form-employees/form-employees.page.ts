import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { RolesService } from '../../roles/roles.service';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employees.page.html',
  styleUrls: ['./form-employee.page.scss'],
  providers: [MessageService]
})
export class FormEmployeePage implements OnInit, OnDestroy {

  showPassword = false;
  isSavingData = false;
  isEditingData = false;
  rolesData: any = [];

  employeeForm: FormGroup | any;

  constructor(
    private EmployeesService: EmployeesService,
    private messageService: MessageService,
    private rolesService: RolesService,
    private fb: FormBuilder,
    private router: Router) {

  }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      name:                  new FormControl('', [Validators.required]),
      surname:               new FormControl('', [Validators.required]),
      email:                 new FormControl('', [Validators.required, Validators.email]),
      id_card:               new FormControl('', [Validators.required,]),
      type_id:               new FormControl('', [Validators.required,]),
      address:               new FormControl('', [Validators.required]),
      phone:                 new FormControl('', [Validators.required]),
      position:              new FormControl('', [Validators.required]),
      cv_file:               new FormControl('', [Validators.required]),
      medical_exam_file:     new FormControl('', [Validators.required]),
      followup_letter_file:  new FormControl('', [Validators.required]),
      history_file:          new FormControl('', [Validators.required]),
      study_stands_file:     new FormControl('', [Validators.required]),
      id_card_file:          new FormControl('', [Validators.required]),
      work_certificate_file: new FormControl('', [Validators.required]), 
    });
    




    if (this.EmployeesService.dataEmployee) {
      this.isEditingData = true;

      this.employeeForm.removeControl('password')
      this.employeeForm.removeControl('password_confirmation')

      this.employeeForm.patchValue(this.EmployeesService.dataEmployee)
    }
    this.getRoles();
  }


  onSelectType(event: any) {
    const selectedValue = event.target.value; // Obtén el valor seleccionado del menú desplegable
    this.employeeForm.patchValue({ type_id: selectedValue }); // Actualiza el valor del control type_id
  }
  onSubmit() {
    const formData = new FormData();
    
    formData.append('name', this.employeeForm.get('name').value);
    formData.append('surname', this.employeeForm.get('surname').value);
    formData.append('id_card', this.employeeForm.get('id_card').value);
    formData.append('type_id', this.employeeForm.get('type_id').value);
    formData.append('address', this.employeeForm.get('address').value);
    formData.append('phone', this.employeeForm.get('phone').value);
    formData.append('email', this.employeeForm.get('email').value);
    formData.append('position', this.employeeForm.get('position').value);

    formData.append('cv_file', this.employeeForm.get('cv_file_field').value);
    formData.append('medical_exam_file', this.employeeForm.get('medical_exam_file_field').value);
    formData.append('followup_letter_file', this.employeeForm.get('followup_letter_file_field').value);
    formData.append('history_file', this.employeeForm.get('history_file_field').value);
    formData.append('study_stands_file', this.employeeForm.get('study_stands_file_field').value);
    formData.append('id_card_file', this.employeeForm.get('id_card_file_field').value);
   // formData.append('work_certificate_file', this.employeeForm.get('work_certificate_file_field').value);

    this.isSavingData = true;
    if (!this.isEditingData) {
      this.registerEmployee();
      return;
    }

    //UPDATING
    let data = { ...this.employeeForm.value }
   
    this.updateEmployee(data);

  }

  registerEmployee(): void {
    this.EmployeesService.registerEmployee(this.employeeForm.value).subscribe((res: any) => {
      //alert('Uploaded Successfully.');
      this.successMessage();
      this.isSavingData = false;
      this.employeeForm.reset();
      setTimeout(() => {
        this.router.navigate(['home/employees']);
      }, 1000);
    }, (err: any) => {
      this.isSavingData = false;
      this.errorMessage();
    }
    );
  }

  updateEmployee(data: any) {
    this.EmployeesService.updateEmployee(data, this.EmployeesService.dataEmployee['id']).subscribe((res: any) => {
      //alert('Uploaded Successfully.');

      this.successMessage(res?.email_confirmation);
      this.isSavingData = false;
      this.employeeForm.reset();
      setTimeout(() => {

        this.router.navigate(['home/employees']);
      }, res?.email_confirmation ? 6000 : 1000);
    }, (err: any) => {
      this.isSavingData = false;
      this.errorMessage();
    }
    );
  }

  getRoles() {
    this.rolesService.getRoles().subscribe((res: any) => {
      this.rolesData = res.data;
    }, (err: any) => {
      console.log(err);
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  successMessage(email_confirmation = null) {
    let confirm_notification = email_confirmation ? ', Se ha enviado una notificación para confirmar el nuevo correo electrónico.' : '';
    this.messageService.add({ key: 'successMessage', severity: 'success', summary: 'Éxito', detail: `Empleado ${this.isEditingData ? 'actualizado' : 'registrado'}` + confirm_notification });
  }
  errorMessage() {
    this.messageService.add({ key: 'errorMessage', severity: 'error', summary: 'Error', detail: `Empleado no ${this.isEditingData ? 'actualizado' : 'registrado'}` });
  }

  ngOnDestroy() {
    this.EmployeesService.dataEmployee = null;
  }
 
  onFileChange(event: any, name_field: string, ){
    if(name_field == "cv_file_field" ){
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.employeeForm.patchValue({
          cv_file: file
        });
      }
    }

    if(name_field ==  "medical_exam_file_field"){
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.employeeForm.patchValue({
          medical_exam_file: file
        });
      }
    }
    if(name_field ==  "followup_letter_file_field"){
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.employeeForm.patchValue({
          followup_letter_file: file
        });
      }
    }


    if(name_field ==  "history_file_field"){
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.employeeForm.patchValue({
          history_file: file
        });
      }
    }
    if(name_field ==  "study_stands_file_field"){
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.employeeForm.patchValue({
          study_stands_file: file
        });
      }
      
    }
    if(name_field ==  "id_card_file_field"){
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.employeeForm.patchValue({
          id_card_file: file
        });
      }
    }
    if(name_field ==  "work_certificate_file_field"){
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.employeeForm.patchValue({
          work_certificate_file: file
        });
      }
    }    
    if(name_field ==  "type_id"){
      const selectedValue = event.target.value
      this.employeeForm.patchValue({ type_id: selectedValue })
    } 

  }


}
