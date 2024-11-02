import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable, retry } from 'rxjs';

// import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class authPermissionGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    
    next: ActivatedRouteSnapshot,
    
    state: RouterStateSnapshot): boolean {
      let isCheck;
      console.log("inside auth guard", state.url);
    if (!sessionStorage.getItem('token')) {

      this.router.navigate(['/auth/signup']);

      isCheck = false;

    }

    else {

      isCheck = true;

    }

    return isCheck;
  }

}