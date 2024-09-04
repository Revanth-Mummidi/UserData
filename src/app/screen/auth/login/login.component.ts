import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {  FormControl,
  FormGroup,
  Validators  } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router:Router) { };
  CardForm: any = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    
  });
  handleLogin(){
    if(this.CardForm.valid){
    this.router.navigate(['/']);
    }
    else{
      alert("Please fill all the fields");
    }
  }
}
