import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';
import {Car} from '../../car.model'
import { Router } from '@angular/router';
import { OwnerService } from 'src/app/owner/owner.service';
import { CarDetails } from 'src/app/cardetails.model';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DateRangeDialogComponent } from 'src/app/date-range-dialog/date-range-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { BookingService } from 'src/app/booking/booking.service';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkoptions',
  templateUrl: './checkoptions.component.html',
  styleUrls: ['./checkoptions.component.css']
})
export class CheckoptionsComponent {
  startDate=new Date();
  endDate: Date=new Date();
  carArray:Car[]=[];
  carDetailsArray:CarDetails[]=[];
  isDateOpen:boolean=false;
  isClicked:boolean=false;
  booking:any={};
  constructor(private dialog:MatDialog,private adminService:AdminService,private router:Router,private service:OwnerService,private bservice:BookingService,private userService: UserService){};
  ngOnInit(): void {
      this.displayList();
  }
  displayList(){
    this.adminService.getCarList().subscribe(cars=>{
      const temp=JSON.stringify(cars);
      let cars1=JSON.parse(temp);
      this.carArray=cars1;
      })
  }
  onClicked(car:any){
    this.isClicked=true;
    if(this.isClicked){
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.service.getCarList(car.id).subscribe(data=>{
          this.carDetailsArray=data;
          //this.isDateOpen=Array(data.length).fill(false);
      });
    } 
    
  }
  onCancel(){
    this.isDateOpen=false;
  }
  onSubmit(form:NgForm){
       this.booking.startDate=form.value.startDate;
       this.booking.endDate=form.value.endDate;
       this.isDateOpen=false;
       this.bservice.addNewBooking(this.booking).subscribe(data=>{
        console.log(data);
        alert("Thanks, your request has been submitted!")
       })
       
       
  }
  onSendEnquiry(car:any){
      this.isDateOpen=true;
     
      // const dialogRef = this.dialog.open(DateRangeDialogComponent, {
      //   width: '400px',
      //   height:'250px',
      //   position: {top: '20px', left:'500px', bottom:'40px',} 
        
      // });
      
        // dialogRef.afterClosed().subscribe(result => {
        //    if(result!=null){
          
        //     this.startDate=result.startDate;
        //     this.endDate=result.endDate;
            //console.log(typeof(this.startDate));
          //   const year = this.startDate.getFullYear();
          //   const month = String(this.startDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
          //   const day = String(this.startDate.getDate()).padStart(2, '0');
         
          //   const formattedStartDate = `${year}/${month}/${day}`;
          //  // console.log("HIIIII     "    +formattedStartDate);
          //   const lyear = this.endDate.getFullYear();
          //   const lmonth = String(this.endDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
          //   const lday = String(this.endDate.getDate()).padStart(2, '0');
           

          //   const formattedEndDate = `${lyear}/${lmonth}/${lday}`;
          //   console.log("HIIIII     " +formattedEndDate);
            // this.booking.startDate=formattedStartDate;
            // this.booking.endDate=formattedEndDate;
            this.booking.amount=car.cost;
            this.booking.carid=car.id;
          
            this.booking.userid=this.userService.getID();
            console.log(this.booking);
           
           }
        // });
      
  }


