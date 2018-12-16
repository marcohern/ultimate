import { Component, OnInit } from '@angular/core';
import { RequestService } from '@marcohern/ultimate-core';

@Component({
  selector: 'brezza-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.css']
})
export class GridPage implements OnInit {

  constructor(private req:RequestService) { }

  ngOnInit() {
    this.req.browse('/products',{}).subscribe(result => {
      
    });
  }

}
