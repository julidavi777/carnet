import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponse } from './interfaces/LoginResponse.interface';
import { LoginService } from './login.service';
import { NgxPermissionsService } from 'ngx-permissions';
import { LocalStorageEncryptService } from '../services/local-storage-encrypt.service';
/* import {MatDialog} from '@angular/material/dialog';
import { ApiService } from '../home/alerts/contracts-to-expire/api.service';
import { AlertModalComponent } from '../home/alerts/contracts-to-expire/alert-modal-component'; // Asegúrate de importar el componente del modal

 */
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isInvalidData:boolean = false;
  isLoadingButton:boolean = false;

  loginForm: any = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
/*     private apiService:ApiService,
    private dialog:MatDialog, */
    private loginService: LoginService,
    private router: Router,
    private permissionsService: NgxPermissionsService,
    private localStorageEncryptService: LocalStorageEncryptService,
  ) { }

  ngOnInit() {
  }

  login(){
    this.isLoadingButton = true;
    this.isInvalidData = false;

    this.loginService.login(this.loginForm.value).subscribe((res: LoginResponse) => {
      //CUANDO ES EXITOSO status 200 OK
      
      //SAVE TOKEN
      localStorage.setItem('auth_token', res.access_token)

      //SET PERMISSIONS
      let permissions = [...res.permissions, res.role];
      
      this.permissionsService.loadPermissions(permissions);

      //save permissions
      this.localStorageEncryptService.setJsonValue('permissions', JSON.stringify(permissions));

      this.isLoadingButton = false;
      this.router.navigate(['home']); 
    }, err => {
      this.isLoadingButton = false;
      //CUANDO ES ERROR status 401 unasdjaj
      this.isInvalidData = true;
    })
  }

}
