import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBase, SaveResult, Category, Product, Checkbox, RequestService, AssetsService } from '@marcohern/ultimate-core';
import { FormBuilder, Validators } from '@angular/forms';
import * as uuid from 'uuid';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '@marcohern/ultimate-products';

@Component({
  selector: 'ultimate-product-form',
  templateUrl: './product.form.html',
  styleUrls: ['./product.form.css']
})
export class ProductForm extends FormBase implements OnInit, OnDestroy {

  bucket:string = '';
  imageids:string[] = [];

  ckbAdded:Checkbox[] = [];
  ckbRemoved:Checkbox[] = [];
  
  product:Product = new Product();
  categories:Category[] = [];
  discounted:boolean = false;
  apiroot:string = '';

  public req() {
    get: {
      return this._req;
    }
  }

  constructor(
    private _req:RequestService,
    private ps:ProductService,
    private fb:FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    ass:AssetsService) { 
    super(ass);
    this.group = this.fb.group({
      name: this.fb.control('',[Validators.required],[]),
      slug: this.fb.control('',[Validators.required],[]),
      overview: this.fb.control('',[Validators.required],[]),
      description: this.fb.control('',[Validators.required, Validators.pattern(/\d+(\.(\d{0,2})?)?/)],[]),
      org_price: this.fb.control('',[Validators.required, Validators.pattern(/\d+(\.(\d{0,2})?)?/)],[]),
      dct_price: this.fb.control('',[],[]),
    });
    this.apiroot = this._req.getApiRoot();
  }

  ngOnInit() {
      this.bucket = uuid.v4();

      this.fill(this.ps.categories(), cats => this.fillCategories(cats));

      var product_id = this.route.snapshot.params.id;
      if (product_id) {
        this.fill(this.ps.getProduct(product_id), prods => this.fillProduct(prods));
      }
  }

  ngOnDestroy() {
    this._req.delete('/uploads/bucket',this.bucket).subscribe(result => {
      console.log(result);
    });
  }

  fillCategories(categories:Category[]) {
    this.categories = categories;
  }

  fillProduct(product:Product) {
    this.product = product;
    this.group.setValue({
      name: this.product.name,
      slug: this.product.slug,
      overview: this.product.overview,
      description: this.product.description,
      org_price: this.product.org_price,
      dct_price: this.product.dct_price,
    });
    if (this.product.dct_price) this.discounted = true;
  }

  saving($events, values) {
    
    this.product.name = values.name;
    this.product.slug = values.slug;
    this.product.overview = values.overview;
    this.product.description = values.description;
    this.product.org_price = values.org_price;
    this.product.dct_price = values.dct_price;
    this.product.add_categories = this.ckbAdded.map(c => c.source.id);
    this.product.del_categories = this.ckbRemoved.map(c => c.source.id);
    this.product.image_bucket = this.bucket;

    console.log(this.product);
    
    this.ps.saveProduct(this.product).subscribe(result => {
      console.log(result);
      this.router.navigate(['/products']);
    });
  }

  onUploadFinished($event) {
    var response = JSON.parse($event.serverResponse.response._body); 
    $event.image_id = response.id;
    this.imageids.push(response.id);
  }

  onRemoved($event) {
    if ($event.image_id) {
      this._req.delete('/uploads',$event.image_id).subscribe(result => {
        console.log(result);
      });
    } else {
      var url = $event.file.name;
      var filename = url.replace(/^.*[\\\/]/, '');
      this._req.post<SaveResult>('/product/delete_image/' + this.product.id, {filename}).subscribe(result => {
        console.log(result);
      });
    }
  }

  checkboxChanged($event) {
    this.ckbAdded = $event.added;
    this.ckbRemoved = $event.removed;
  }

}
