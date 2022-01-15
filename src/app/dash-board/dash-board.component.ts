import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../services/user-details';
import { EmployeeService } from '../services/employee.service';
import { AddEmployeeComponent } from '../add-employee/add-employee/add-employee.component';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
})
export class DashBoardComponent implements OnInit {
  user: any;
  empDataList: UserDetails[] = [];

  constructor(private employee: EmployeeService) {}

  ngOnInit() {
    this.employee.getUser().subscribe((data) => {
      this.user = data;
      this.empDataList = this.user.data;
      console.log(this.empDataList);
    });
  }

  delete(id: number) {
    this.empDataList.slice(id);
    this.employee.deleteEmp(id).subscribe((result) => {
      console.log(result);
    });
    alert('Your data is Deleted succesfully');
  }
}
