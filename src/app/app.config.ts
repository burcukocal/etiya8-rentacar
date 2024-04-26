import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './shared/intercepters/auth.interceptor';
import { errorInterceptor } from './shared/intercepters/error.interceptor';
import { provideToastr } from 'ngx-toastr';
import { timeInterceptor } from './shared/intercepters/time.interceptor';
import { loadingOverlayInterceptor } from './shared/intercepters/loading-overlay.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideToastr(),
    provideHttpClient(
      withInterceptors(
        [
          authInterceptor,
          errorInterceptor,
          timeInterceptor,
          loadingOverlayInterceptor
        ]
      )) //HttpClient'ı kullanabilmek için
  ]
};
