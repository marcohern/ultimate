<?php

use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $data = [
            ['id'=>1,'name'=>'Headphones','slug'=>'headphones','parent_id'=>NULL,'type'=>'group','ord'=>100,'lvl'=>0,'description'=>'World-class performance and superior comport from headphones designed to bring you closer to the music you love.'],
            ['id'=>2,'name'=>'Speakers','slug'=>'speakers','parent_id'=>NULL,'type'=>'group','ord'=>200,'lvl'=>1,'description'=>'Powerful performance. Versatile designs. For all your music, movies, and tv — at home or on the go.'],
            ['id'=>3,'name'=>'Noise Cancelling','slug'=>'noise-cancelling','parent_id'=>1,'type'=>'product','ord'=>101,'lvl'=>1,'description'=>'Bose noise cancelling headphones are engineered with world-class technology so nothing comes between you and your music.'],
            ['id'=>4,'name'=>'Wireless','slug'=>'wireless','parent_id'=>1,'type'=>'product','ord'=>102,'lvl'=>1,'description'=>'We engineered them without wires — or compromises. It’s just you and your music, with nothing in the way.'],
            ['id'=>5,'name'=>'Sports','slug'=>'sports','parent_id'=>1,'type'=>'product','ord'=>103,'lvl'=>1,'description'=>'Your workouts, made wireless.'],
            ['id'=>6,'name'=>'Soundware','slug'=>'soundware','parent_id'=>1,'type'=>'product','ord'=>104,'lvl'=>1,'description'=>'Better sound you can wear.'],
            ['id'=>7,'name'=>'Aviation Headsets','slug'=>'aviation-headsets','parent_id'=>1,'type'=>'product','ord'=>105,'lvl'=>1,'description'=>'Technology developed over 30 years. Appreciated in seconds.'],
            ['id'=>8,'name'=>'Sleep','slug'=>'sleep','parent_id'=>1,'type'=>'product','ord'=>106,'lvl'=>1,'description'=>'Sleep better. No matter how loud the snoring gets.'],
            ['id'=>9,'name'=>'Hearing','slug'=>'hearing','parent_id'=>1,'type'=>'product','ord'=>107,'lvl'=>1,'description'=>'Turn up the talk. Turn down the noise.'],
            ['id'=>10,'name'=>'Headset Accesories','slug'=>'headset-accesories','parent_id'=>1,'type'=>'product','ord'=>108,'lvl'=>1,'description'=>'Choose from a complete line of accessories that enhance or protect your Bose headphones.'],
            ['id'=>11,'name'=>'Portable','slug'=>'portable','parent_id'=>2,'type'=>'product','ord'=>201,'lvl'=>0,'description'=>'Engineered to travel, but sound great in your home. With durable designs and impressive battery life, you can bring them wherever music takes you.'],
            ['id'=>12,'name'=>'Smart Home','slug'=>'smart-home','parent_id'=>2,'type'=>'product','ord'=>202,'lvl'=>1,'description'=>'Stream music, ask questions, and so much more with Amazon Alexa. Enjoy the convenience of playing anything you want, any way you want. Your music. Your voice. You’re in control.'],
            ['id'=>13,'name'=>'Home Theater','slug'=>'home-theater','parent_id'=>2,'type'=>'product','ord'=>203,'lvl'=>1,'description'=>'Take all that’s great about movies, TV, and music … and make it even better. Bose soundbars and home theater surround sound systems bring out the best in your entertainment, so you can enjoy thrilling, cinema-like sound from the comfort of your couch.'],
            ['id'=>14,'name'=>'Wave','slug'=>'wave','parent_id'=>2,'type'=>'product','ord'=>204,'lvl'=>1,'description'=>'Exceptional performance. Elegant design.'],
            ['id'=>15,'name'=>'Stereo','slug'=>'stereo','parent_id'=>2,'type'=>'product','ord'=>205,'lvl'=>1,'description'=>'Bring out the best your music has to offer with Bose speakers. You\'ll find a variety of choices, including outdoor speakers and specialty speakers.'],
            ['id'=>16,'name'=>'Computer','slug'=>'computer','parent_id'=>2,'type'=>'product','ord'=>206,'lvl'=>1,'description'=>'Simple. Elegant. Powerful.'],
            ['id'=>17,'name'=>'Portable PA','slug'=>'portable-pa','parent_id'=>2,'type'=>'product','ord'=>207,'lvl'=>1,'description'=>'Focus less on your gear, and more on your music with Bose portable PA systems.'],
            ['id'=>18,'name'=>'Speaker Accesories','slug'=>'speaker-accesories','parent_id'=>2,'type'=>'product','ord'=>208,'lvl'=>1,'description'=>'Whether you have Bose speakers at home or portable Bose speakers, we have accessories to help make the most of them.'],
        ];

        foreach($data as $k => $record) {
            DB::table('categories')->insert($record);
        }
    }
}
