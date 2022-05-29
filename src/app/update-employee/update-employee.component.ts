import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Employee } from '../model/employee';

@Component({
  selector: "app-update-employee",
  templateUrl: "./update-employee.component.html",
  styleUrls: ["./update-employee.component.css"],
})
export class UpdateEmployeeComponent implements OnInit {
  @Input() parentData = <Employee>{};

  allCountry: any[] = [];
  isSubmitDissabled: boolean = true;
  backendResponse: string = "";

  constructor(private service: HttpService) {}

  ngOnInit() {
    this.getAllCountry();
  }

  getAllCountry() {
    this.service.getAllCountry().subscribe((response) => {
      this.allCountry = <any>response;
    });
  }

  onUpdate() {
    this.parentData.updatedby=sessionStorage.getItem("username");
    this.parentData.updateddtm=Date.now();
    this.service.updateEmployee(this.parentData)
    .subscribe((response)=>{
      this.backendResponse=response;
      this.isSubmitDissabled=false;
    })
  }
}
