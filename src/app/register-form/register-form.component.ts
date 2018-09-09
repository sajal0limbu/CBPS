import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  success: boolean =false;
  submitted = false;
  constructor(private _http: HttpService, private cookie: CookieService, private router: Router) { }

  userForms: FormGroup;
  ngOnInit() {
    this.registerForm=new FormGroup({
      email:new FormControl(),
      firstName:new FormControl(),
      lastName:new FormControl(),
      username:new FormControl(),
      password:new FormControl(),
      phoneNumber: new FormControl()
    });
  }
  register(){
    console.log("user_data", this.registerForm.value);
    this._http.register(this.registerForm.value).subscribe(
      data=>{
        console.log("token", data);
        this.success = true;
        this.router["/login"];

      },
      error=>{
        console.log("register error",error);
      }
    )
  }
}
