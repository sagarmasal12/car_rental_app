import { Component, inject, Inject, OnInit } from '@angular/core';
import { CarService } from '../../service/car-service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ReusablePage } from "../reusable-page/reusable-page";

@Component({
  selector: 'app-booking',
  imports: [ReactiveFormsModule, DatePipe, ReusablePage],
  templateUrl: './booking.html',
  styleUrl: './booking.css'
})
export class Booking implements OnInit{

  bookingSrv = inject(CarService);

  carList:any[]=[]
  bookignList:any[]=[]

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
    this.getBookings();
    this.onclickSave()

  }

  getCarList(){
    this.bookingSrv.getAllCars().subscribe((res:any)=>{
      this.carList= res.data
    })
  }

  getBookings(){
    this.bookingSrv.getAllBooking().subscribe((res:any)=>{
      this.bookignList= res.data
      console.log("booking-data",this.bookignList)
    })
  }

  onclickSave(){
    debugger
    const formvalue = this.bookingForm.value;
    this.bookingSrv.saveBooking(formvalue).subscribe((res:any)=>{
      if(res.result){
        alert("Car Book Successfully");
        this.getCarList();
        this.getBookings();
      }else{
        alert(res.message)
      }
    })
  }

  
}
