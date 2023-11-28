import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn:boolean=false;
   constructor(private authservice:AuthService,private router:Router,private service:UserService){}
   ngOnInit(){
       if(this.authservice.isAuthenticatedAdmin() || this.authservice.isAuthenticatedUser())
             this.isLoggedIn=true;
        else
        this.isLoggedIn=false;
        this.service.getEvent().subscribe(() => {
             this.isLoggedIn=true;
        });
   }
   onLoggedOut(){
    this.isLoggedIn=false;
    this.service.setID(0);
    this.authservice.setAuthenticatedAdmin(false);
    this.authservice.setAuthenticatedUser(false);
    this.router.navigate([""])
   }
}
