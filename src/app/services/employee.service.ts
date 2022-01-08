import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from './user-details';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private httpClient: HttpClient ) { }

   /**
   * Purpose : GET request method to hit the HTTP server.
   * @returns the get request response.
   */

    getEmployeePayrollData(){
    return this.httpClient.get(`http://localhost:8080/employeepayrollservice/get`);
  }
}
