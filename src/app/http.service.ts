import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: "root",
})
export class HttpService {
  //private baseUrl:string="http://localhost:8080/employee/"
  // private baseUrl: string =
  //  "http://awsangularbackendapis-env-1.eba-vmk8gnm3.us-east-1.elasticbeanstalk.com/employee/";
    private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  loginCheck(obj) {
    return this.http.post(`${this.baseUrl}login`, obj);
  }

  getEmpList() {
    return this.http.get(`${this.baseUrl}getallemployee`);
  }

  getEmpById(id) {
    return this.http.get(`${this.baseUrl}getempbyid/${id}`);
  }

  getAllCountry() {
    return this.http.get(`${this.baseUrl}getallcountry`);
  }

  addEmployee(obj) {
    return this.http.post(`${this.baseUrl}addemployee`, obj, {
      responseType: "text",
    });
  }

  updateEmployee(obj) {
    return this.http.put(`${this.baseUrl}updateemp`, obj, {
      responseType: "text",
    });
  }

  deleteEmployee(id) {
    return this.http.delete(`${this.baseUrl}deleteemp/${id}`, {
      responseType: "text",
    });
  }
}

