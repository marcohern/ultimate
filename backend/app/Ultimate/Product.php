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
        'rating_value' => 'double',
        'sales_value' => 'double',
    ];

    protected $appends = ['ratings'];

    public function productCategories() {
        return $this->hasMany('App\Ultimate\ProductCategory');
    }

    public function getRatingsAttribute() {
        if ($this->rating_value && $this->rating_count) {
            return $this->rating_value/$this->rating_count;
        }
        return null;
    }
}
