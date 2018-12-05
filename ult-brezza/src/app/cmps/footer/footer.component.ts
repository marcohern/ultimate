import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { company } from 'src/settings/company';

@Component({
  selector: 'brezza-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
