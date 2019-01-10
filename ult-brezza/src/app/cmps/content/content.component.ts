import { Component, OnInit, Input } from '@angular/core';
import { Content } from '@marcohern/ultimate-core';
import { PagesService } from '@marcohern/ultimate-contents';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'brezza-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  reference:string = '';

  page:Content;
  nocontent:boolean = true;
  notfound:boolean = false;

  constructor(
    private cns:PagesService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.reference) {
      this.cns.getPage(this.reference).subscribe(page => {
        console.log(page);
        this.nocontent = false;
        this.page = page;
      }, error => {
        this.notfound = true;
      });
    }
  }

}
