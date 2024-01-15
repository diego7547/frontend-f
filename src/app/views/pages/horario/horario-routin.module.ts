import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'src/app/core/security/auth.guard';
import { HorarioComponent } from './horario.component';

const routes: Routes = [
  {path:'',component:HorarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorarioRoutinModule { }
