import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private router:Router,private apiservice:ApiService) { };
  CardForm: any = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    confirmpassword:new FormControl('',Validators.required)   
  });
  handleSignUp(){
    if(this.CardForm.valid && this.CardForm.value.password==this.CardForm.value.confirmpassword){
      const body={
        email:this.CardForm.value.email,
        password:this.CardForm.value.password,
        username:this.CardForm.value.username
      }
      this.apiservice.register(body).subscribe({
      next:(response : any)=>{

        console.log(response.token);
        sessionStorage.setItem('token',response.token);
        this.router.navigate(['/']);
      },
      error:(error)=>{
        console.log(error);
      }    
    });
    // this.router.navigate(['/']);
    }
    else{
      alert("Please fill all the fields");
    }
  }
}
