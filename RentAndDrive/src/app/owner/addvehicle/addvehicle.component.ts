import { Component,EventEmitter} from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';
import {Car} from '../../car.model'
import { Router } from '@angular/router';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.component.html',
  styleUrls: ['./addvehicle.component.css']
})
export class AddvehicleComponent {
  carArray:Car[]=[];
  constructor(private adminService:AdminService,private router:Router,private service:OwnerService){};
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
  onSelectedCar(car:any){
    this.service.setData(car);
    this.router.navigate(['/filldetails']);
  }
}
