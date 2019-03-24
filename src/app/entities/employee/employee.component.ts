import { Component, OnInit } from '@angular/core';
import {Employee} from "./employee.model";
import {EmployeeService} from "./employee.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];
  errorMessage: string = "";
  selectionMessage: string = "";

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(
        employees => this.employees = employees,
        error => this.errorMessage = error);
  }

  onRowSelect(event){
    console.log(event);
    this.selectionMessage = `You selected employee "${event.data.firstName} ${event.data.lastName}"`;
  }

  onRowUnselect(event){
    console.log(event);
    this.selectionMessage = `No selection`
  }
  
  deleteEmployee(employee: Employee) {
    console.log("Told to delete employee:")
    console.log(employee)
  }



}
