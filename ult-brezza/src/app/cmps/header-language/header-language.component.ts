import { Component, OnInit } from '@angular/core';
import { ComponentBase, AssetsService } from '@marcohern/ultimate-core';

@Component({
  selector: 'brezza-header-language',
  templateUrl: './header-language.component.html',
  styleUrls: ['./header-language.component.css']
})
export class HeaderLanguageComponent extends ComponentBase implements OnInit {

  constructor(ass:AssetsService) { 
    super(ass);
  }

  ngOnInit() {
  }

}
