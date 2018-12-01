import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/modules/ultimate-core/models/product';

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

  constructor() { }

  ngOnInit() {
    
  }

}
