import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;
  AdminloginForm: FormGroup | any;
  email: any;
  password: any;

  constructor(private formBuilder: FormBuilder,private router: Router,private http:HttpClient) { }
  addlogin():void{
    const url = `http://localhost:8080/register/${this.email}/${this.password}`;
    this.http.get<number>(url)
    .subscribe(createdUser =>{
      console.log(createdUser);
      if(createdUser==1)
      {
        //console.log("Login suceesfull");
       // alert("Login Sucessfully!");
       this.router.navigate(['/home']);
      }
      else
      {
        console.log("Login not sucessfull");
       alert("Invalid User!!");

      }

    });
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, this.validateEmail]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.AdminloginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, this.validateEmail]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  validateEmail(control: AbstractControl): { [key: string]: boolean } | null {
    const email = control.value;
    const validEmailRegex = /^[a-z]+@gmail\.com$/; // Matches email ending with @gmail.com

    if (!validEmailRegex.test(email)) {
      return { 'invalidEmail': true };
    }

    return null;
  }


  AdminonSubmit() {
    if (this.AdminloginForm.invalid) {
      this.AdminloginForm.markAllAsTouched();
      return;
    }
    // Submit the form or perform further actions
    console.log(this.AdminloginForm.value);
  }
}
