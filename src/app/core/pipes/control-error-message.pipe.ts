import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'controlErrorMessage',
  standalone: true
})
export class ControlErrorMessagePipe implements PipeTransform {

  transform(control: AbstractControl | null): string | null {
    if (!control || !control.errors) {
      return null;
    }

    const errors: ValidationErrors = control.errors;

    if (errors['required']) {
      return 'Bu alan zorunludur.';
    }

    if (errors['customError']) {
      return 'Bir hata meydana geldi.';
    }

    if (errors['pattern']) {
      return 'Geçersiz formatta.';
    }

    if(errors['minLength']) {
      return 'Minimum 3 karakter girebilirsiniz.';
    }

      return null;
  }



}
