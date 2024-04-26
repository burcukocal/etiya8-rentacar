import type { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Http isteği gönderilmeden önce araya giriyoruz.

  const token = localStorage.getItem('token')!;
  // Request nesneleri imutable olduğu için klonlamak gerekiyor
  const newReq = req.clone({
    headers: req.headers.set('Authorization', token),
  });
  // klonlayarak yeni bir referans oluşturuyoruz.

  // Http isteğine newReq ile devam ediyoruz.
  return next(newReq);


  // return next(newReq).pipe(
  //   catchError((error: any) => {
  //     console.error('Bir hata oluştu: ', error);
  //     return throwError(() => new Error('Bir hata oluştu'));
  //   })
  // );
  // rxjs pipe: observable'ı manipüle etmek/araya girmek için kullanılır.
  // observable yapıda araya girecek burada hata varsa hatayı verir
};
