<?php

use Illuminate\Database\Seeder;

class ContentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $pages = [
            [
                'id' => 1,
                'reference' => 'about',
                'lang' => 'es',
                'content' => '<h2>Acerca de Nosotros</h2><p>Tail pork belly sausage, leberkas t-bone swine chuck turducken drumstick short ribs porchetta brisket pork chop hamburger shankle. Short ribs frankfurter tri-tip, pig cow pastrami tail tongue salami bacon prosciutto flank sausage pork belly. Chicken salami venison leberkas cow turkey shoulder kielbasa. Ham hock cupim filet mignon, swine sausage strip steak ground round tongue. Leberkas capicola short ribs kielbasa shank. Biltong tongue rump, venison pancetta kevin pork belly drumstick porchetta ground round chicken flank short loin meatball. Spare ribs sirloin biltong, corned beef sausage turkey pig brisket strip steak drumstick fatback ball tip short ribs prosciutto.</p>',
            ]
        ];

        foreach ($pages as $p) {
            $p['created_at'] = new \Datetime;
            $p['type'] = 'page';
            $p['group'] = 'none';
            $p['ord'] = 0;
            $p['draft'] = $p['content'];
            DB::table('contents')->insert($p);
        }
    }
}
