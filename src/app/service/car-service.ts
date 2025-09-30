import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  constructor(private http:HttpClient){}

  apiUrl:string = "https://freeapi.miniprojectideas.com/api/CarRentalApp"

  getAllBooking(){
    return this.http.get(this.apiUrl+"/geAllBookings")
  }

   getAllCars(){
    return this.http.get(this.apiUrl+"/GetCars")
  }

  saveBooking(obj:any){
    return this.http.post(this.apiUrl+"/CreateNewBooking",obj)
  }
}
