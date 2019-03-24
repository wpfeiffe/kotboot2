import { Component, OnInit } from '@angular/core';
import {Department} from "./department.model";
import {DepartmentService} from "./department.service";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments: Department[] = [];
  errorMessage: string = "";
  selectionMessage: string = "";

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.getDepartments();
  }

  getDepartments() {
    this.departmentService.getDepartments()
      .subscribe(
        departments => this.departments = departments,
        error => this.errorMessage = error);
  }

  onRowSelect(event){
    console.log(event);
    this.selectionMessage = `You selected department "${event.data.deptCode} ${event.data.deptName}"`;
  }

  onRowUnselect(event){
    console.log(event);
    this.selectionMessage = `No selection`
  }

  deleteDepartment(department: Department) {
    console.log("Told to delete department:")
    console.log(department)
  }

}
