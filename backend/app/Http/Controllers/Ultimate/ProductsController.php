<?php

namespace App\Http\Controllers\Ultimate;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Ultimate\Product;
use App\Ultimate\ProductCategory;
use App\Http\Requests\Ultimate\ProductCreateRequest;
use App\Http\Requests\Ultimate\ProductUpdateRequest;
use Illuminate\Support\Facades\DB;

class ProductsController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api');
    }

    private function saveProduct(Request $request, Product $product) {
        $input = (object)$request->all();
        $categories = [];

        if ($request->has('name'       )) $product->name        = $input->name;
        if ($request->has('slug'       )) $product->slug        = $input->slug;
        if ($request->has('overview'   )) $product->overview    = $input->overview;
        if ($request->has('description')) $product->description = $input->description;
        if ($request->has('org_price'  )) $product->org_price   = $input->org_price;
        if ($request->has('dct_price'  )) $product->dct_price   = $input->dct_price;
        if ($request->has('visible'    )) $product->visible     = $input->visible;
        if ($request->has('qty'        )) $product->qty         = $input->qty;
        if ($request->has('categories' )) $categories           = $input->categories;

        $product->save();
        foreach ($categories as $c) {
            $pc = new ProductCategory;
            $pc->product_id = $product->id;
            $pc->category_id = $c;
            $pc->save();
        }
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
        $category_id = null;
        if ($r->has('q')) $q=trim($r->q);
        if ($r->has('category_id')) $category_id=$r->category_id;

        $query = DB::table('products AS p')
            ->select('p.id','p.name','p.slug','p.org_price','p.dct_price','p.stars', 'p.qty', 'p.created_at')
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
        $products = $query->paginate(50);
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
