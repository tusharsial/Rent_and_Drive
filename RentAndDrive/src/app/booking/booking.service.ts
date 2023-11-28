import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private baseUrl= "http://localhost:9000/"
  constructor(private http:HttpClient) {}
    getbookingList():Observable<Booking[]>{
       return this.http.get<Booking[]>(this.baseUrl+'bookings');
    }
    addNewBooking(data:any):Observable<Booking>{
      return this.http.post<Booking>(this.baseUrl+'bookings',data);
    }
    deleteBooking(id:any):Observable<Booking>{
      return this.http.delete<Booking>(this.baseUrl+'bookings'+'/'+id);
    }
   }