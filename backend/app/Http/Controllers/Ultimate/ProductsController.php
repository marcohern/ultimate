<?php

namespace App\Http\Controllers\Ultimate;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Ultimate\Product;
use App\Ultimate\ProductCategory;
use App\Ultimate\Category;
use App\Http\Requests\Ultimate\ProductCreateRequest;
use App\Http\Requests\Ultimate\ProductUpdateRequest;
use Illuminate\Support\Facades\DB;
use \Illuminate\Validation\ValidationException;

class ProductsController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api');
    }

    private function saveProduct(Request $request, Product $product) {
        $input = (object)$request->all();
        $add_categories = [];
        $del_categories = [];

        if ($request->has('name'       )) $product->name        = $input->name;
        if ($request->has('slug'       )) $product->slug        = $input->slug;
        if ($request->has('overview'   )) $product->overview    = $input->overview;
        if ($request->has('description')) $product->description = $input->description;
        if ($request->has('org_price'  )) $product->org_price   = $input->org_price;
        if ($request->has('dct_price'  )) $product->dct_price   = $input->dct_price;
        if ($request->has('visible'    )) $product->visible     = $input->visible;
        if ($request->has('qty'        )) $product->qty         = $input->qty;

        if ($request->has('hits'        )) $product->hits         = $input->hits;
        if ($request->has('clicks'      )) $product->clicks       = $input->clicks;
        if ($request->has('sales_count' )) $product->sales_count  = $input->sales_count;
        if ($request->has('sales_value' )) $product->sales_value  = $input->sales_value;
        if ($request->has('rating_count')) $product->rating_count = $input->rating_count;
        if ($request->has('rating_value')) $product->rating_value = $input->rating_value;

        if ($request->has('add_hit'         )) $product->hits++;
        if ($request->has('add_click'       )) $product->clicks++;
        
        if (isset($product->id)) { //If the record is being updated, acknowledge the following fields
            if ($request->has('add_sale_value')) {
                $product->sales_count++;
                $product->sales_value+=$input->add_sale_value;
            }
            if ($request->has('add_rating_value')) {
                $product->rating_count++;
                $product->rating_value+=$input->add_rating_value;
            }
    
            if ($request->has('add_categories')) $add_categories = $input->add_categories;
            if ($request->has('del_categories')) $del_categories = $input->del_categories;       
        }

        $product->save();
        $addcats = [];
        foreach ($add_categories as $c) {
            $addcats[] =  ['category_id' => $c, 'product_id' => $product->id];
        }

        ProductCategory::where('product_id',$product->id)
            ->whereIn('category_id',$del_categories)
            ->delete();
        ProductCategory::insert($addcats);
        return $product;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $r)
    {
        $q = '';
        $l = 50;
        $category_id = null;
        if ($r->has('q')) $q=trim($r->q);
        if ($r->has('l')) $l = $r->l;
        if ($r->has('category_id')) $category_id=$r->category_id;

        $query = DB::table('products AS p')
            ->select('p.id','p.name','p.slug','p.org_price','p.dct_price','p.rating_value','p.rating_count',
                DB::raw('p.rating_value/p.rating_count AS ratings'), 'p.qty', 'p.created_at')
            ->distinct()
            ->join('product_categories AS pc', 'p.id', '=','pc.product_id')
            ->join('categories AS c', 'pc.category_id', '=','c.id');
        if (!empty($category_id)) {
            $query->where('c.id', '=', $category_id)->where('p.visible', '=',true);
        }
        if (!empty($q)) {
            $rq = preg_replace('/\s+/','%',$q);
            $query->where('p.name','LIKE',"%$rq%");
        }
        $products = $query->paginate($l);
        return $products;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\ProductCreateRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductCreateRequest $request)
    {

        $product = new Product;
        $product = $this->saveProduct($request, $product);

        return [
            'success' => true,
            'id' => $product->id
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  App\Ultimate\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        $productCategories = $product->productCategories()->get();
        $categories = [];
        foreach ($productCategories as $pc) {
            $c = Category::select('id','name','slug','ord')->find($pc->category_id);
            if ($c) {
                $c->product_category_id = $pc->id;
            }
            $categories[] = $c;
        }
        
        $product->categories = $categories;
        return $product;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\Ultimate\ProductUpdateRequest  $request
     * @param  \App\Ultimate\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(ProductUpdateRequest $request,Product $product)
    {
        $product = $this->saveProduct($request, $product);
        return [
            'success' => true,
            'id' => $product->id,
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $id = $product->id;
        $product->delete();
        return [
            'success' => true,
            'id' => $id,
        ];
    }
}
