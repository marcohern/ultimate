<?php

use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{
    private static $overview =  "Dolor amet ball tip ham hock tail, jerky pork loin beef ribs landjaeger fatback tri-tip ribeye andouille t-bone. Doner biltong andouille kevin turkey picanha venison t-bone turducken pork pancetta. Pig landjaeger t-bone burgdoggen pastrami sausage. Meatloaf short ribs shoulder t-bone burgdoggen short loin jerky. Landjaeger cow beef, strip steak pig jowl turkey frankfurter pork loin bacon prosciutto porchetta.";

    private static $description ="<h2>Shankle pancetta</h2>"
        ."<p>Landjaeger turkey brisket sirloin strip steak sausage pastrami chicken kielbasa ham ball tip drumstick. Hamburger pork chop prosciutto shank shankle, fatback doner. Ham hock strip steak meatball venison, sausage tongue jerky bacon pastrami. Ground round picanha shoulder landjaeger.</p>"
        ."<h2>Cupim tenderloin beef</h2>"
        ."<p>Shoulder. Drumstick tri-tip beef ribs, jerky alcatra turducken short ribs biltong chicken. Kielbasa t-bone alcatra beef ribs biltong chicken salami landjaeger pancetta pork belly. Short ribs tongue shankle alcatra hamburger cow. Turkey short loin shankle hamburger doner biltong swine pig ham strip steak andouille.</p>"
        ."<h2>Shankle tail prosciutto fatback</h2>"
        ."<p>Turducken pork short ribs short loin, rump leberkas bresaola kielbasa capicola flank t-bone. Capicola jerky bacon pig meatloaf, ham pork belly short loin pork chop. Picanha venison andouille meatball shankle. Short loin ham venison, ball tip t-bone turkey pork chop filet mignon bacon doner. Jowl beef ribs jerky short ribs turducken filet mignon pig venison beef corned beef t-bone.</p>"
        ."<h2>Short ribs</h2>"
        ."<p>swine tongue pork chop, boudin pork belly porchetta picanha buffalo doner ham flank meatloaf chuck. Ham hock doner flank, turkey tail chuck pastrami short loin shoulder pork chop bacon frankfurter. Cupim sausage pork leberkas alcatra corned beef turducken ball tip rump shankle chicken spare ribs tenderloin jowl prosciutto. Filet mignon cow meatloaf drumstick pork chop pancetta. Jerky chuck biltong, sausage alcatra t-bone pastrami capicola bacon beef ribeye tongue.</p>";

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $data = [
['id'=>1,'name'=>'Pijama Enterisa Ref. 0001','slug'=>'pijama-enterisa-ref.-0001','org_price'=>27900,'dct_price'=>25000,'qty'=>100],
['id'=>2,'name'=>'Pijama Enterisa Ref. 0002','slug'=>'pijama-enterisa-ref.-0002','org_price'=>27900,'dct_price'=>NULL,'qty'=>100],
['id'=>3,'name'=>'Pijama Enterisa Ref. 0003','slug'=>'pijama-enterisa-ref.-0003','org_price'=>27900,'dct_price'=>NULL,'qty'=>100],
['id'=>4,'name'=>'Pijama Enterisa Ref. 0004','slug'=>'pijama-enterisa-ref.-0004','org_price'=>27900,'dct_price'=>NULL,'qty'=>100],
['id'=>5,'name'=>'Pijama Enterisa Ref. 0005','slug'=>'pijama-enterisa-ref.-0005','org_price'=>27900,'dct_price'=>NULL,'qty'=>100],
['id'=>6,'name'=>'Pijama dos piezas Ref. 0001','slug'=>'pijama-dos-piezas-ref.-0001','org_price'=>23900,'dct_price'=>NULL,'qty'=>100],
['id'=>7,'name'=>'Pijama dos piezas Ref. 0002','slug'=>'pijama-dos-piezas-ref.-0002','org_price'=>23900,'dct_price'=>20000,'qty'=>100],
['id'=>8,'name'=>'Pijama dos piezas Ref. 0003','slug'=>'pijama-dos-piezas-ref.-0003','org_price'=>23900,'dct_price'=>NULL,'qty'=>100],
['id'=>9,'name'=>'Pijama dos piezas Ref. 0004','slug'=>'pijama-dos-piezas-ref.-0004','org_price'=>23900,'dct_price'=>18500,'qty'=>100],
['id'=>10,'name'=>'Pijama dos piezas Ref. 0005','slug'=>'pijama-dos-piezas-ref.-0005','org_price'=>23900,'dct_price'=>18500,'qty'=>100],
['id'=>11,'name'=>'Ruana de animales Ref. 0001','slug'=>'ruana-de-animales-ref.-0001','org_price'=>47900,'dct_price'=>NULL,'qty'=>100],
['id'=>12,'name'=>'Ruana de animales Ref. 0002','slug'=>'ruana-de-animales-ref.-0002','org_price'=>47900,'dct_price'=>NULL,'qty'=>100],
['id'=>13,'name'=>'Ruana de animales Ref. 0003','slug'=>'ruana-de-animales-ref.-0003','org_price'=>47900,'dct_price'=>42900,'qty'=>100],
['id'=>14,'name'=>'Ruana de animales Ref. 0004','slug'=>'ruana-de-animales-ref.-0004','org_price'=>47900,'dct_price'=>NULL,'qty'=>100],
['id'=>15,'name'=>'Ruana de animales Ref. 0005','slug'=>'ruana-de-animales-ref.-0005','org_price'=>47900,'dct_price'=>NULL,'qty'=>100],
['id'=>16,'name'=>'Ruana de Orejitas Ref.0001','slug'=>'ruana-de-orejitas-ref.0001','org_price'=>29900,'dct_price'=>NULL,'qty'=>100],
['id'=>17,'name'=>'Ruana de Orejitas Ref.0002','slug'=>'ruana-de-orejitas-ref.0002','org_price'=>29900,'dct_price'=>NULL,'qty'=>100],
['id'=>18,'name'=>'Ruana de Orejitas Ref.0003','slug'=>'ruana-de-orejitas-ref.0003','org_price'=>29900,'dct_price'=>NULL,'qty'=>100],
['id'=>19,'name'=>'Ruana de Orejitas Ref.0004','slug'=>'ruana-de-orejitas-ref.0004','org_price'=>29900,'dct_price'=>NULL,'qty'=>100],
['id'=>20,'name'=>'Ruana de Orejitas Ref.0005','slug'=>'ruana-de-orejitas-ref.0005','org_price'=>29900,'dct_price'=>NULL,'qty'=>100],
['id'=>21,'name'=>'Combo materno niño','slug'=>'combo-materno-niño','org_price'=>69900,'dct_price'=>NULL,'qty'=>100],
['id'=>22,'name'=>'Combo materno niña','slug'=>'combo-materno-niña','org_price'=>69900,'dct_price'=>NULL,'qty'=>100],
['id'=>23,'name'=>'Gorro niño','slug'=>'gorro-niño','org_price'=>7900,'dct_price'=>NULL,'qty'=>100],
['id'=>24,'name'=>'Gorro niña','slug'=>'gorro-niña','org_price'=>7900,'dct_price'=>NULL,'qty'=>100],
['id'=>25,'name'=>'Pijama para Madre he hija Ref. 0001','slug'=>'pijama-para-madre-he-hija-ref.-0001','org_price'=>49900,'dct_price'=>NULL,'qty'=>100],
['id'=>26,'name'=>'Pijama para Madre he hija Ref. 0002','slug'=>'pijama-para-madre-he-hija-ref.-0002','org_price'=>49900,'dct_price'=>NULL,'qty'=>100],
['id'=>27,'name'=>'Pijama para Madre he hija Ref. 0003','slug'=>'pijama-para-madre-he-hija-ref.-0003','org_price'=>49900,'dct_price'=>NULL,'qty'=>100],
['id'=>28,'name'=>'Pijama para Madre he hija Ref. 0004','slug'=>'pijama-para-madre-he-hija-ref.-0004','org_price'=>49900,'dct_price'=>NULL,'qty'=>100],
['id'=>29,'name'=>'Pijama para Madre he hija Ref. 0005','slug'=>'pijama-para-madre-he-hija-ref.-0005','org_price'=>49900,'dct_price'=>NULL,'qty'=>100],
['id'=>30,'name'=>'Chaqueta Ref.0001','slug'=>'chaqueta-ref.0001','org_price'=>44900,'dct_price'=>NULL,'qty'=>100],
['id'=>31,'name'=>'Chaqueta Ref.0002','slug'=>'chaqueta-ref.0002','org_price'=>44900,'dct_price'=>NULL,'qty'=>100],
['id'=>32,'name'=>'Chaqueta Ref.0003','slug'=>'chaqueta-ref.0003','org_price'=>44900,'dct_price'=>NULL,'qty'=>100],
['id'=>33,'name'=>'Pijama de Animalitos Ref. 0001','slug'=>'pijama-de-animalitos-ref.-0001','org_price'=>49900,'dct_price'=>NULL,'qty'=>100],
['id'=>34,'name'=>'Pijama de Animalitos Ref. 0002','slug'=>'pijama-de-animalitos-ref.-0002','org_price'=>49900,'dct_price'=>NULL,'qty'=>100],
['id'=>35,'name'=>'Pijama de Animalitos Ref. 0003','slug'=>'pijama-de-animalitos-ref.-0003','org_price'=>49900,'dct_price'=>NULL,'qty'=>100],

        ];

        foreach($data as $k => $record) {
            $record['overview'] = self::$overview;
            $record['description'] = self::$description;
            $record['created_at'] = new \Datetime;
            DB::table('products')->insert($record);
        }
    }
}
