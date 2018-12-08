import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBase } from 'src/app/modules/ultimate-core/base/form-base';
import * as uuid from 'uuid';
import { RequestService } from 'src/app/modules/ultimate-core/srvs/request.service';
import { SaveResult } from 'src/app/modules/ultimate-core/models/save-result';

@Component({
  selector: 'ultimate-product-form',
  templateUrl: './product.form.html',
  styleUrls: ['./product.form.css']
})
export class ProductForm extends FormBase implements OnInit, OnDestroy {

  constructor(private req:RequestService) { 
    super();
  }

  bucket:string = '';
  imageids:string[] = [];

  ngOnInit() {
      this.bucket = uuid.v4();
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
    console.log("onUploadFinished",response);
    $event.image_id = response.id;
    this.imageids.push(response.id);
  }

  onRemoved($event) {
    if ($event.image_id) {
      this.req.delete('/uploads',$event.image_id).subscribe(result => {
        console.log(result);
      });
    }
    console.log("onRemoved",$event);
  }

}
