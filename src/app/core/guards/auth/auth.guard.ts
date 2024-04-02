import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const url = state.url;
  const router = inject(Router);
  const authService = inject(AuthService);
  const isLoggedIn = localStorage.getItem('token') ? true : false;
  const role = localStorage.getItem('role');
  const publicPages = url.includes('login') || url.includes('register');

  if (publicPages) {
    if (!isLoggedIn) return true;
    else {
      router.navigate([`/${role}`]);
      return false;
    }
  } else {
    if (isLoggedIn) return true;
    else {
      authService.clearDataFromLocalStorage();
      router.navigate(['/']);
      return false;
    }
  }
};
