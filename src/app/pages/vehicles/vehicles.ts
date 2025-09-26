import { Component, inject } from '@angular/core';
import { APIResponce, CarModel } from '../../model/car';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehicles',
  imports: [FormsModule],
  templateUrl: './vehicles.html',
  styleUrls: ['./vehicles.css']
})
export class Vehicles {

  newcarobj:CarModel;
  http = inject(HttpClient)

  constructor(){
    this.newcarobj = new CarModel();

  }

  onSaveCar(){
    debugger
    this.http.post<APIResponce>("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar",this.newcarobj).subscribe((res:APIResponce)=>{
      debugger
      if(res.result){
        alert("Vehicle Created Successfully")
      }else{
        alert(res.message)
      }
    })
  }



}
