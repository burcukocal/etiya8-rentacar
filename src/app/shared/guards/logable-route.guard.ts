import type { CanActivateFn } from '@angular/router';

export const logableRouteGuard: CanActivateFn = (route, state) => {
  return true;
};
