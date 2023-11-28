import { Component,OnInit,NgModule,ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import {Car} from '../../car.model'
import {NgForm,FormControl} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {
    carArray:Car[]=[];
    isClicked:boolean=false;
    newCar:any="";
    constructor(private adminService:AdminService,private router:Router){};
    ngOnInit(): void {
        this.displayList();
    }
    onAddCar(){
       this.isClicked=!this.isClicked;
    }
    onSubmit(form:NgForm){
        this.newCar=form.value;
        this.adminService.addNewCar(this.newCar).subscribe(car=>{
          console.log(car);
          this.displayList();})
        
    }
    displayList(){
      this.adminService.getCarList().subscribe(cars=>{
        const temp=JSON.stringify(cars);
        let cars1=JSON.parse(temp);
        this.carArray=cars1;
        })
    }
    onClickBooking(){
      this.router.navigate(['/bookings']);
    }
   
    
}
