import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'brezza-header-searchbox',
  templateUrl: './header-searchbox.component.html',
  styleUrls: ['./header-searchbox.component.css']
})
export class HeaderSearchboxComponent implements OnInit {

  query:string = '';

  constructor(private router:Router) { }

  ngOnInit() {
  }

  search($event) {
    console.log(this.query, $event);
    this.router.navigate(['/grid'],{queryParams: {q:this.query} });
  }
}
