import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {

  static customerName(c: AbstractControl): ValidationErrors | null {
    const lettersOnly = /^[A-Za-z ]+$/;
    if (c.value !== undefined && c.value.length >= 2 && !lettersOnly.test(c.value)) {
      return {
        customerName: true
      };
    }
    return null;
  }
}
