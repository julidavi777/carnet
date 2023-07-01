import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class HomeAccessGuard implements CanActivate {
  constructor(
    private router: Router,
    private loginService : LoginService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return this.loginService.me().pipe(
        map(res => {
          // Perform any necessary checks on the response
          // and return true or false based on the condition
          return true;
        }),
        catchError(err => {
          if (err.status === 401) {

            alert("La sesión es inválida");
            this.router.navigate(['/login']);

            return of(false);
          } else {
            throw err;
          }
        }
        )
       
      );
  }
  
}
