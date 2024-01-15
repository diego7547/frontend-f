import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';

import { ReactiveFormsModule } from '@angular/forms';

import localePy from '@angular/common/locales/es';

import { ButtonModule } from 'primeng/button';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localePy, 'es');

@NgModule({
  declarations: [
    PanelComponent,
    
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
   
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
  ]
})
export class PanelModule { }
