export class CarModel {
  carId: number
  brand: string
  model: string
  year: number
  color: string
  dailyRate: number
  carImage: string
  regNo: string

  constructor(){
    this.brand='';
    this.carId=0;
    this.carImage='';
    this.color='';
    this.dailyRate=0;
    this.model='';
    this.regNo='';
    this.year=0;
  }
}

export interface APIResponce{
    message: string;
    result: string;
    data: any;
}

