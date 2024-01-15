import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { NotFoundComponent } from './views/auth/not-found/not-found.component';
import { authGuard } from './core/security/auth.guard';
import { loginGuard } from './core/security/login.guard';



const routes: Routes = [
  {path:'',component:LayoutComponent,
  children:[
    {path:'',redirectTo:'/pages/dashboard',pathMatch:'full'},

    {path:'pages',loadChildren:()=>import('./views/pages/pages.module').then(m => m.PagesModule)}
  ],
  canActivate:[authGuard]  
  }
,
  {
    path:'auth',loadChildren:()=>import('./views/auth/auth.module').then(m => m.AuthModule),canActivate:[loginGuard]
  },
  {
    path:'notFound',component:NotFoundComponent
  },
  {path:'panel',loadChildren:()=> import ('./views/pages/panel/panel.module').then(m => m.PanelModule)},
  { path: '**', redirectTo: '/auth/login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
