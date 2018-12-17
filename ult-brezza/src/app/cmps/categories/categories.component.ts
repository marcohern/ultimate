import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'brezza-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {


  title: string = 'Categorias';

  categories:Category[] = [
    {name:'Pijamas',slug:'pijamas'},
    {name:'Chaquetas',slug:'chaquetas'},
    {name:'Combos Maternos',slug:'combos-maternos'},
    {name:'Gorros',slug:'gorros'},
    {name:'Ruanas',slug:'ruanas'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
