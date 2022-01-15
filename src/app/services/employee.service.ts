import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { UserDetails } from './user-details';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private httpClient: HttpClient ) { }

  baseUrl: string = environment.api_url;
   /**
   * Purpose : GET request method to hit the HTTP server.
   * @returns the get request response.
   */
    getUser(){
      return this.httpClient.get(environment.api_url+'/get');
    }
   /**
   * Purpose : POST request method to hit the HTTP server.
   *  employee details to be stored in the database.
   * @returns the post request response.
   */
    url=environment.api_url+'/create';
    createContact(reourceBody: { name: string; gender: string; department: string[]; salary: string; startDate: string; note: string; profilePic: string; }){
      return this.httpClient.post(this.url,reourceBody)
    }
  
  
   deleteEmp(id: any){
    return this.httpClient.delete(`${this.baseUrl}/remove/${id}`);
  }
  
}
