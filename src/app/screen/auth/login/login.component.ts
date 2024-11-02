import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {  FormControl,
  FormGroup,
  Validators  } from '@angular/forms';
import { ApiService } from 'src/app/services/api-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router:Router , private apiservice:ApiService) { };
  CardForm: any = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    
  });
  handleLogin(){
    if(this.CardForm.valid){
    const body={
      email:this.CardForm.value.email,
      password:this.CardForm.value.password,
    }
      this.apiservice.login(body).subscribe({
      next:(response : any)=>{
        console.log(response.token);
        sessionStorage.setItem('token',response.token);
        this.router.navigate(['/']);
      },
      error:(error)=>{
        console.log(error);
      }
    });
    this.router.navigate(['/']);
    }
    else{
      alert("Please fill all the fields");
    }
  }
}
