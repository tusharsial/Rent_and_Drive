import { Component } from '@angular/core';
import {NgForm,FormControl} from '@angular/forms'
import { UserService } from '../users/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    email:string="";
    password:string="";
    constructor(private service:UserService,private router:Router,private authservice:AuthService){};
    onSubmit(form:NgForm){
         this.email=form.value.email;
         this.password=form.value.password;
         this.service.getuser(this.email).subscribe(data=>{
              if(data==null)
                 {
                  alert("Email id does not exist!")
                 }
              else if(data.password!=this.password)
              { 
                alert("Wrong Password")
              }
              else if(data.password==this.password)
              {
                  if(data.role=="ADMIN"){
                  this.authservice.setAuthenticatedAdmin(true);
                  alert("You are logged in as Admin")
                  this.router.navigate(['/addcar']);
                  this.service.sendEvent();
                  }
                else{
                  this.authservice.setAuthenticatedUser(true);
                  this.service.setID(data.id);
                  this.router.navigate(['/choice']);
                  this.service.sendEvent();
                }
              }
         })
    }
    onRegister(){
      this.router.navigate(['/register'])
    }
}
