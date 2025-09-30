import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  constructor(private http:HttpClient){}


  getAllBooking(){
    return this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/geAllBookings")
  }

   getAllCars(){
    return this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars")
  }
}
