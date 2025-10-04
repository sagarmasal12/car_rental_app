import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [ReactiveFormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit{

  studentList:any[]=[];
  storestudent:any[]=[]

  http = inject(HttpClient)
  studentForm = new FormGroup({
    student_id:new FormControl(""),
    roll_no:new FormControl(""),
    first_name:new FormControl(""),
    last_name:new FormControl(""),
    email:new FormControl(""),
    fees:new FormControl(0)
  })

  ngOnInit(): void {
    this.getallstudent()
  }

  getallstudent(){
    debugger
  this.http.get("http://localhost:4208/getall").subscribe((res:any)=>{
    debugger
    this.studentList = res.data;
    console.log(this.studentList)
  })
  }

  createStudentdata(obj:any){
    this.http.post("http://localhost:4208/create",obj).subscribe((res:any)=>{
      if(res.result){
        alert('Student data created successfully..')
      }
    })
  }

  
}
