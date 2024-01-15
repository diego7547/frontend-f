import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';
import { RegistroModelComponent } from './registro-model/registro-model.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

import {MatPaginatorModule} from '@angular/material/paginator';

import {MatIconModule} from '@angular/material/icon';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

import { MAT_DATE_LOCALE } from '@angular/material/core';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


// Registra el idioma español
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    RegistroComponent,
    RegistroModelComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [
    // Configura el idioma en español
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
  ],
})
export class RegistroModule { }
