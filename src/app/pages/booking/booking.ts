import { Component, inject, Inject, OnInit } from '@angular/core';
import { CarService } from '../../service/car-service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  imports: [ReactiveFormsModule],
  templateUrl: './booking.html',
  styleUrl: './booking.css'
})
export class Booking implements OnInit{

  bookingSrv = inject(CarService);

  carList:any[]=[]

  bookingForm = new FormGroup({

  customerName:new FormControl(""),
  customerCity:new FormControl(""),
  mobileNo:new FormControl(""),
  email:new FormControl(""),
  bookingId:new FormControl(""),
  carId:new FormControl(""),
  bookingDate:new FormControl(""),
  discount:new FormControl(""),
  totalBillAmount:new FormControl(""),
  })

  ngOnInit(): void {
    this.getCarList();

  }

  getCarList(){
    this.bookingSrv.getAllCars().subscribe((res:any)=>{
      this.carList= res.data
    })
  }

  getBookings(){
    this.bookingSrv.getAllBooking().subscribe((res:any)=>{
      this.carList= res.data
    })
  }
  
}
