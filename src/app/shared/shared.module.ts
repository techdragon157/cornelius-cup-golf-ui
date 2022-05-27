import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { AbstractControl, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { FormlyRepeatSectionComponent } from './formly-repeat-section/formly-repeat-section.component';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

export function emailValidator(control: AbstractControl, field: FormlyFieldConfig): ValidationErrors {
  return !control.value || /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(control.value) ? {} : { 'email': true };
}

export function emailValidationMessage(err: any, field: FormlyFieldConfig) {
  return `Please enter a valid email address`;
}

export function minlengthValidationMessage(err: any, field: FormlyFieldConfig) {
  return `The minimum allowed length is ${field.templateOptions?.minLength} characters`;
}
export function maxlengthValidationMessage(err: any, field: FormlyFieldConfig) {
  return `The maximum allowed length is ${field.templateOptions?.maxLength} characters`;
}
export function minValidationMessage(err: any, field: FormlyFieldConfig) {
  return `The minimum allowed value is ${field.templateOptions?.min}`;
}
export function maxValidationMessage(err: any, field: FormlyFieldConfig) {
  return `The maximum allowed value is ${field.templateOptions?.max}`;
}

@NgModule({
  declarations: [
    FormlyRepeatSectionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forChild({ 
      extras: { lazyRender: true, immutable: false },
      types: [
        { name: 'repeat', component: FormlyRepeatSectionComponent },
      ],
      validators: [
        { name: 'email', validation: emailValidator },
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'minlength', message: minlengthValidationMessage },
        { name: 'maxlength', message: maxlengthValidationMessage },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
        { name: 'email', message: emailValidationMessage },
      ]
    })
  ],
  exports: [
    CommonModule,
    FormlyModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
