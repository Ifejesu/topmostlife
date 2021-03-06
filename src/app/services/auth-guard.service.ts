import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, UrlSegment, Router, RouterStateSnapshot, Route } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private auth: AuthService, private router: Router) { }

  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    this.auth.role$.subscribe(role => {
        if (!(role === 'admin')) {
          return false;
        }
      }
    );
    return true;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!localStorage.getItem('isLoggedIn')) {
      this.router.navigate(['/login']);
    }
    return true;

    // return new Observable(
    //   observer => {
    //     this.auth.isAuth$.subscribe(
    //       auth => {
    //         if (!auth) {
    //           this.router.navigate(['/login']);
    //         }
    //         observer.next(true);
    //       }
    //     );
    //   }
    // );
  }

}
