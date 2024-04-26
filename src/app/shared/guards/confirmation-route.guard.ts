import { CanDeactivateFn } from '@angular/router';

// export type CanDeactivateType = Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
// export interface CanComponentDeactivate {
//   canDeactivate: () => CanDeactivateType;
// }

export const confirmationRouteGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  // confirm('çıkmak istiyor musun');
  // return component.canDeactivate ? component.canDeactivate() : true;
  if (confirm("Girmiş olduğunuz değişiklikler kaybolacak, Devam etmek istiyor musunuz?")) {
    return true;
  } else {
    return false;
  }
};



