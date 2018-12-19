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

/**
 * Products Controller. CRUD for products and other product related endeavors.
 */
class ProductsController extends Controller
{
    /**
     * Constructor
     */
    public function __construct() {
        $this->middleware('auth:api', [
            'only' => 'create','store','destroy'
        ]);
    }

    /**
     * Return a query for a product list
     */
    private function browseProductQuery() {
        return DB::table('products AS p')
            ->select('p.id','p.name','p.slug','p.org_price','p.dct_price','p.rating_value','p.rating_count',
                DB::raw('p.rating_value/p.rating_count AS ratings'), 'p.hot', 'p.hot_until', 'p.qty','p.featured', 'p.created_at','p.updated_at')
            ->distinct()
            ->join('product_categories AS pc', 'p.id', '=','pc.product_id')
            ->join('categories AS c', 'pc.category_id', '=','c.id');
        
    }

    /**
     * Append the product category to the product itself.
     * 
     * @param   \App\Ultimate\Product $product    Product to append the category to.  
     */
    private function appendProductCategories(Product &$product) {
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
    }

    /**
     * Append image cover to the product record.
     * 
     * @param   mixed   $product    Product record
     */
    private function appendProductImageCover(&$product) {
        $softpath = '/images/products';
        $hardpath = public_path($softpath);
        $pid = $product->id;
        $product->image_cover = url("/assets/product.png");
        $search = glob("$hardpath/$pid.0.*");
        if ($search) {
            $image = basename($search[0]);
            $product->image_cover = url("$softpath/$image");
        }
    }

    /**
     * Append all images to a product record.
     * 
     * @param   \App\Ultimate\Product $product    Product to append images
     */
    private function appendProductImages(Product &$product) {
        $softpath = '/images/products';
        $hardpath = public_path($softpath);
        $pid = $product->id;
        
        $search = glob("$hardpath/{$product->id}.*.*");
        $images = [];
        foreach ($search as $file) {
            $image = basename($file);
            $images[] = url("$softpath/$image");
        }
        $product->images = $images;
    }

    /**
     * Take the images from the temporary folder to the images.
     * 
     * @param   \App\Ultimate\Product $product    Product
     * @param   string  $image_bucket   Image bucket string (file prefix) 
     * @return \Illuminate\Http\Response
     */
    private function importProductImages(Product &$product, $image_bucket) {
        $source = storage_path('app/upload');
        $dest = public_path('images/products');
        $pattern = "$image_bucket.*";
        $pid = $product->id;
        
        $maxord = -1;
        $minord = 9999;
        $coverImage = null;
        $newFiles = glob("$source/$pattern");
        $existingFiles = glob("$dest/$pid.*");

        //Check existing files, make sure we dont step on them
        foreach ($existingFiles as $file) {
            $filename = basename($file);
            $m = [];
            preg_match("/(\d+)\.(\d+)\.(.*)/", $filename, $m);
            $tord = 0 + $m[2];//get the order number
            if ($maxord < $tord) {
                $maxord = $tord;
            }
            if ($minord > $tord) {
                $minord = $tord;
                $coverImage = $filename;
            }
        }
        //If the cover has been deleted, put one
        if ($minord > 0 && $coverImage) {
            $oldCoverImage = "$dest/$coverImage";
            $info = (object) pathinfo($oldCoverImage);
            $newCoverImage = "$dest/$pid.0.{$info->extension}";
            rename($oldCoverImage, $newCoverImage);
        }

        //append the newly uploaded images
        $ord = $maxord+1;
        foreach ($newFiles as $file) {
            $info = pathinfo($file);
            $ext = $info['extension'];
            $renameTo = "$dest/$pid.$ord.$ext";
            rename($file, $renameTo);
            $ord++;
        }
    }

    /**
     * Create new or update existing product
     * 
     * @param   \Illuminate\Http\Request $request    Request
     * @param   \App\Ultimate\Product $product    Product 
     * @return  \App\Ultimate\Product
     */
    private function saveProduct(Request $request, Product $product) {
        $input = (object)$request->all();
        $add_categories = [];
        $del_categories = [];
        $image_bucket = false;
        if ($request->has('image_bucket')) $image_bucket = $input->image_bucket;

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
            if ($request->has('del_categories')) $del_categories = $input->del_categories;
        }
    
        if ($request->has('add_categories')) $add_categories = $input->add_categories;

        $product->save();
        $addcats = [];
        foreach ($add_categories as $c) {
            $addcats[] =  ['category_id' => $c, 'product_id' => $product->id];
        }

        ProductCategory::where('product_id',$product->id)
            ->whereIn('category_id',$del_categories)
            ->delete();
        ProductCategory::insert($addcats);

        if ($image_bucket) {
            $this->importProductImages($product, $image_bucket);
        }
        return $product;
    }

    /**
     * Display a listing of products.
     * 
     * @param \Illuminate\Http\Request  $r  Request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $r)
    {
        $q = '';
        $l = 50;
        $category_id = null;
        if ($r->has('q')) $q=trim($r->q);
        if ($r->has('l')) $l = $r->l;
        if ($r->has('category_id'  )) $category_id = $r->category_id;
        if ($r->has('cid'          )) $category_id = $r->cid;
        if ($r->has('category_slug')) $category_slug = $r->category_slug;
        if ($r->has('csl'          )) $category_slug = $r->csl;

        $query = $this->browseProductQuery();
        if (!empty($category_id)) {
            $query->where('c.id', '=', $category_id);
        }
        if (!empty($category_slug)) {
            $query->where('c.slug', '=', $category_slug);
        }
        if (!empty($q)) {
            $rq = preg_replace('/\s+/','%',$q);
            $query->where('p.name','LIKE',"%$rq%");
        }
        $query->where('p.visible', '=',true);
        $products = $query->paginate($l);

        foreach ($products as $product) {
            $this->appendProductImageCover($product);
            //$this->appendProductImages($product);
        }
        return $products;
    }

    /**
     * Return a simple list of all categories
     * 
     * @return \Illuminate\Http\Response
     */
    public function categories() {
        return Category::all();
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
     * Display the specified Product.
     *
     * @param  int  $id Product Id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = null;
        if (is_numeric($id)) $product = Product::find($id);
        else $product = Product::where('slug','=',$id)->first();

        $this->appendProductCategories($product);
        $this->appendProductImageCover($product);
        $this->appendProductImages($product);
        return $product;
    }

    /**
     * Update the specified Product in storage.
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
     * @param   Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $id = $product->id;
        $product->delete();

        $images = glob(public_path("images/products/$id.*"));
        foreach($images as $image) {
            unlink($image);
        }
        return [
            'success' => true,
            'id' => $id,
            'deleted' => $images
        ];
    }

    /**
     * Adds a hit to a given product
     * @param   int $id Product Id
     * @return \Illuminate\Http\Response
     */
    public function hit($id) {
        $product = Product::find($id);
        $product->hits++;
        $product->save();
        
        return [
            'success' => true,
            'id'      => $product->id,
            'hits'    => $product->hits
        ];
    }

    /**
     * Adds a click to a given product
     * @param   int $id Product Id
     * @return \Illuminate\Http\Response
     */
    public function click($id) {
        $product = Product::find($id);
        $product->clicks++;
        $product->save();
        
        return [
            'success' => true,
            'id'      => $product->id,
            'clicks'  => $product->clicks,
        ];
    }

    /**
     * Delete an existing product image
     * 
     * @param   Request $r  Request
     * @param   int $id Product Id
     */
    public function deleteImage(Request $r, $id) {
        ///Delete the file
        $filename = $r->filename;
        $path = public_path("images/products/$filename");
        unlink($path);
        $filepath = null;

        //If the cover image has been the image
        //find the next suitable one
        $search = glob(public_path("images/products/$id.0.*"));
        if (!$search) {
            $search = glob(public_path("images/products/$id.*.*"));
            if ($search) {
                $filepath = $search[0];
            }
        }

        //If a suitable cover image was found, set is as the cover
        if ($filepath) {
            $info = (object)pathinfo($filepath);
            $ext = $info->extension;
            rename($filepath, "images/products/$id.0.$ext");
        }

        return [
            'success' => true,
            'id' => $id,
            'filename' => $filename
        ];
    }

    /**
     * Return featured products per category
     */
    public function niu() {
        $categories = ['pijamas','chaquetas','combos-maternos','gorros','ruanas'];
        $result = [];
        foreach ($categories as $c) {
            $query = $this->browseProductQuery();
            
            $query->where('c.slug','=',$c);
            $query->where('p.featured','=',1);
            $result[$c] = $query->limit(4)->get();
        }
        return $result;
    }

    /**
     * Return list of most sold products
     */
    public function sold_most() {
        $query = $this->browseProductQuery();
        
        $query->orderBy('p.sales_count','desc');

        return $query->latest()->limit(8)->get();
    }

    /**
     * Get the single hot product whose future
     * date is nearest to the current date.
     */
    public function hot() {
        $now = new \DateTime();
        $query = Product::where('hot','=', 1)->where('hot_until','>',$now);
        $query->orderBy('hot_until','asc');
        $product = $query->first();
        return $product;
    }
}
