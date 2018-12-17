import { Component, OnInit } from '@angular/core';
import { AssetsBase } from 'src/app/base/assets-base';

@Component({
  selector: 'brezza-footer-payment-accept',
  templateUrl: './footer-payment-accept.component.html',
  styleUrls: ['./footer-payment-accept.component.css']
})
export class FooterPaymentAcceptComponent extends AssetsBase implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
