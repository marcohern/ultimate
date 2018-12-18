import { Component, OnInit } from '@angular/core';
import { RequestService, ComponentBase, AssetsService } from '@marcohern/ultimate-core';

@Component({
  selector: 'brezza-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent extends ComponentBase implements OnInit {

  constructor(public req:RequestService, ass:AssetsService) { 
    super(ass);
  }

  ngOnInit() {
    
  }

}
