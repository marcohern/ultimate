import { Component, OnInit, Input } from '@angular/core';
import { FormBase, AssetsService, Content } from '@marcohern/ultimate-core';
import { FormBuilder } from '@angular/forms';
import { PagesService } from '@marcohern/ultimate-contents';

@Component({
  selector: 'ultimate-page-form',
  templateUrl: './page.form.html',
  styleUrls: ['./page.form.css']
})
export class PageForm extends FormBase implements OnInit {
  
  public content:Content;

  @Input()
  public page_id:number;

  constructor(
    ass:AssetsService,
    private pgs:PagesService,
    private fb:FormBuilder) {
    super(ass);
    this.group = this.fb.group({
      reference: this.fb.control('',[],[]),
      content  : this.fb.control('',[],[])
    });
  }

  ngOnInit() {
    this.pgs.getPage(this.page_id).subscribe(page => {
      this.group.setValue({
        reference: page.reference,
        content: page.content
      });
    })
  }

  saving($event) {
    console.log(this.group.value);
    var page:Content = {
      id: this.page_id,
      reference: this.group.value.reference,
      group: 'page',
      ord: 0,
      lang:'',
      type: 'page',
      content: this.group.value.content,
      draft: '',
      hits:0,
      clicks:0
    };

    this.pgs.savePage(page).subscribe(result => {
      console.log(result);
    });
  }

}
