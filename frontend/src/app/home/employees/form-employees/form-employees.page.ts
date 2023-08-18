import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder,ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
// import { GLOBAL} from '
import { MessageService } from 'primeng/api';
import { RolesService } from '../../roles/roles.service';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';
import { letterSpacing } from 'html2canvas/dist/types/css/property-descriptors/letter-spacing';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employees.page.html',
  styleUrls: ['./form-employee.page.scss'],
  providers: [MessageService]
})

export class FormEmployeePage implements OnInit, OnDestroy {
  selectedFiles = [];
  showPassword = false;
  isSavingData = false;
  isEditingData = false;
  rolesData: any = [];

  employeeForm: FormGroup | any;

  constructor(
    private http: HttpClient,
    private EmployeesService: EmployeesService,
    private messageService: MessageService,
    private rolesService: RolesService,
    private fb: FormBuilder,
    private router: Router) {

  }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      name:                   new FormControl('', [Validators.required]),
      surname:                new FormControl('', [Validators.required]),
      email:                  new FormControl('', [Validators.required, Validators.email]),
      id_card:                new FormControl('', [Validators.required,]),
      type_id:                new FormControl('', [Validators.required,]),
      address:                new FormControl('', [Validators.required]),
      phone:                  new FormControl('', [Validators.required]),
      position:               new FormControl('', [Validators.required]),
      cv_file:                new FormControl('', [Validators.required]),
      medical_exam_file:      new FormControl('', [Validators.required]),
      followup_letter_file:   new FormControl('', [Validators.required]),
      history_file:           new FormControl('', [Validators.required]),
      study_stands_file:      new FormControl('', [Validators.required]),
      id_card_file:           new FormControl('', [Validators.required]),
      work_certificate_file:  new FormControl('', [Validators.required]), 
      military_passbook_file: new FormControl('', [Validators.required]), 
      
    });
    




    if (this.EmployeesService.dataEmployee) {
      this.isEditingData = true;

      this.employeeForm.patchValue(this.EmployeesService.dataEmployee)
    }
   
  }

  uploadFiles(data: any) {

    if(this.selectedFiles.length === 0) {
      return 
    }
    const formData = new FormData();
    for (const file of this.selectedFiles) {
      formData.append('files', file, file.name);
    }
  }
  
  sendFile(){
    this.EmployeesService.registerEmployee(this.selectedFiles).subscribe(
      response=>{
        if(response){ {
          console.log(response);
        }
      }
      error=>{
        console.log(error);
      }
    });
  }
  

 onSubmit() {
    const formData = new FormData();
    console.log('FormData =', formData);
    console.log(this.employeeForm.value);
    
    formData.append('name', this.employeeForm.get('name').value);
    formData.append('surname', this.employeeForm.get('surname').value);
    formData.append('id_card', this.employeeForm.get('id_card').value);
    formData.append('type_id', this.employeeForm.get('type_id').value);
    formData.append('address', this.employeeForm.get('address').value);
    formData.append('phone', this.employeeForm.get('phone').value);
    formData.append('email', this.employeeForm.get('email').value);
    formData.append('position', this.employeeForm.get('position').value);

    

    this.isSavingData = true;
    alert('saving data done!');
    if (!this.isEditingData) {
      alert('OnsubmitSuccessfully. create');
      this.registerEmployee();
      return;
    }
      alert('OnsubmitSuccessfully. Update');

    //UPDATING
    let data = { ...this.employeeForm.value }
   
    this.updateEmployee(data);

  }

  registerEmployee(): void {
    this.EmployeesService.registerEmployee(this.employeeForm.value).subscribe((res: any) => {
      alert('Uploaded Successfully.');
      this.successMessage();
      this.isSavingData = false;
      this.employeeForm.reset();
      setTimeout(() => {
        this.router.navigate(['home/employees']);
      }, 1000);
    }, (err: any) => {
      console.log(err)
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

  successMessage(email_confirmation = null) {
    let confirm_notification = email_confirmation ? 'Se ha agregado el Empleado correctamente.' : 'Se ha agregado el Empleado correctamente(false)';
    this.messageService.add({ key: 'successMessage', severity: 'success', summary: 'Éxito', detail: `Empleado ${this.isEditingData ? 'actualizado' : 'registrado'}` + confirm_notification });
  }  errorMessage() {
    this.messageService.add({ key: 'errorMessage', severity: 'error', summary: 'Error', detail: `Empleado no ${this.isEditingData ? 'actualizado' : 'registrado'}` });
  }

  ngOnDestroy() {
    this.EmployeesService.dataEmployee = null;
  }
 

  onFileChange(event: any, name_field: string) {
    if(name_field === 'type_id'){
      const selectedValue = event.target.value
      this.employeeForm.patchValue({ type_id: selectedValue })
      return 
    }
    console.log(event.target.files)
    const files= event.target.files
    console.log(files);
    
    if(files.length > 0) {
      const file = files[0];
      const formData = new FormData();
      formData.append(name_field, file);
      this.uploadFiles(formData);
    }
  }
}
