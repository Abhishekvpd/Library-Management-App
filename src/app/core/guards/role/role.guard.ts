import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const url = state.url;
  const router = inject(Router);
  const authService = inject(AuthService);
  const role = localStorage.getItem('role');
  const adminPages = url.includes('admin');
  const userPages = url.includes('user');

  if ((adminPages && role !== 'admin') || (userPages && role !== 'user')) {
    authService.clearDataFromLocalStorage();
    router.navigate(['/login']);
    return false;
  } else return true;
};
