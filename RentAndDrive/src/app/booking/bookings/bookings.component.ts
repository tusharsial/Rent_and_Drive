import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/booking.model';
import { BookingService } from '../booking.service';
import { UserService } from 'src/app/users/user.service';
import { AdminService } from 'src/app/admin/admin.service';
import { OwnerService } from 'src/app/owner/owner.service';
import { BookingDetails } from 'src/app/bookingdetails.mode';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit{
    bookingArray:Booking[]=[];
    isDivVisible: boolean[] =[];
    present:any="";
    temp:BookingDetails={model:"", brand:"",
    image:"",
    capacity:0,
    name:"",
   email:"",
    mobile:""}
  
    bookingDetailsArray:BookingDetails[]=[];
    constructor(private service:BookingService,private userService:UserService,private adminService:AdminService,private ownerService:OwnerService){

    }

ngOnInit(){
    this.displayList();
    
}
displayList(){
    this.service.getbookingList().subscribe(data=>{
      const temp=JSON.stringify(data);
      let data1=JSON.parse(temp);
      this.bookingArray=data1;
      this.isDivVisible=Array(this.bookingArray.length).fill(false);
     
      
      this.bookingDetailsArray=Array(this.bookingArray.length).fill(this.temp);
    })
}
onClicked(i:number){
  this.isDivVisible[i]=!this.isDivVisible[i];
  this.present=this.bookingArray[i];
  console.log(this.present)
  this.userService.getsingleUser(this.present.userid).subscribe(data=>{
     this.bookingDetailsArray[i].name=data.name;
     this.bookingDetailsArray[i].mobile=data.mobile;
     this.bookingDetailsArray[i].email=data.email;
  });
  this.ownerService.getSingleCar(this.present.carid).subscribe(data=>{
    this.bookingDetailsArray[i].image=data.image;
    this.bookingDetailsArray[i].capacity=data.capacity;
    this.adminService.getCar(data.carid).subscribe(car=>{
      this.bookingDetailsArray[i].brand=car.brand;
      this.bookingDetailsArray[i].model=car.model;

    });
  // console.log(this.bookingDetailsArray)
   })
}
}