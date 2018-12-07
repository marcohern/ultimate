<?php

namespace App\Ultimate;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    //
    protected $casts = [
        'sales_value' => 'double',
    ];

    public function productCategories() {
        return $this->hasMany('App\Ultimate\Category');
    }
}
