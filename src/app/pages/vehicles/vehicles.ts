import { Component, inject, OnInit } from '@angular/core';
import { APIResponce, CarModel } from '../../model/car';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicles',
  imports: [FormsModule,CommonModule],
  templateUrl: './vehicles.html',
  styleUrls: ['./vehicles.css']
})
export class Vehicles implements OnInit {

  newcarobj:CarModel;
  http = inject(HttpClient)
  carList:CarModel[]=[]

  constructor(){
    this.newcarobj = new CarModel();

  }
  ngOnInit(): void {
    this.getallCars();
    this.onSaveCar();

  }

  getallCars(){
    debugger
    this.http.get<APIResponce>("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((res:APIResponce)=>{
      debugger
      this.carList = res.data
      debugger
      console.log(this.carList)
    })
  }

  onSaveCar(){
    debugger
    this.http.post<APIResponce>("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar",this.newcarobj).subscribe((res:APIResponce)=>{
      debugger
      if(res.result){
        alert("Vehicle Created Successfully");
        this.getallCars();
      }else{
        alert(res.message)
      }
    })
  }
  onClear(){
    this.newcarobj = new CarModel()
  }

  onEdit(data:CarModel){
    this.newcarobj = data;
  }

  onUpdate(){
    this.http.put<APIResponce>("https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar",this.newcarobj).subscribe((res:APIResponce)=>{
      this.carList = res.data
      this.getallCars();
      this.onClear();
    })
  }

  onDeleteCarbyId(id:number){
    this.http.delete<APIResponce>("https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarIdcarid?carId="+id).subscribe((res:APIResponce)=>{
      if(res.result){
        alert("Car deleted Succesfully")
        this.getallCars();
      }else{
        alert(res.message)
      }
    })
  }



}
