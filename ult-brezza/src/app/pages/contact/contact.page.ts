import { Component, OnInit } from '@angular/core';
import { company } from 'src/settings/company';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'contact-page',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.css']
})
export class ContactPage implements OnInit {

  lat:number;
  lng:number;
  zoom:number=15;
  company:Company;
  constructor() { }

  ngOnInit() {
    this.lat = company.lat;
    this.lng = company.lng;
    this.company = company;
  }

}
