import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: "app-add-employee",
  templateUrl: "./add-employee.component.html",
  styleUrls: ["./add-employee.component.css"],
})
export class AddEmployeeComponent implements OnInit {
  
  allCountry:any[]=[];

  constructor(private service:HttpService,
               private router:Router) {}

  ngOnInit() {
    this.getAllCountry();

  }

  getAllCountry(){
    this.service.getAllCountry()
    .subscribe((response)=>{
      this.allCountry=(<any>response);
    })
  }

  onSubmit(f:NgForm){
    let obj={
      name:f.value.name,
      department:f.value.department,
      status:f.value.status,
      phoneno:f.value.phoneno,
        country:{
          cid:f.value.country.cid,
          cname:f.value.country.cname
        },
        createddtm:Date.now(),
        createdby:sessionStorage.getItem("username"),
        updateddtm:Date.now(),
        updatedby:sessionStorage.getItem("username")
    }
    this.service.addEmployee(obj)
    .subscribe((response)=>{
      console.log(response);
      this.router.navigate(['/home']);
    })

  }
}
