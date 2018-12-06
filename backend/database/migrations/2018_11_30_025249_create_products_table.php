<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',128);
            $table->string('slug',128)->unique();
            $table->longText('description');
            $table->decimal('org_price',18,2);
            $table->decimal('dct_price',18,2)->nullable();
            $table->integer('qty')->default(0);
            $table->integer('prev_id')->nullable();

            $table->boolean('visible')->default(true);
            
            $table->integer('hits')->default(0);
            $table->integer('clicks')->default(0);
            $table->integer('sales_count')->default(0);
            $table->decimal('sales_value',18,2)->default(0);
            $table->decimal('stars',2,1)->default(0.0);
            $table->integer('comments')->default(0);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
