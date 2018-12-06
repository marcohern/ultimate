import { Component, OnInit } from '@angular/core';

declare var CountStepper, CountBack_slider, CountBack_slider_timeout;
@Component({
  selector: 'brezza-product-hot',
  templateUrl: './product-hot.component.html',
  styleUrls: ['./product-hot.component.css']
})
export class ProductHotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    clearTimeout(CountBack_slider_timeout);
    var dthen1:any = new Date("2019-12-25 00:00:00");
    var start = "2018-12-06 10:00:00";
    var start_date:any = Date();//Date.parse(start);
    var dnow1:any = new Date(start_date);
    var ddiff;
    if (CountStepper > 0)
      ddiff = new Date((dnow1) - (dthen1));
    else
      ddiff = new Date((dthen1) - (dnow1));
    var gsecs1 = Math.floor(ddiff.valueOf() / 1000);
    CountBack_slider(gsecs1, "countbox_1", 1);
  }

}
