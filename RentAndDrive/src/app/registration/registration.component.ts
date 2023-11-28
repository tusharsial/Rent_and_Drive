import { Component } from '@angular/core';
import { UserService } from '../users/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  UserDetails:any="";
  email:string="";
      constructor(private service:UserService,private router:Router,private authservice:AuthService){}
      onSubmit(form:NgForm){
         this.UserDetails=form.value;
         this.email=form.value.email;
         this.service.getuser(this.email).subscribe(data=>{
          if(data==null){
            this.UserDetails.role="USER";
            this.service.addUser(this.UserDetails).subscribe(data=>{
             console.log(data);
             this.authservice.setAuthenticatedUser(true);
             this.service.setID(data.id)
             this.service.sendEvent();
             this.router.navigate(['/choice'])
            })
          }
          else
          {
            alert("Email is already taken");
            this.router.navigate([''])
          }
         })
        
      }
}
