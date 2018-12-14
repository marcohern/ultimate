import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Product } from '@marcohern/ultimate-core';
import { GALLERY_IMAGE, GALLERY_CONF, NgxImageGalleryComponent } from 'ngx-image-gallery';
import { ProductService } from '../../srvs/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ult-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input()
  product:Product = {
    name: '[Product Name]',
    slug: 'product-slug',
    org_price: 199.95,
    dct_price: 149.95,
    description: '',
  };

  images:GALLERY_IMAGE[] = [
    {
      url: "assets/htc-vive-01.jpg", 
      altText: 'HTC Vive', 
      title: 'HTC Vive',
      thumbnailUrl: "assets/htc-vive-01-t.jpg", 
    },
    {
      url: "assets/htc-vive-02.jpg", 
      altText: 'HTC Vive', 
      title: 'HTC Vive',
      thumbnailUrl: "assets/htc-vive-02-t.jpg", 
    },
    {
      url: "https://images.pexels.com/photos/669013/pexels-photo-669013.jpeg?w=1260", 
      altText: 'woman-in-black-blazer-holding-blue-cup', 
      title: 'woman-in-black-blazer-holding-blue-cup',
      thumbnailUrl: "https://images.pexels.com/photos/669013/pexels-photo-669013.jpeg?w=60"
    },
    {
      url: "https://images.pexels.com/photos/669006/pexels-photo-669006.jpeg?w=1260", 
      altText: 'two-woman-standing-on-the-ground-and-staring-at-the-mountain', 
      title: 'two-woman-standing-on-the-ground-and-staring-at-the-mountain', 
      //extUrl: 'https://www.pexels.com/photo/two-woman-standing-on-the-ground-and-staring-at-the-mountain-669006/',
      thumbnailUrl: "https://images.pexels.com/photos/669006/pexels-photo-669006.jpeg?w=60"
    },
    {
      url: "https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
      altText: 'three-jars-of-fruits-and-veggies', 
      title: 'three-jars-of-fruits-and-veggies', 
      //extUrl: 'https://www.pexels.com/photo/two-woman-standing-on-the-ground-and-staring-at-the-mountain-669006/',
      thumbnailUrl: "https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg?w=60"
    },
  ];

  conf:GALLERY_CONF = {
    imageOffset: '0px',
    showDeleteControl: false,
    showImageTitle: false,
    showCloseControl: false,
    inline:true,
    backdropColor:"rgba(0,0,0,0)"
  };

  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;

  constructor(private ps:ProductService, private route:ActivatedRoute) { }

  ngOnInit() {
    var id = this.route.snapshot.params.id;
    this.ps.getProduct(id).subscribe(product => {
      this.product = product;
      this.images = [];
      for (let image of product.images) {
        this.images.push({
          url: image
        });
      }
    });
  }

  // open gallery
  openGallery(index: number = 0) {
    this.ngxImageGallery.open(index);
  }
	
  // close gallery
  closeGallery() {
    this.ngxImageGallery.close();
  }
	
  // set new active(visible) image in gallery
  newImage(index: number = 0) {
    this.ngxImageGallery.setActiveImage(index);
  }
	
  // next image in gallery
  nextImage(index: number = 0) {
    this.ngxImageGallery.next();
  }
	
  // prev image in gallery
  prevImage(index: number = 0) {
    this.ngxImageGallery.prev();
  }

  galleryOpened(index) {
    console.info('Gallery opened at index ', index);
  }

  // callback on gallery closed
  galleryClosed() {
    console.info('Gallery closed.');
  }

  // callback on gallery image clicked
  galleryImageClicked(index) {
    console.info('Gallery image clicked with index ', index);
  }
  
  // callback on gallery image changed
  galleryImageChanged(index) {
    console.info('Gallery image changed to index ', index);
  }

  // callback on user clicked delete button
  deleteImage(index) {
    console.info('Delete image at index ', index);
  }

}
