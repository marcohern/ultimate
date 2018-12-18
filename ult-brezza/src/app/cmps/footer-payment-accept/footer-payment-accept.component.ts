import { Component, OnInit } from '@angular/core';
import { ComponentBase, AssetsService } from '@marcohern/ultimate-core';

@Component({
  selector: 'brezza-footer-payment-accept',
  templateUrl: './footer-payment-accept.component.html',
  styleUrls: ['./footer-payment-accept.component.css']
})
export class FooterPaymentAcceptComponent extends ComponentBase implements OnInit {

  constructor(ass:AssetsService) { 
    super(ass);
  }

  ngOnInit() {
  }

}
