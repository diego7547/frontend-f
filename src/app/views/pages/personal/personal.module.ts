import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalComponent } from './personal.component';
import { PersonalModalComponent } from './personal-modal/personal-modal.component';
import { PersonalRoutingModule } from './personal-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/core/interceptos/auth.interceptor';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import {MatIconModule} from '@angular/material/icon';

import {MatTableModule} from '@angular/material/table';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MAT_DATE_LOCALE } from '@angular/material/core';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


// Registra el idioma español
registerLocaleData(localeEs, 'es');


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
    DropdownModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  },
  { provide: LOCALE_ID, useValue: 'es' },
  { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },]
})
export class PersonalModule { }
