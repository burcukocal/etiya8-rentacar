import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'controlErrorMessage',
  standalone: true
})
export class ControlErrorMessagePipe implements PipeTransform {


  transform(control: ValidationErrors | null | undefined, ...args: unknown[]): string | unknown  {

    if (control?.['required']) {
      return 'Bu alan zorunludur.';
    }

    if (control?.['customError']) {
      return 'Bir hata meydana geldi.';
    }

    if (control?.['pattern']) {
      return 'Geçersiz formatta.';
    }

    if(!control?.['minLength']) {
      return 'Minimum 3 karakter olmalıdır.';
    }

    if(!control?.['maxLength']) {
      return 'Maksimum 20 karakter olmalıdır.';
    }

      return "Invalid";
  }



}
