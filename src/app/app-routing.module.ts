import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcardComponent } from './components/formcard/formcard.component';
import { HomescreenComponent } from './screen/homescreen/homescreen.component';
import { LoginComponent } from './screen/auth/login/login.component';
import { SignupComponent } from './screen/auth/signup/signup.component';
import { AuthlayoutComponent } from './screen/auth/authlayout/authlayout.component';
import { AuthlayoutModule } from './screen/auth/authlayout/authlayout.module';

const routes: Routes = [
  { path: 'form', component: FormcardComponent },
  { path: '', component: HomescreenComponent },
  { path: 'auth', loadChildren: () => import('./screen/auth/authlayout/authlayout.module').then(m => m.AuthlayoutModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
