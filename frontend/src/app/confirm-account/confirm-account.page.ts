import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-confirm-account',
  templateUrl: './confirm-account.page.html',
  styleUrls: ['./confirm-account.page.scss'],
})
export class ConfirmAccountPage implements OnInit {

  public API_URL = environment.baseUrl;
  is_confirming: boolean = true;
  error_confirming:boolean = false; 

  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams.pipe(delay(1000))
      .subscribe((params: any) => {
        console.log(params.token)
        if(params?.token){
          this.loginService.confirmAccount(params.token).subscribe((res: any) => {
            this.is_confirming = false;
          }, err => {
            this.is_confirming = false;
            this.error_confirming = true;
          })
        }else{
          this.router.navigate(['login'])
        }
      }
    );
  }

}
