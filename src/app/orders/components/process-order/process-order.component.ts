import { Component, OnDestroy, OnInit } from '@angular/core';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CustomValidators } from 'src/app/shared/validators';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit, OnDestroy {
  phoneTypes: Array<string> = ['home', 'mobile', 'work', 'other'];

  processOrderForm: FormGroup;

  get firstName(): AbstractControl {
    return this.processOrderForm.get('firstName');
  }

  get lastName(): AbstractControl {
    return this.processOrderForm.get('lastName');
  }

  get email(): AbstractControl {
    return this.processOrderForm.get('email');
  }

  get phones(): FormArray {
    return this.processOrderForm.get('phones') as FormArray;
  }

  get phoneNumber(): AbstractControl {
    return this.phones.at(0).get('phoneNumber');
  }

  get deliveryMethod(): AbstractControl {
    return this.processOrderForm.get('deliveryMethod');
  }

  get deliveryAddress(): AbstractControl {
    return this.processOrderForm.get('deliveryAddress');
  }

  validationMessagesMap = new Map([
    ['firstName', {
      message: '',
      required: 'Please enter your first name.',
      minlength: 'The first name must be at least 2 characters long.',
      customerName: 'The first name can contain only latin letters and space.'
    }],
    ['lastName', {
      message: ''
    }],
    ['email', {
      message: '',
      required: 'Please enter your email address.',
      email: 'Please enter a valid email address.'
    }],
    ['phoneNumber', {
      message: '',
      required: 'Please enter your contact phone number.'
    }],
    ['deliveryMethod', {
      message: ''
    }],
    ['deliveryAddress', {
      message: '',
      required: 'Please enter your delivery address.'
    }]
  ]);

  private sub: Subscription;

  constructor(
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    this.buildForm();
    this.watchValueChanges();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onConfirmOrder() {
    console.log(`Order details: ${JSON.stringify(this.processOrderForm.value)}`);
    this.router.navigateByUrl('/order-confirmed');
  }

  onBlur(event) {
    const controlName = event.target.getAttribute('formControlName');
    this.setValidationMessages(controlName);
  }

  onAddPhone(): void {
    this.phones.push(this.buildPhone());
  }

  onRemovePhone(index: number): void {
    this.phones.removeAt(index);
  }

  private buildForm() {
    this.processOrderForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), CustomValidators.customerName]],
      lastName: '',
      email: '',
      phones: this.fb.array([
        this.fb.group({
          phoneType: 'mobile',
          phoneNumber: ['', Validators.required]
          })
      ]),
      deliveryMethod: ['pickup'],
      deliveryAddress: ''
    });
  }

  private buildPhone(): FormGroup {
    return this.fb.group({
      phoneType: 'mobile',
      phoneNumber: ''
      });
  }

  private watchValueChanges() {
    this.sub = this.deliveryMethod.valueChanges.subscribe(value => this.setDeliveryMethod(value));

    const sub = this.processOrderForm.valueChanges
    .pipe(debounceTime(1000))
    .subscribe(ignorValue =>
      this.setValidationMessages()
    );
    this.sub.add(sub);
  }

  private setDeliveryMethod(deliveryMethod: string) {
    if (deliveryMethod === 'pickup') {
      this.deliveryAddress.clearValidators();
      this.deliveryAddress.reset();
    } else {
      this.deliveryAddress.setValidators(Validators.required);
    }
    this.deliveryAddress.updateValueAndValidity();
  }

  private buildValidationMessages(controlName: string) {
    const c: AbstractControl = this[controlName]; // вызов гетера
    this.validationMessagesMap.get(controlName).message = '';

    if ((c.touched || c.dirty) && c.invalid && c.errors) {
      this.validationMessagesMap.get(controlName).message = Object.keys(c.errors)
        .map(key => this.validationMessagesMap.get(controlName)[key])
        .join(' ');
    }
  }

  private setValidationMessages(controlName?: string) {
    // валидация для заданого контрола,
    // например для события blur
    if (controlName) {
      this.buildValidationMessages(controlName);
    } else {
      // валидация для всех контролов,
      // например при изменении чего-либо на форме
      this.validationMessagesMap.forEach((control, cntrlName) => {
        this.buildValidationMessages(cntrlName);
      });
    }
  }

}
