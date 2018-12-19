<?php

use Illuminate\Database\Seeder;

class ParametersSeeder extends Seeder
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
            ['group'=>'company', 'name'=>'name'   , 'value'=>'Panditas' ],
            ['group'=>'company', 'name'=>'address', 'value'=>'Cra 84aa #35-8'],
            ['group'=>'company', 'name'=>'city'   , 'value'=>'Medellin' ],
            ['group'=>'company', 'name'=>'state'  , 'value'=>'Antioquia'],
            ['group'=>'company', 'name'=>'country', 'value'=>'Colombia' ],
            ['group'=>'company', 'name'=>'zip'    , 'value'=>'50032'    ],
        ];

        foreach ($data as $param) {
            $param['created_at'] = new \Datetime;
            DB::table('parameters')->insert($param);
        }
    }
}
