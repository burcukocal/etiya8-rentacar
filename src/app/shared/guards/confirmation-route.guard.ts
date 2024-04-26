import type { CanDeactivateFn } from '@angular/router';

export const confirmationRouteGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
