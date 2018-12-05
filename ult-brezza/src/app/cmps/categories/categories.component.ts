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
    {name:'Video Juegos',slug:'grid'},
    {name:'Seguridas',slug:'grid'},
    {name:'Mas Vendidos',slug:'grid'},
    {name:'Juguetes',slug:'grid'},
    {name:'Entretenimiento',slug:'grid'},
    {name:'Nuevos',slug:'grid'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
