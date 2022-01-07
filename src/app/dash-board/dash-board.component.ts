import { Component, OnInit } from '@angular/core';
// import { UserDetails } from '../services/user-details';
// import { EmployeeService } from '../services/employee.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


// export class DashBoardComponent implements OnInit {
//   registerForm!:FormGroup;
//   submitted=false;
//   user:any;
//   empDetailList:UserDetails[]=[];

//  constructor(private employee: EmployeeService ){}
//  ngOnInit(){
//    debugger
//    this.employee.getUser().subscribe( (data: any) => { 
//      this.user=data;
//      this.empDetailList=this.user.employeePayrollDataList;
//        console.log(this.empDetailList);

//         });

//   }

//     get f(){
//     return this.registerForm.controls;
//   }
// }
