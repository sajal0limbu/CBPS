import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser:any;
  username:string;
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    
  this.currentUser= JSON.parse(localStorage.getItem('currentUser'));
  this.username = this.currentUser.username;
  }

  logout(){
    this.authService.logout();
  }

}
