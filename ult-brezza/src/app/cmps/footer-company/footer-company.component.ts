import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { company } from 'src/settings/company';
import { ComponentBase, AssetsService } from '@marcohern/ultimate-core';

@Component({
  selector: 'brezza-footer-company',
  templateUrl: './footer-company.component.html',
  styleUrls: ['./footer-company.component.css']
})
export class FooterCompanyComponent extends ComponentBase implements OnInit {

  company:Company;

  constructor(ass:AssetsService) { 
    super(ass);
  }

  ngOnInit() {
    this.company = company;
  }

}
