import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './authlayout-routing.module';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { AuthlayoutComponent } from './authlayout.component';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent,SignupComponent,AuthlayoutComponent],
  imports: [
    AuthRoutingModule,
    RouterOutlet,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AuthlayoutModule { }
