<?php

namespace App\Http\Controllers\Ultimate;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Ultimate\Category;
use App\Ultimate\ProductCategory;
use App\Http\Requests\Ultimate\CategoryCreateRequest;

class CategoriesController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::all();
        return $categories;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoryCreateRequest $r)
    {
        $input = (object)$r->all();
        $products = [];

        $category = new Category;
        $category->name        = $input->name;
        $category->slug        = $input->slug;
        $category->type        = $input->type;
        $category->description = $input->description;
        
        if ($r->has('parent_id')) $category->parent_id = $input->parent_id;
        if ($r->has('ord'      )) $category->ord       = $input->ord;
        if ($r->has('lvl'      )) $category->lvl       = $input->lvl;
        if ($r->has('products' )) $products = $input->products;

        $category->save();
        foreach ($products as $p) {
            $pc = new ProductCategory;
            $pc->product_id = $p;
            $pc->category_id = $category->id;
            $pc->save();
        }

        return [
            'success' => true,
            'id' => $category->id,
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        return $category;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $r, Category $category)
    {
        $input = (object)$r->all();
        $products = [];

        if ($r->has('name'       )) $category->name = $input->name;
        if ($r->has('slug'       )) $category->slug = $input->slug;
        if ($r->has('type'       )) $category->type = $input->type;
        if ($r->has('description')) $category->description = $input->description;
        
        if ($r->has('parent_id')) $category->parent_id = $input->parent_id;
        if ($r->has('ord'      )) $category->ord       = $input->ord;
        if ($r->has('lvl'      )) $category->lvl       = $input->lvl;
        
        if ($r->has('products' )) $products = $input->products;

        $category->save();
        foreach ($products as $p) {
            $pc = new ProductCategory;
            $pc->product_id = $p;
            $pc->category_id = $category->id;
            $pc->save();
        }

        return [
            'success' => true,
            'id' => $category->id,
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $id = $category->id;
        $category->delete();
        return [
            'success' => true,
            'id' => $id,
        ];
    }
}
