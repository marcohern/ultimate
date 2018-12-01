import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Product } from 'src/app/modules/ultimate-core/models/product';
import { GALLERY_IMAGE, GALLERY_CONF, NgxImageGalleryComponent } from 'ngx-image-gallery';

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
    description: '<h3>Bacon ipsum</h3>'
      +'<p>Dolor amet ball tip ham hock tail, jerky pork loin beef ribs landjaeger fatback tri-tip ribeye andouille t-bone. Doner biltong andouille kevin turkey picanha venison t-bone turducken pork pancetta. Pig landjaeger t-bone burgdoggen pastrami sausage. Meatloaf short ribs shoulder t-bone burgdoggen short loin jerky. Landjaeger cow beef, strip steak pig jowl turkey frankfurter pork loin bacon prosciutto porchetta.</p><h3>Shankle pancetta</h3>'
      +'<p>Landjaeger turkey brisket sirloin strip steak sausage pastrami chicken kielbasa ham ball tip drumstick. Hamburger pork chop prosciutto shank shankle, fatback doner. Ham hock strip steak meatball venison, sausage tongue jerky bacon pastrami. Ground round picanha shoulder landjaeger.</p>'
      +'<h3>Cupim tenderloin beef</h3>'
      +'<p>Shoulder. Drumstick tri-tip beef ribs, jerky alcatra turducken short ribs biltong chicken. Kielbasa t-bone alcatra beef ribs biltong chicken salami landjaeger pancetta pork belly. Short ribs tongue shankle alcatra hamburger cow. Turkey short loin shankle hamburger doner biltong swine pig ham strip steak andouille.</p>'
      +'<h3>Shankle tail prosciutto fatback</h3>'
      +'<p>Turducken pork short ribs short loin, rump leberkas bresaola kielbasa capicola flank t-bone. Capicola jerky bacon pig meatloaf, ham pork belly short loin pork chop. Picanha venison andouille meatball shankle. Short loin ham venison, ball tip t-bone turkey pork chop filet mignon bacon doner. Jowl beef ribs jerky short ribs turducken filet mignon pig venison beef corned beef t-bone.</p>'
      +'<h3>Short ribs</h3>'
      +'<p>swine tongue pork chop, boudin pork belly porchetta picanha buffalo doner ham flank meatloaf chuck. Ham hock doner flank, turkey tail chuck pastrami short loin shoulder pork chop bacon frankfurter. Cupim sausage pork leberkas alcatra corned beef turducken ball tip rump shankle chicken spare ribs tenderloin jowl prosciutto. Filet mignon cow meatloaf drumstick pork chop pancetta. Jerky chuck biltong, sausage alcatra t-bone pastrami capicola bacon beef ribeye tongue.</p>',
  };

  images:GALLERY_IMAGE[] = [
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
    inline:true,
    backdropColor:"rgba(0,0,0,0)"
  };

  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;

  constructor() { }

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

  ngOnInit() {

  }

}
