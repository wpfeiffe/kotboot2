import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { CompanyComponent } from './company/company.component';
import { CompanyDetailComponent } from './company/company-detail.component';
import { DepartmentDetailComponent } from './department/department-detail.component';
import { EmployeeDetailComponent } from './employee/employee-detail.component';

const routes: Routes = [
  {
    path: "employee",
    component: EmployeeComponent
  },
  {
    path: "employee/:id",
    component: EmployeeDetailComponent
  },
  {
    path: "department",
    component: DepartmentComponent
  },
  {
    path: "department/:id",
    component: DepartmentDetailComponent
  },
  {
    path: "company",
    component: CompanyComponent
  },
  {
    path: "company/:id",
    component: CompanyDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntitiesRoutingModule { }
