import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SystemModule } from './system/system.module';
import { FormlyRepeatSectionComponent } from './system/formly-repeat-section/formly-repeat-section.component';
import { playersReducer } from './state/players.reducer';

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
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({players: playersReducer}, {}),
    ReactiveFormsModule,
    FormlyModule.forRoot({ 
      extras: { lazyRender: true },
      types: [
        { name: 'repeat', component: FormlyRepeatSectionComponent },
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'minlength', message: minlengthValidationMessage },
        { name: 'maxlength', message: maxlengthValidationMessage },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
      ]
    }),
    FormlyBootstrapModule,
    BrowserAnimationsModule,
    SystemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
