import { Component, OnInit } from '@angular/core';
import { company } from 'src/settings/company';

@Component({
  selector: 'contact-page',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.css']
})
export class ContactPage implements OnInit {

  lat:number;
  lng:number;
  zoom:number=15;
  constructor() { }

  ngOnInit() {
    this.lat = company.lat;
    this.lng = company.lng;
  }

}
