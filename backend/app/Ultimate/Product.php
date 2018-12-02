<?php

namespace App\Ultimate;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    protected $casts = [
        'active' => 'boolean',
        'org_price' => 'double',
        'dct_price' => 'double',
        'stars' => 'double',
    ];

    public function productCategories() {
        return $this->hasMany('App\Ultimate\ProductCategory');
    }
}
