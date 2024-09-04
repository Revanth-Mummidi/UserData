import { CommonModule, DatePipe, Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  standalone: true,
  selector: 'app-formcard',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formcard.component.html',
  styleUrls: ['./formcard.component.scss']
})
export class FormcardComponent {
  // constructor(private apiService: ApiService) {}
  constructor(private _location: Location, private apiservice: ApiService) { }
  @Input() cardsData: any[] = [];
  @Input() isEdit: boolean = false;
  
  editData: any;
  CardForm: any = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    type: new FormControl('Labour', Validators.required),
  });
  ngOnInit(): void {
    console.log("Location = ", this._location.getState());
    this.editData = this._location.getState();
    if (this.editData.email) {
      this.isEdit = true;
      console.log("Edit Data = ", this.editData);
      let date = new DatePipe('en-US').transform(this.editData.dob, 'yyyy-MM-dd');
      this.CardForm.patchValue({
        email: this.editData.email,
        firstname: this.editData.firstname,
        lastname: this.editData.lastname,
        description: this.editData.description,
        gender: this.editData.gender,
        dob: date,
        type: this.editData.type,
      });
    }
    else {
      this.isEdit = false;
    }
  }



  setOnCreateAction = (value: any): void => {
    if (value.submit && this.CardForm.valid) {
      if (this.isEdit) {
        console.log("Edit");
        const body={
          _id:this.editData._id,
          ...this.CardForm.value
        }
        this.apiservice.updateUser(body).subscribe({
          next: (data) => {
            console.log("Response in updating =", data);
            this._location.back();
          },
          error: (error) => {
            console.log("Error=", error);
          }
        });
      }
      else {
        console.log("Create");
        
        this.apiservice.createUser(this.CardForm.value).subscribe({
          next: (data) => {
            console.log("Response in creating =", data);
            this._location.back();
          },
          error: (error) => {
            console.log("Error=", error);
          }
        });
      }
    }
    else{
      if(this.CardForm.invalid && value.submit){
        alert("Please fill all the fields");
      }
      else{
        this._location.back();
      }
    }
    
  };

}
