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
        if ($r->has('q')) $q=$r->q;
        if ($r->has('category_id')) $category_id=$r->category_id;

        $query = DB::table('products AS p')
            ->select('p.id','p.name','p.slug','p.org_price','p.dct_price','p.active','p.stars')
            ->distinct()
            ->join('product_categories AS pc', 'p.id', '=','pc.product_id')
            ->join('categories AS c', 'pc.category_id', '=','c.id');
        if (!empty($category_id)) {
            $query->where('c.id', '=', $category_id);
        }
        //if (!empty($q)) $query->where('name','LIKE',"%$q%");
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
        $product->description = $input->description;
        $product->org_price = $input->org_price;
        $product->dct_price = ($request->has('dct_price')) ? $input->dct_price : null;
        $product->active = true;
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
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
