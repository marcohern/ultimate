import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AssetsBase } from 'src/app/base/assets-base';

@Component({
  selector: 'brezza-sent-popup',
  templateUrl: './sent-popup.component.html',
  styleUrls: ['./sent-popup.component.css']
})
export class SentPopupComponent extends AssetsBase implements OnInit {

  @Output()
  close:EventEmitter<any> = new EventEmitter<any>();

  constructor() { 
    super();
  }

  ngOnInit() {
  }

  onClose() {
    this.close.emit();
  }

}
