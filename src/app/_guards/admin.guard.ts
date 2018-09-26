import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let roles= currentUser.roles;
    for(let role of roles){
      if (role.name == 'ADMIN'){
        //logged as admin 
        return true;
    }
    
    }
    
             
    this.router.navigate(['/home'], { queryParams: { returnUrl: state.url }});;
              return false;
    }
}
