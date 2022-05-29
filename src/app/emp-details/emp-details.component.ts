import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Employee } from '../model/employee';

@Component({
  selector: "app-emp-details",
  templateUrl: "./emp-details.component.html",
  styleUrls: ["./emp-details.component.css"],
})
export class EmpDetailsComponent implements OnInit {
  empId: number;
  empObj = <Employee>{};

  constructor(private route: ActivatedRoute, private service: HttpService) {}

  ngOnInit() {
    this.getDataFromUrl();
    this.getEmployeeDetailById();
  }

  getDataFromUrl() {
    this.route.paramMap.subscribe((param) => {
      this.empId = +param.get("id");
      //console.log(this.empId)
    });
  }

  getEmployeeDetailById() {
    this.service.getEmpById(this.empId).subscribe((response) => {
      //console.log(response)
      this.empObj = <Employee>response;
      console.log(this.empObj);
    });
  }

  OnUpdate(){
  
    alert("update button not working");
  }
}
