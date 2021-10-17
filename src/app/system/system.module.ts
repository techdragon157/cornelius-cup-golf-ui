import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FormlyRepeatSectionComponent } from './formly-repeat-section/formly-repeat-section.component';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  declarations: [
    WelcomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FormlyRepeatSectionComponent
  ],
  imports: [
    CommonModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    FormlyModule.forChild({ extras: { lazyRender: true } }),
  ],
  exports: [
    WelcomeComponent,
    PageNotFoundComponent,
    HeaderComponent
  ]
})
export class SystemModule { }
