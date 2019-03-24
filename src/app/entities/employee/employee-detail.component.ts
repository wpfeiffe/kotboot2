import { Component, OnInit } from '@angular/core';
import {Employee} from "./employee.model";
import {EmployeeService} from "./employee.service";
import {Location} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee = {id: 0, firstName: "", lastName: "", title: ""};
  initId: string;

  constructor(private employeeService: EmployeeService,
              private location: Location,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.initId = params['id'];

      let employeeObservalble: Observable<Employee> = this.employeeService.get(this.initId);
      employeeObservalble.subscribe(
        result => this.employee = result,
        error => console.log(error)
      );
    });
  }

  onSubmit(value) {
    console.log(value)
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.employeeService.update(this.employee)
      .subscribe(
        result => this.employee = result,
        error => console.log(error));
  }
}
