<?php

namespace App\Ultimate;

use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{
    //
    public function products() {
        return $this->belongsTo('App\Ultimate\Product');
    }

    public function categories() {
        return $this->belongsTo('App\Ultimate\Category');
    }
}
