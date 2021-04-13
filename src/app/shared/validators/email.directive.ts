import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailDirective,
    multi: true
  }]
})
export class EmailDirective implements Validator {

  validate(c: AbstractControl): ValidationErrors | null {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+$/;
    if (c.value !== undefined && !emailPattern.test(c.value)) {
      return {
        email: true
      };
    }
    return null;
  }
}

