import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'brezza-sent-popup',
  templateUrl: './sent-popup.component.html',
  styleUrls: ['./sent-popup.component.css']
})
export class SentPopupComponent implements OnInit {

  @Output()
  close:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.close.emit();
  }

}
