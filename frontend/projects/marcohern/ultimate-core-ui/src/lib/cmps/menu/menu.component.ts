import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RequestService, MenuItem, MenuOptions } from '@marcohern/ultimate-core';

@Component({
  selector: 'ultimate-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
  constructor(private _req:RequestService, private http:HttpClient, private router:Router) { }

  public req() {
    get: { return this._req; }
  }

  @Input()
  public title = '[Title]';

  @Input()
  public items:MenuItem[] = [];

  @Input()
  public options:MenuOptions = {
    search: false
  };

  public menu:any[] = [];

  ngOnInit() {
    this.createMenu(this.items);
  }

  logout() {
    
    this._req.logout().subscribe(result => {
      this._req.clearToken();
      this.router.navigate(['/login']);
    }, error => {
      if (error.status == 401) {
        this.router.navigate(['/login']);
      }
    });
  }

  createSubMenu(sparent:MenuItem, dparent:any) {
    dparent.dropdown = (sparent.children.length > 0) ? true : false;
    for (let k of sparent.children) {
      var c = {
        label: k.label,
        divider: false,
        enabled: false,
        dropdown: false,
        path: k.path,
        query: k.query,
        disableClass: ''
      };
      c.divider = (k.label == '-') ? true : false;
      dparent.children.push(c);
    }
  }

  createMenu(items:MenuItem[]) {
    var j=1;
    for(let i of this.items) {

      var m = {
        id: j,
        label: i.label,
        enabled: false,
        dropdown: false,
        children: [],
        path: null,
        disableClass: ''
      };
      m.path = (i.path) ? i.path : null;
      m.enabled = (typeof i.enabled === 'undefined') ? true : (i.enabled === true) ? true : false;
      m.disableClass = (m.enabled) ? '' : 'disabled';
      if (i.children) {
        this.createSubMenu(i, m);
      }

      this.menu.push(m);
      j++;
    }
  }

}
