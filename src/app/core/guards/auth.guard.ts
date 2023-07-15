import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import { UserService } from '../services/user.service';
import { JwtService } from '../services/jwt.service';




@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {
    constructor(
      public router: Router,
      private userService:UserService,
      private jwt:JwtService,
      private route:ActivatedRoute
    ) {
    }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {


                console.log(this.userService.isAuthenticated)
                if(!this.jwt.getToken()){

                  this.router.navigateByUrl('/login');

                  return false
                }
                return true;






    //             if (!IamAuthUtils.isLoggedIn()) {
    //   this.router.navigate(['login']);
    //   return false;
    // } else {
    //   const requiredPermissions = this.getRequiredPermissions(route);
    //   const userPermissionsList: AclResource[] =  IamAuthUtils.getCurrentUserAcls();
    //   let userPermissions : string[] = [];
    //   if(!_.isUndefined(userPermissionsList) && userPermissionsList.length > 0) {
    //     userPermissionsList.forEach(userPermission => {
    //       userPermissions.push(userPermission.resourceName);
    //     });
    //   }
    //   if(this.isUserAllowed(requiredPermissions, userPermissions)) {
    //     return true;
    //   } else {
    //     if(IamAuthUtils.isLoggedIn()){
    //       this.router.navigateByUrl('access-denied');
    //     } else {
    //       this.router.navigateByUrl('auth/access-denied');
    //     }
    //     return false;
    //   }

    // }
  }

  // private getRequiredPermissions(route: ActivatedRouteSnapshot): string[]{
  //   if (route.data) {
  //     return route.data['requiredPermissions'] as string[];
  //   } else {
  //     return [];
  //   }
  // }

  // public isUserAllowed(requiredPermissions: string[], userPermissions: string[]): boolean {
  //   let userPermissionsMatchingList:string[] = [];
  //   if(!_.isUndefined(userPermissions) && !_.isNull(userPermissions) && !_.isNull(requiredPermissions) && !_.isUndefined(requiredPermissions)) {
  //     userPermissions.forEach(userPermission => {
  //       if(requiredPermissions.includes(userPermission)){
  //         userPermissionsMatchingList.push(userPermission);
  //       };
  //     })
  //   }
  //   return (userPermissions.length > 0 && (userPermissionsMatchingList.length == requiredPermissions.length));
  // }
  }
