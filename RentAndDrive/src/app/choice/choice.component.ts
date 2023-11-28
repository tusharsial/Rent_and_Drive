import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent {
  constructor(private router:Router){

  }
  onClickFirst(){
   
    this.router.navigate(["/users"]);

  }
  onClickSecond(){
    this.router.navigate(["/addcardetails"])
  }

}
