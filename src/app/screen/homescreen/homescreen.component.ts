import { Component } from '@angular/core';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss']
})
export class HomescreenComponent {
  categories=['Employees','Workers','Labours'];
  activeBar(event:any){
    console.log('Active Bar',event);
  }
}
