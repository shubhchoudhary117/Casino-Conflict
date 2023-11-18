// import { Injectable } from '@angular/core';
// import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree } from '@angular/router';
// import { Router } from '@angular/router';
// import { Observable, tap } from 'rxjs';
// import { AuthService } from '../service/auth.service';
// import { UserRole } from '../service/user-roles.enum';

// @Injectable()
// export class AuthGuard implements CanActivate {
// constructor(private authService: AuthService, private router: Router) {}
// canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean | UrlTree {
//   if (this.authService.isLoggedIn$) {
//     const requiredRoles = next.data.requiredRoles as string[];

//     const userRole = this.authService.getCurrentUserRole();
//     const routeId: string = next.data.routeId;
//     console.log(requiredRoles, userRole,routeId);

//     if (requiredRoles.includes(userRole)) {
//       return true;
//     } else {
//       // Redirect to unauthorized page or show a message
//       return this.router.parseUrl('/unauthorized');
//     }
//   } else {
//     // Redirect to login page
//     return this.router.createUrlTree(['/auth/login']);
//   }
// }
// }


import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../service/auth.service';
import { DataService } from '../service/data-service.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router,private dataService:DataService) {
  }

  // canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
  //   if (this.authService.isLoggedIn$()) {
  //     const userRole = this.authService.getCurrentUserRole(); // Get the user's role from local storage

  //     // Define an array of roles allowed for the current route
  //     const allowedRoles: UserRole[] = next.data.allowedRoles as UserRole[];
  //     console.log(userRole,allowedRoles)
  //     if (allowedRoles.includes(userRole as UserRole)) {
  //         return of(true);
  //     } else {
  //       return of(this.router.createUrlTree(['/auth/login']));
  //     }
  //   } else {
  //     return of(this.router.createUrlTree(['/auth/login']));
  //   }

  // }
//     const allowedRoles = next.data.roles as Array<string>;
//     const userRoles = this.authService.getUserRoles();
// console.log(allowedRoles)

// const isAuthenticated = this.authService.isAuthenticated();
// if (isAuthenticated) {
//   const userRoles = this.authService.getUserRoles();
//   console.log(userRoles);
//   console.log(allowedRoles);

// } else {
//   console.log('User is not authenticated');
// }

//     if (this.authService.isAuthenticated() && this.authService.hasAnyRole(allowedRoles)) {
//       return true;
//     } else {
//       // Redirect unauthorized users to a different route or show an error message
//       // return this.router.createUrlTree(['/unauthorized']);
//       this.router.navigate(['/auth/login']);
// return false
//     }
//   }
// }


// canActivate(
//   next: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ): boolean | UrlTree {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.authService.getCurrentUserRole();
    this.dataService.isDataLoaded();
    if (user) {
    if(route.data.roles && !route.data.roles.includes(user)){
    this.router.navigate(['/error']);
        return false;
      }
  // this.router.navigate(['/']);
  return true;
  }
  this.router.navigate(['/auth/login']);
    return false;

    // this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });

  //   const userRole = this.authService.getCurrentUserRole();

  //   console.log("userroel", userRole)

  //   const currentUser = this.authService.currentUserValue;
  //   if (currentUser){
  //     if (route.data.roles && !route.data.roles.includes(userRole)){
  //       this.router.navigate(['/']);
  //       // this.router.navigate(['/auth/login']);
  //       return false;
  //     }
  //     return true;
  //       // this.router.navigate(['/']);
  //   }
  //   this.router.navigate(['/auth/login']);
  //   return false;
  //   // if(currentUser)
  //   // console.log(userRole)
  //   // return this.authService.isAuthenticated().pipe(
  //   //   tap((authenticated) => {
  //   //     if (!authenticated) {
  //   //       this.router.navigate(['/auth/login']);
  //   //     }
  //   //   }))
  //   // );
  }
}
