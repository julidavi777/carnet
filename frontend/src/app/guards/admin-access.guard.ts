import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageEncryptService } from '../services/local-storage-encrypt.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAccessGuard implements CanActivate {
  constructor(
    private router: Router,
    private localStorageEncryptService: LocalStorageEncryptService,) {
  
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    var permissions = this.localStorageEncryptService.getJsonValue('permissions');
    if(permissions.includes('admin')){
      return true;
    }  
    this.router.navigate(['login']);
    this.localStorageEncryptService.clearToken()
    return false;
  }
  
}
