import { Component, OnInit } from '@angular/core';
import {Department} from "./department.model";
import {DepartmentService} from "./department.service";
import {Location} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";


@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  department: Department = {id: 0, deptName: "", deptCode: ""};
  initId: string;

  constructor(private departmentService: DepartmentService,
              private location: Location,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.initId = params['id'];

      let departmentObservalble: Observable<Department> = this.departmentService.get(this.initId);
      departmentObservalble.subscribe(
        result => this.department = result,
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
    this.departmentService.update(this.department)
      .subscribe(
        result => this.department = result,
        error => console.log(error));
  }
}
