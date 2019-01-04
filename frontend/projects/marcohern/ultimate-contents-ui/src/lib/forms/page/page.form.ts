import { Component, OnInit } from '@angular/core';
import { FormBase, AssetsService, Content } from '@marcohern/ultimate-core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ultimate-page-form',
  templateUrl: './page.form.html',
  styleUrls: ['./page.form.css']
})
export class PageForm extends FormBase implements OnInit {
  
  public content:Content;

  constructor(ass:AssetsService, private fb:FormBuilder) {
    super(ass);
    this.group = this.fb.group({
      reference: this.fb.control('',[],[]),
      content  : this.fb.control('',[],[])
    });
  }

  ngOnInit() {
  }

  saving($event) {
    console.log($event);
  }

}
