import { Component, OnInit } from '@angular/core';
import { RequestService } from '@marcohern/ultimate-core';
import { AssetsBase } from 'src/app/base/assets-base';

@Component({
  selector: 'brezza-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent extends AssetsBase implements OnInit {

  constructor(public req:RequestService) { 
    super();
  }

  ngOnInit() {
    
  }

}
