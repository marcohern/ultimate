<?php

namespace App\Http\Controllers\Ultimate;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Ultimate\Product;
use App\Http\Requests\Ultimate\ProductCreateRequest;
use Illuminate\Support\Facades\DB;

class ProductsController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api');
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
        //
        $input = (object)$request->all();

        $product = new Product;
        $product->name = $input->name;
        $product->slug = $input->slug;
        $product->overview = $input->overview;
        $product->description = $input->description;
        $product->org_price = $input->org_price;
        $product->dct_price = ($request->has('dct_price')) ? $input->dct_price : null;
        $product->visible = true;
        $product->qty = $input->qty;
        $product->save();

        return [
            'success' => true,
            'id' => $product->id,
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
     * @param  \Illuminate\Http\Request  $request
     * @param  Product  $oroduct
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,Product $oroduct)
    {
        $input = (object)$request->all();
        if ($request->has('name'       )) $product->name        = $input->name;
        if ($request->has('slug'       )) $product->slug        = $input->slug;
        if ($request->has('overview'   )) $product->overview    = $input->overview;
        if ($request->has('description')) $product->description = $input->description;
        if ($request->has('org_price'  )) $product->org_price   = $input->org_price;
        if ($request->has('dct_price'  )) $product->dct_price   = $input->dct_price;
        if ($request->has('visible'    )) $product->visible     = $input->visible;
        if ($request->has('qty'        )) $product->qty         = $input->qty;
        $product->save();

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
    public function destroy(Product $oroduct)
    {
        $id = $oroduct->id;
        $oroduct->delete($id);
        return [
            'success' => true,
            'id' => $id,
        ];
    }
}
