import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthenticationService } from '../authentication/services/authentication-service/src';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Promise<boolean> {
    // Wait for the user authentication status
    const currentUser = await this.authenticationService.getCurrentUser();

    if (currentUser) {
      return true;
    } else {
      await this.router.navigate(['/onboarding/landing']);
      return false;
    }
  }
}
