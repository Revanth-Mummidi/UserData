import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopbarComponent } from './components/topbar/topbar.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ViewcardsComponent } from './components/viewcards/viewcards.component';
import { CardComponent } from './components/card/card.component';
import { FormcardComponent } from './components/formcard/formcard.component';
import { HomescreenComponent } from './screen/homescreen/homescreen.component';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { LoginComponent } from './screen/auth/login/login.component';
import { SignupComponent } from './screen/auth/signup/signup.component';
import { AuthlayoutComponent } from './screen/auth/authlayout/authlayout.component';
import { AuthRoutingModule } from './screen/auth/authlayout/authlayout-routing.module';
import { AuthlayoutModule } from './screen/auth/authlayout/authlayout.module';


@NgModule({

  declarations: [
    AppComponent,
    TopbarComponent,
    ViewcardsComponent,
    CardComponent,
    HomescreenComponent,
    DialogContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
