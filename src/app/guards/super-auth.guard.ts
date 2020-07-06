// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class SuperAuthGuard implements CanActivate {
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }
// }

import { Injectable } from '@angular/core';
import { CanActivate, 
        ActivatedRouteSnapshot, 
        RouterStateSnapshot, 
        Router 
      } from '@angular/router';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SuperAuthGuard implements CanActivate {
  
  constructor(private router: Router) {}
  routes: any;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      if (localStorage.getItem('super') != null) {
        return true;
      } else {
        this.router.navigate(['/superLogin']);
        return false;
      }
    }
}