import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Car} from '../car.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl= "http://localhost:9000/"
  constructor(private http:HttpClient) {}
    getCarList():Observable<Car[]>{
       return this.http.get<Car[]>(this.baseUrl+'cars');
    }
    addNewCar(data:any):Observable<Car[]>{
      return this.http.post<Car[]>(this.baseUrl+'cars',data);
    }
    getCar(id:number):Observable<Car>{
      return this.http.get<Car>(this.baseUrl+'cars'+'/'+id);
    }
   }

