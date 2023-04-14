import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { RolesService } from '../../roles/roles.service';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.page.html',
  styleUrls: ['./form-user.page.scss'],
  providers: [MessageService]
})
export class FormUserPage implements OnInit {

  showPassword = false;
  isSavingData = false;
  isEditingData = false;

  rolesData: any = [];

  userForm: FormGroup | any;

  constructor(
    private usersService: UsersService,
    private messageService: MessageService,
    private rolesService: RolesService,
    private fb: FormBuilder,
    private router: Router) {

    }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.min(6)]),
      password_confirmation: new FormControl('', [Validators.required, Validators.min(6)]),
      role_id: new FormControl('', [Validators.required]),
    });

    if(this.usersService.dataUser){
      this.isEditingData = true;

      this.userForm.removeControl('password')
      this.userForm.removeControl('password_confirmation')
      this.userForm.controls['email'].disable();

      this.userForm.patchValue(this.usersService.dataUser)
    }
    this.getRoles();
  }

  onSubmit(){

    this.isSavingData = true;
    if(!this.isEditingData){
      this.registerUser();
      return;
    }

    //UPDATING
    let data = {...this.userForm.value}
    if(typeof data['role_id'] == "object"){
       data['role_id'] = null;
    }
    this.updateUser(data);

  }

  registerUser(): void{
    this.usersService.registerUser(this.userForm.value).subscribe((res: any) => {
      //alert('Uploaded Successfully.');
      this.successMessage();
      this.isSavingData = false;
      this.userForm.reset();
      setTimeout(() => {
        this.router.navigate(['home/users']);
      }, 1000);
      }, (err:any) => {
        this.isSavingData = false;
        this.errorMessage();
      }
      );
  }

  updateUser(data: any){
    this.usersService.updateUser(data, this.usersService.dataUser['id']).subscribe((res: any) => {
      //alert('Uploaded Successfully.');
      this.successMessage();
      this.isSavingData = false;
      this.userForm.reset();
      setTimeout(() => {
        
        this.router.navigate(['home/users']);
      }, 1000);
      }, (err:any) => {
        this.isSavingData = false;
        this.errorMessage();
      }
      );
  }

  getRoles(){
    this.rolesService.getRoles().subscribe((res: any) => {
      this.rolesData = res.data;
    }, (err:any) => {
      console.log(err);
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  successMessage() {
    this.messageService.add({key: 'successMessage', severity:'success', summary: 'Éxito', detail: `Usuario ${this.isEditingData ? 'actualizado': 'registrado'}`});
  }
  errorMessage() {
    this.messageService.add({key: 'errorMessage', severity:'error', summary: 'Error', detail: `Usuario no ${this.isEditingData ? 'actualizado': 'registrado'}`});
  }
}
