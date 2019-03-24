import {Component, OnInit} from '@angular/core';
import {Company} from "./company.model";
import {CompanyService} from "./company.service";
import {Location} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  company: Company = {id: 0, companyName: ""};
  initId: string;

  constructor(private companyService: CompanyService,
              private location: Location,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.initId = params['id'];

      let companyObservalble: Observable<Company> = this.companyService.get(this.initId);
      companyObservalble.subscribe(
        result => this.company = result,
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
    this.companyService.update(this.company)
      .subscribe(
        result => this.company = result,
        error => console.log(error));
  }
}
