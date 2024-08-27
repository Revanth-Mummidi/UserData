import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/services/api-service.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  constructor(private _location : Location , private apiservice : ApiService) { }
  @Input() cardData:any;
  setEditCard():any{
   
    console.log('Edit Card');
  };
  handleDelete():any{  
    this.apiservice.deleteUser(this.cardData._id).subscribe({
      next:(res)=>{
      console.log("Response in deleting",res);
      location.reload();
    },
    error:(err)=>{
      console.log("Error",err);
    }
  });
    console.log('Delete Card');
  }
}
