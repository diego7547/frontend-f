import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'src/app/core/security/auth.guard';

const routes: Routes = [
  
  {path:'personal',loadChildren:()=>import('./personal/personal.module').then( m => m.PersonalModule),
canActivate:[authGuard]},
{
  path:'horario',loadChildren:()=>import('./horario/horario.module').then(m => m.HorarioModule)
},
{
  path:'registro',loadChildren: ()=>import('./registro/registro.module').then(m => m.RegistroModule)
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
