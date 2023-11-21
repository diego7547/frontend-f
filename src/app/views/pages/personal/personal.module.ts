import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalComponent } from './personal.component';
import { PersonalModalComponent } from './personal-modal/personal-modal.component';
import { PersonalRoutingModule } from './personal-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/core/interceptos/auth.interceptor';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    PersonalComponent,
    PersonalModalComponent
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    CalendarModule,
    InputTextModule,
    DropdownModule

  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }]
})
export class PersonalModule { }
