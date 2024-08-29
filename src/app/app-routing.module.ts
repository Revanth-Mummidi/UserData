import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcardComponent } from './components/formcard/formcard.component';
import { HomescreenComponent } from './screen/homescreen/homescreen.component';

const routes: Routes = [
  { path: 'form', component : FormcardComponent },
  { path: '', component : HomescreenComponent },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
