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

    private function saveCategory(Request $request, Category $category) {
        $input = (object)$request->all();
        $add_products = [];
        $del_product_ids = [];

        if ($request->has('name'       )) $category->name = $input->name;
        if ($request->has('slug'       )) $category->slug = $input->slug;
        if ($request->has('type'       )) $category->type = $input->type;
        if ($request->has('description')) $category->description = $input->description;
        
        if ($request->has('parent_id')) $category->parent_id = $input->parent_id;
        if ($request->has('ord'      )) $category->ord       = $input->ord;
        if ($request->has('lvl'      )) $category->lvl       = $input->lvl;

        if ($request->has('hits'       )) $category->hits        = $input->hits;
        if ($request->has('clicks'     )) $category->clicks      = $input->clicks;
        if ($request->has('sales_count')) $category->sales_count = $input->sales_count;
        if ($request->has('sales_value')) $category->sales_value = $input->sales_value;

        if ($request->has('add_hit'       )) $category->hits++;
        if ($request->has('add_click'     )) $category->clicks++;
        if ($request->has('add_sale_count')) $category->sales_count++;
        if ($request->has('add_sale_value')) $category->sales_value+=$input->add_sale_value;
        
        if ($request->has('add_products' )) $add_products = $input->add_products;

        $category->save();

        $addprods = [];
        foreach ($add_products as $p) {
            $addprods[] =  ['category_id' => $category->id, 'product_id' => $p];
        }

        ProductCategory::destroy($del_product_ids);
        ProductCategory::insert($addprods);
        return $category;
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

        $category = new Category;
        $category = $this->saveCategory($r, $category);

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
        $category = $this->saveCategory($r, $category);

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
