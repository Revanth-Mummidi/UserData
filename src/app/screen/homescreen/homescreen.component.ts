import { Component } from '@angular/core';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss']
})
export class HomescreenComponent {
  categories=['All','Employees','Workers','Labours'];
  category='All';
  activeBar(event:any){
    console.log('Active Bar',event);
  };
  handleMatTabChange(event:any){
    this.category=this.categories[event.index];
    console.log('Mat Tab Change',event);
  }
}
