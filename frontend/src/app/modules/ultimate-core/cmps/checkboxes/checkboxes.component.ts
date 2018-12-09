import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Checkbox } from '../../models/checkbox';
import { CheckboxChanged } from '../../models/checkbox-changed';

@Component({
  selector: 'ult-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.css']
})
export class CheckboxesComponent implements OnInit, OnChanges {

  private checkboxes:Checkbox[] = [];
  private changes:CheckboxChanged = new CheckboxChanged();

  @Input()
  source:any[] = [];

  @Input()
  label:string = 'label';

  @Input()
  value:string = 'value';

  @Input()
  selected:any[] = [];

  @Output()
  checkboxChanged:EventEmitter<CheckboxChanged> = new EventEmitter<CheckboxChanged>();

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges() {
    this.checkboxes = this.source.map<Checkbox>((s,i) => new Checkbox(s[this.label], s[this.value], false, s));
    
    if (this.selected) {
      if (this.selected.length > 0) this.changes.noneSelected = false;
      else this.changes.noneSelected = true;  
      this.selected.forEach(s => {
        var checkbox = this.checkboxes.find(c => c.value === s[this.value]);
        if (checkbox) checkbox.checked = true;
      });
    }
  }

  changed($event, target:Checkbox) {
    target.checked = (!target.checked);
    target.status = (target.status) ? null :
      (target.checked) ? 'added' : 'removed';
      
    if (target.checked) {
      if (target.status === 'added') this.changes.added.push(target);
      else {
        var i = this.changes.removed.indexOf(target);
        this.changes.removed.splice(i,1);
      }
    }
    if (!target.checked) {
      if (target.status === 'removed') this.changes.removed.push(target);
      else {
        var i = this.changes.added.indexOf(target);
        this.changes.added.splice(i,1);
      }
    }

    this.changes.noneSelected = (this.checkboxes.find(c => c.checked)) ? false : true;

    this.checkboxChanged.emit(this.changes);
  }


}
