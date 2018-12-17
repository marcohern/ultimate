import { Component, OnInit } from '@angular/core';
import { RequestService } from '@marcohern/ultimate-core';

@Component({
  selector: 'brezza-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(public req:RequestService) { }

  ngOnInit() {
    
  }

}
