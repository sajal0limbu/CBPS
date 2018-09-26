// import { Component, OnInit } from '@angular/core';
// import { HttpService } from '../services/http.service';
// import { FormGroup, FormControl } from '@angular/forms';
// import { CookieService } from 'ngx-cookie-service';
// import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../_services/authentication.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService) {}

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      // reset login status
      this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.loading = true;
      this.authenticationService.login(this.f.username.value, this.f.password.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.router.navigate([this.returnUrl]);
              },
              error => {
                  this.error = error;
                  this.loading = false;
              });
  }
  // submitted = false;
  // success: boolean = false;
  // userRole1: string;
  // userRole2: string;
  // roles: string;

  // createForm: FormGroup

  // constructor(private _http:HttpService, private cookie:CookieService, private router:Router){}

  // ngOnInit() {

  //   this.createForm = new FormGroup({
  //     username : new FormControl(),
  //     password : new FormControl()
  //   });
  // }

  // login(){
  //   this.submitted = true;
  //   console.log("user input", this.createForm.value);
  //   this._http.login(this.createForm.value).subscribe(
  //     data =>{
  //       console.log("token",data);
  //       this.success = true;
  //       this.cookie.set('token',data['token']);
  //       this.cookie.set('roles',data['roles']);
  //       this.roles = data["roles"];
  //       this.userRole1 = this.roles[0];
  //       this.userRole2 = this.roles[1];
  //       this.cookie.set('role1',this.userRole1["name"]);
  //       if(this.userRole2 != null)
  //         this.cookie.set('role2',this.userRole2["name"]);
  //       console.log("role1",this.cookie.get('role1'));
  //       console.log("role2",this.cookie.get('role2'));
  //       let checkrole1 = this.cookie.get('role1');
  //       let checkrole2 = this.cookie.get('role2');
  //       if (checkrole1 == 'ADMIN' || checkrole2 == 'ADMIN'){
  //         this.router.navigate(['/admindashboard']);
  //       }else if (checkrole1 == 'USER' || checkrole2 == 'USER'){
  //         this.router.navigate(['/products']);
  //       }else {
  //         this.router.navigate(['/home']);
  //       }
  //     },
  //     error=>{
        
  //       console.log("error", error);
  //     }
  //   );

  // }

}
