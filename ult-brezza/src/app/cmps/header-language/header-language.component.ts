import { Component, OnInit } from '@angular/core';
import { AssetsBase } from 'src/app/base/assets-base';

@Component({
  selector: 'brezza-header-language',
  templateUrl: './header-language.component.html',
  styleUrls: ['./header-language.component.css']
})
export class HeaderLanguageComponent extends AssetsBase implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
