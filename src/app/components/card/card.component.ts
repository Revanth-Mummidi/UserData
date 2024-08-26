import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cardData:any;
  setEditCard():any{
    console.log('Edit Card');
  };
  handleDelete():any{  
    console.log('Delete Card');
  }
}
