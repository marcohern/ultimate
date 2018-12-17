import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { company } from 'src/settings/company';
import { AssetsBase } from 'src/app/base/assets-base';

@Component({
  selector: 'brezza-footer-company',
  templateUrl: './footer-company.component.html',
  styleUrls: ['./footer-company.component.css']
})
export class FooterCompanyComponent extends AssetsBase implements OnInit {

  company:Company;

  constructor() { 
    super();
  }

  ngOnInit() {
    this.company = company;
  }

}
