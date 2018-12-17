import { Component, OnInit } from '@angular/core';
import { AssetsBase } from 'src/app/base/assets-base';

@Component({
  selector: 'brezza-header-logo',
  templateUrl: './header-logo.component.html',
  styleUrls: ['./header-logo.component.css']
})
export class HeaderLogoComponent extends AssetsBase implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
