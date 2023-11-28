import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarDetails } from '../cardetails.model';
@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private sharedData:any;
  private baseUrl= "http://localhost:9000/"
  constructor(private http:HttpClient) {}
    getCarList(id:number):Observable<CarDetails[]>{
       return this.http.get<CarDetails[]>(this.baseUrl+'cardetails'+'/'+id);
    }
    addCarDetails(data:any):Observable<CarDetails[]>{
      return this.http.post<CarDetails[]>(this.baseUrl+'cardetails',data);
    }
    getSingleCar(id:number):Observable<CarDetails>{
      return this.http.get<CarDetails>(this.baseUrl+'cardetailsbyId'+'/'+id);
    }
  setData(data:any)
  {
    this.sharedData=data;
  }
  getData(){
    return this.sharedData;
  }
}
