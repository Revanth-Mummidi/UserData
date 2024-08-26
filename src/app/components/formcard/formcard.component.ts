import { CommonModule, DatePipe,Location} from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formcard',
  templateUrl: './formcard.component.html',
  styleUrls:['./formcard.component.scss']
})
export class FormcardComponent {
  // constructor(private apiService: ApiService) {}
  constructor(private _location: Location) 
  {}
  @Input() cardsData: any[] = [];
  @Input() isEdit: boolean = false;
  @Input() editData: any;
  @Output() setOnCreateModal = new EventEmitter<boolean>();
  @Output() setOnEditModal = new EventEmitter<boolean>();
  CardForm:any = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
    if (this.isEdit) {
      let date=new DatePipe('en-US').transform(this.editData.dob, 'yyyy-MM-dd');
      this.CardForm.patchValue({
        email: this.editData.email,
        firstname: this.editData.firstname,
        lastname: this.editData.lastname,
        description: this.editData.description,
        gender: this.editData.gender,
        dob: date,
      });
    }
  }

 

  setOnCreateAction = (value: any): void => {
    this._location.back();
     };
  
}
