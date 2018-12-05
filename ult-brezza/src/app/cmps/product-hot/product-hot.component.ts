import { Component, OnInit } from '@angular/core';

declare var CountStepper, CountBack_slider;
@Component({
  selector: 'brezza-product-hot',
  templateUrl: './product-hot.component.html',
  styleUrls: ['./product-hot.component.css']
})
export class ProductHotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var dthen1:any = new Date("12/25/19 11:59:00 PM");
    var start = "08/04/18 03:02:11 AM";
    var start_date:number = Date.parse(start);
    var dnow1:any = new Date(start_date);
    var ddiff;
    if (CountStepper > 0)
      ddiff = new Date((dnow1) - (dthen1));
    else
      ddiff = new Date((dthen1) - (dnow1));
    var gsecs1 = Math.floor(ddiff.valueOf() / 1000);	
    var iid1 = "countbox_1";
    CountBack_slider(gsecs1, "countbox_1", 1);
  }

}
