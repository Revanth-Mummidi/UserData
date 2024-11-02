import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcardComponent } from './components/formcard/formcard.component';
import { HomescreenComponent } from './screen/homescreen/homescreen.component';
import { authPermissionGuard } from './gaurds/auth-permission.guard';

const routes: Routes = [
  { path: 'form', canActivate:[authPermissionGuard] , component: FormcardComponent },
  { path: '',canActivate:[authPermissionGuard], component: HomescreenComponent },
  { path: 'auth', loadChildren: () => import('./screen/auth/authlayout/authlayout.module').then(m => m.AuthlayoutModule) },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
