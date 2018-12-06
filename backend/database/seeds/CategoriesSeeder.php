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
            ['id'=>1,'name'=>'Pijamas'        ,'slug'=>'pijamas'        ,'parent_id'=>NULL,'type'=>'product','ord'=>100,'lvl'=>0,'description'=>'Pijama enterizas o de dos piezas para recién nacido niño (0-18 meses) en tejido de punto con hombro cruzado para mayor facilidad al vestir al bebé. ¡Pijamas exclusivas para la descanzo comodo y abrigado! Material: 99% algodón 1% elastano.'],
            ['id'=>2,'name'=>'Chaquetas'      ,'slug'=>'chaquetas'      ,'parent_id'=>NULL,'type'=>'product','ord'=>200,'lvl'=>0,'description'=>'Chaqueta parka para bebé o niño en tejido plano con gráficos localizados, cuello alto y capucha, ideal para climas frios. Material: Algodón/Elastano'],
            ['id'=>3,'name'=>'Combos maternos','slug'=>'combos-maternos','parent_id'=>NULL,'type'=>'product','ord'=>300,'lvl'=>0,'description'=>'Combo de pijama para madre y bebé. Es una pijama ideal para llevar a la clínica ya que la pijama de la madre tiene abertura en los senos para facilitar la lactancia del bebé. Tiene su levantadora, el combo incluye una pijama mameluco para bebé con su gorrito incluido. Material: poliagodo un material comodo suave y muy práctico para lavar.'],
            ['id'=>4,'name'=>'Gorros'         ,'slug'=>'gorros'         ,'parent_id'=>NULL,'type'=>'product','ord'=>400,'lvl'=>0,'description'=>'Material: Algodón. De alta calidad, Suave,Elástico,Transpirable y Caliente,Lindo,de moda,se adapta a bebé Chicos y Chicas. Tamaño Único (0-6 Meses de Bebé), Tamaño: H x W (plano): 32.5 x 17cm / 12.68"x 6.63" (Aprox.) Algodón para cuidar la Sensibilidad de la piel de tu bebé. Paquete contenido: Conjunto de 3 Bebé Sombreros.'],
            ['id'=>5,'name'=>'Ruanas'         ,'slug'=>'ruanas'         ,'parent_id'=>NULL,'type'=>'product','ord'=>500,'lvl'=>0,'description'=>'Comodas ruanas en material de piel de conejo para ciudades frias, disponible en diferentes motivos y formas.'],
        ];

        foreach($data as $k => $record) {
            DB::table('categories')->insert($record);
        }
    }
}
