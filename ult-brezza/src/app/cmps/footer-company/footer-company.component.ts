import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { company } from 'src/settings/company';

@Component({
  selector: 'brezza-footer-company',
  templateUrl: './footer-company.component.html',
  styleUrls: ['./footer-company.component.css']
})
export class FooterCompanyComponent implements OnInit {

  company:Company;

  constructor() { }

  ngOnInit() {
    this.company = company;
  }

}
