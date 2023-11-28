import { Component,OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';
import {Car} from '../../car.model'
import { Router } from '@angular/router';
import { OwnerService } from '../owner.service';
import {NgForm,FormControl} from '@angular/forms'
import { CarDetails } from 'src/app/cardetails.model';

@Component({
  selector: 'app-fill-details',
  templateUrl: './fill-details.component.html',
  styleUrls: ['./fill-details.component.css']
})
export class FillDetailsComponent implements OnInit {
  selected_car:Car=this.service.getData();
  cardetails:any="";
  constructor(private adminService:AdminService,private router:Router,private service:OwnerService){};
  ngOnInit(): void {
    this.selected_car=this.service.getData();
    console.log(this.selected_car);
  }
  onSubmit(form:NgForm){
    this.cardetails=form.value;
    this.cardetails.availability=true;
    this.service.addCarDetails(this.cardetails).subscribe(data=>{
      console.log(data);
      alert("Form Submitted Successfully!");
      this.router.navigate(['/addcardetails']);
    });
    
    
   // this.router.navigate(['/addcardetails']);
  }
  OnCancel(){
    this.router.navigate(['/addcardetails']);
  }
 
}
