import { Component, OnInit } from '@angular/core';
import { FormBase } from 'src/app/modules/ultimate-core/base/form-base';

@Component({
  selector: 'ultimate-product-form',
  templateUrl: './product.form.html',
  styleUrls: ['./product.form.css']
})
export class ProductForm extends FormBase implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit() {
    
  }

  saving(values) {

  }

  filling<User>(user) {

  }

}
