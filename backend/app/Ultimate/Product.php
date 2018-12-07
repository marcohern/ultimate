<?php

namespace App\Ultimate;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    protected $casts = [
        'visible' => 'boolean',
        'org_price' => 'double',
        'dct_price' => 'double',
        'stars' => 'double',
        'sales_value' => 'double',
    ];

    public function productCategories() {
        return $this->hasMany('App\Ultimate\ProductCategory');
    }
}
