import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule, SharedModule } from 'primeng/primeng';

import { EntitiesRoutingModule } from './entities-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { CompanyComponent } from './company/company.component';
import { EmployeeService } from "./employee/employee.service";
import { DepartmentService } from "./department/department.service";
import { CompanyService } from "./company/company.service";
import { CompanyDetailComponent } from './company/company-detail.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DepartmentDetailComponent } from './department/department-detail.component';
import { EmployeeDetailComponent } from './employee/employee-detail.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome'

@NgModule({
  imports: [
    CommonModule,
    EntitiesRoutingModule,
    DataTableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  declarations: [EmployeeComponent, DepartmentComponent, CompanyComponent, CompanyDetailComponent, DepartmentDetailComponent, EmployeeDetailComponent],
  providers: [EmployeeService, DepartmentService, CompanyService]

})
export class EntitiesModule { }
