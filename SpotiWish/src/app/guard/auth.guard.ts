import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "../login-module/services/login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate
{

  constructor(private router: Router, private loginService: LoginService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    if (!this.loginService.isAuthenticated)
    {
      this.router.navigate(['']);
    }
    return true;
  }

}
