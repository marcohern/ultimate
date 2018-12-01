<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',128);
            $table->string('slug',128)->unique();
            $table->integer('parent_id')->nullable();
            $table->string('type')->default('category');
            $table->integer('ord')->default(0);
            $table->integer('lvl')->default(0);
            $table->string('description');

            $table->integer('hits')->default(0);
            $table->integer('clicks')->default(0);
            $table->integer('sales_count')->default(0);
            $table->decimal('sales_value',18,2)->default(0);

            $table->index('parent_id');

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
        Schema::dropIfExists('categories');
    }
}
