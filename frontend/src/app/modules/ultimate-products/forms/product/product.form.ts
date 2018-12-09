import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBase } from 'src/app/modules/ultimate-core/base/form-base';
import { RequestService } from 'src/app/modules/ultimate-core/srvs/request.service';
import { Category } from 'src/app/modules/ultimate-core/models/category';
import { Paged } from 'src/app/modules/ultimate-core/models/paged';
import { FormBuilder, FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import * as uuid from 'uuid';
import { Product } from 'src/app/modules/ultimate-core/models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ultimate-product-form',
  templateUrl: './product.form.html',
  styleUrls: ['./product.form.css']
})
export class ProductForm extends FormBase implements OnInit, OnDestroy {

  constructor(private req:RequestService, private fb:FormBuilder, private route:ActivatedRoute) { 
    super();
    this.group = this.fb.group({
      name: this.fb.control('',[Validators.required],[]),
      slug: this.fb.control('',[Validators.required],[]),
      overview: this.fb.control('',[Validators.required],[]),
      description: this.fb.control('',[Validators.required],[]),
      org_price: this.fb.control('',[Validators.required, Validators.pattern(/\d+\.\d{0,2}/)],[]),
      dct_price: this.fb.control('',[],[]),
    });
  }

  checkboxes:FormArray = null;
  bucket:string = '';
  categories:Category[] = [];
  imageids:string[] = [];
  product:Product = null;
  discounted:boolean = false;

  ngOnInit() {
      this.bucket = uuid.v4();

      this.req.browse<Paged<Category>>('/categories', {}).subscribe(result => {
        this.categories = result.data;
      });

      this.req.get<Product>('/products', 1).subscribe(result => {
        this.product = result;
        this.group.setValue({
          name: this.product.name,
          slug: this.product.slug,
          overview: this.product.overview,
          description: this.product.description,
          org_price: this.product.org_price,
          dct_price: this.product.dct_price,
        });
        console.log(result);
      });
  }

  ngOnDestroy() {
    this.req.delete('/uploads/bucket',this.bucket).subscribe(result => {
      console.log(result);
    });
  }

  saving(values) {

  }

  filling<User>(user) {

  }

  onUploadFinished($event) {
    var response = JSON.parse($event.serverResponse.response._body); 
    $event.image_id = response.id;
    this.imageids.push(response.id);
  }

  onRemoved($event) {
    if ($event.image_id) {
      this.req.delete('/uploads',$event.image_id).subscribe(result => {
        console.log(result);
      });
    }
  }

  checkboxChanged($event) {
    var added:number[] = $event.added.map(s => s.source.id);
    var removed:number[] = $event.removed.map(s => s.source.id);
    console.log("added",added);
    console.log("removed",removed);
  }

}
