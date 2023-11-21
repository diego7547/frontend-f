import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './personal.component';
import { authGuard } from 'src/app/core/security/auth.guard';

const routes: Routes = [
  {path:'',component:PersonalComponent, canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
