import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import { Product } from '@marcohern/ultimate-core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ProductService } from '../../srvs/product.service';

@Component({
  selector: 'product-table',
  templateUrl: './product.table.html',
  styleUrls: ['./product.table.css']
})
export class ProductTable implements OnInit {

  @Input()
  products:Product[] = [];
  deletingProduct:Product;

  @ViewChild('dlgConfirmDeleteTemplate') 
  dlgConfirmDeleteTemplate:TemplateRef<any>;

  dlgConfirmDelete: BsModalRef;
  constructor(private modal:BsModalService, private ps:ProductService) { }

  ngOnInit() {
    
  }

  deleting(product:Product) {
    product.delete = false;
    this.deletingProduct = product;
    this.dlgConfirmDelete = this.modal.show(this.dlgConfirmDeleteTemplate, { });
  }

  deleteConfirmed() {
    this.ps.deleteProduct(this.deletingProduct.id).subscribe(result => {
      
      const index = this.products.indexOf(this.deletingProduct);
      this.products.splice(index, 1);
      this.dlgConfirmDelete.hide();
    });
  }
}
