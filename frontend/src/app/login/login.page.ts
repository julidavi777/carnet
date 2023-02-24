import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isInvalidData:boolean = false;

  loginForm: any = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(){
    this.isInvalidData = false;
    //console.log(this.loginForm.valid);
    //console.log(this.loginForm.value)
    this.loginService.login(this.loginForm.value).subscribe(res => {
      //CUANDO ES EXITOSO status 200 OK

      this.router.navigate(['home']); 
    }, err => {
      //CUANDO ES ERROR status 401 unasdjaj
      this.isInvalidData = true;
    })
  }

}
