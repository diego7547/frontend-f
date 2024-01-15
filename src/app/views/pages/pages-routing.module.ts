import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'src/app/core/security/auth.guard';

const routes: Routes = [
  
  
  {path:'personal',loadChildren:()=>import('./personal/personal.module').then( m => m.PersonalModule),
canActivate:[authGuard]},
{
  path:'horario',loadChildren:()=>import('./horario/horario.module').then(m => m.HorarioModule),canActivate:[authGuard]
},
{
  path:'registro',loadChildren: ()=>import('./registro/registro.module').then(m => m.RegistroModule),canActivate:[authGuard]
},
{
  path:'dashboard',loadChildren:()=>import('./dashboard/dashboard.module').then(m => m.DashboardModule),canActivate:[authGuard]
},
{path:'contacto',loadChildren:()=>import('./contacto/contacto.module').then(m => m.ContactoModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
