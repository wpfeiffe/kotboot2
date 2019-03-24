import { Component, OnInit } from '@angular/core';
import {Company} from "./company.model";
import {CompanyService} from "./company.service";
import {MenuItem} from "primeng/primeng";
import {Router} from "@angular/router";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companies: Company[] = [];
  errorMessage: string = "";
  selectionMessage: string = "";
  selectedCompany: Company;

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit() {
    this.getCompanys();
  }

  getCompanys() {
    this.companyService.getCompanies()
      .subscribe(
        companies => this.companies = companies,
        error => this.errorMessage = error);
  }

  onRowSelect(event){
    console.log(event);
    this.selectionMessage = `You selected company "${event.data.companyName}"`;
  }

  onRowUnselect(event){
    console.log(event);
    this.selectionMessage = `No selection`
  }

  OnDoubleClick(event) {
    console.log("Double click occurred")
    console.log(event);
  }

  viewCompany(company: Company) {
    this.router.navigate([`/entities/company/${company.id}`]);
    // var testvalue: string = '2';
    // this.router.navigate([`/tc/${testvalue}`])
  }

  deleteCompany(company: Company) {
    console.log("Told to delete company:")
    console.log(company)
  }


}
