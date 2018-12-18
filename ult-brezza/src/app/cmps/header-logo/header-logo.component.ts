import { Component, OnInit } from '@angular/core';
import { ComponentBase, AssetsService } from '@marcohern/ultimate-core';

@Component({
  selector: 'brezza-header-logo',
  templateUrl: './header-logo.component.html',
  styleUrls: ['./header-logo.component.css']
})
export class HeaderLogoComponent extends ComponentBase implements OnInit {

  constructor(ass:AssetsService) { 
    super(ass);
  }

  ngOnInit() {
  }

}
