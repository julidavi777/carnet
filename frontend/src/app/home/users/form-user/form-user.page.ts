import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { RolesService } from '../../roles/roles.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.page.html',
  styleUrls: ['./form-user.page.scss'],
  providers: [MessageService]
})
export class FormUserPage implements OnInit {

  showPassword = false;

  rolesData: any = [];

  userForm: any = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required,Validators.min(6)]),
    password_confirmation: new FormControl('', [Validators.required, Validators.min(6)]),
    role_id: new FormControl('', [Validators.required]),
  });

  constructor(
    private usersService: UsersService,
    private messageService: MessageService,
    private rolesService: RolesService) { 
      
    }

  ngOnInit() {
    this.getRoles();
  }

  onSubmit(){
  

    this.usersService.registerUser(this.userForm.value).subscribe((res: any) => {
      //alert('Uploaded Successfully.');
      this.showBottomCenter();
      }, (err:any) => {

        alert('error al registrar.');
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

  showBottomCenter() {
    this.messageService.add({key: 'bc', severity:'success', summary: 'Éxito', detail: 'Usuario registrado'});
  }
}
