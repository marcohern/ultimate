import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'brezza-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {


  title: string = 'Categories';

  categories:Category[] = [
    {name:'Video Games',slug:'grid'},
    {name:'Safety',slug:'grid'},
    {name:'Best Sale',slug:'grid'},
    {name:'Toys',slug:'grid'},
    {name:'Entertainment',slug:'grid'},
    {name:'New Sale',slug:'grid'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
