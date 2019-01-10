<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contents', function (Blueprint $table) {
            $table->increments('id');
            $table->string('reference',64);
            $table->string('lang',8);
            $table->string('type', 64)->index();
            $table->string('group',64);
            $table->integer('ord');
            $table->integer('parent_id')->nullable()->index();
            $table->string('title',255);
            $table->longText('content');
            $table->longText('draft'  );
            $table->boolean('enabled' )->default(true);
            $table->integer('hits'    )->default(0);
            $table->integer('clicks'  )->default(0);
            $table->timestamps();

            $table->unique(['lang','reference']);
            $table->index(['group','ord']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contents');
    }
}
