import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ComponentBase, AssetsService } from '@marcohern/ultimate-core';

@Component({
  selector: 'brezza-sent-popup',
  templateUrl: './sent-popup.component.html',
  styleUrls: ['./sent-popup.component.css']
})
export class SentPopupComponent extends ComponentBase implements OnInit {

  @Output()
  close:EventEmitter<any> = new EventEmitter<any>();

  constructor(ass:AssetsService) { 
    super(ass);
  }

  ngOnInit() {
  }

  onClose() {
    this.close.emit();
  }

}
