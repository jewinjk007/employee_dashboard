import { CanActivateFn } from '@angular/router';

// Simple route guard function (standalone-friendly)
export const authGuard: CanActivateFn = (route, state) => {
  // In a real app check auth state; here we simulate an authenticated user.
  const isAuthenticated = !!localStorage.getItem('auth') || true;
  if (!isAuthenticated) {
    window.alert('You must be logged in to access that page (simulated).');
  }
  return isAuthenticated;
};
