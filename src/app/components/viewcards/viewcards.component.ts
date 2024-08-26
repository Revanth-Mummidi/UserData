import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-viewcards',
  templateUrl: './viewcards.component.html',
  styleUrls: ['./viewcards.component.scss']
})
export class ViewcardsComponent {
    @Input() category:any;
    data:any = [
      {
      firstname:'John',
      lastname:'Doe',
      email:'jhondoe@gmail.com',
      dob:'18/09/1998',
      description:'Hello there',
    },
    {
      firstname:'John',
      lastname:'Doe',
      email:'jhondoe@gmail.com',
      dob:'18/09/1998',
      description:'Hello there',
    },
    {
      firstname:'John',
      lastname:'Doe',
      email:'jhondoe@gmail.com',
      dob:'18/09/1998',
      description:'Hello there',
    },
    {
      firstname:'John',
      lastname:'Doe',
      email:'jhondoe@gmail.com',
      dob:'18/09/1998',
      description:'Hello there',
    },
    {
      firstname:'John',
      lastname:'Doe',
      email:'jhondoe@gmail.com',
      dob:'18/09/1998',
      description:'Hello there',
    },
    {
      firstname:'John',
      lastname:'Doe',
      email:'jhondoe@gmail.com',
      dob:'18/09/1998',
      description:'Hello there',
    },
    {
      firstname:'John',
      lastname:'Doe',
      email:'jhondoe@gmail.com',
      dob:'18/09/1998',
      description:'Hello there',
    },
    {
      firstname:'John',
      lastname:'Doe',
      email:'jhondoe@gmail.com',
      dob:'18/09/1998',
      description:'Hello there',
    },
    {
      firstname:'John',
      lastname:'Doe',
      email:'jhondoe@gmail.com',
      dob:'18/09/1998',
      description:'Hello there',
    }
  ];
}
