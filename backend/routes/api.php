<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
Route::middleware('auth:api')->get('/me', function (Request $request) {
    return $request->user();
});*/

Route::post('logout','Ultimate\\AccountController@logout');

Route::put ('product/hit/{id}'         , 'Ultimate\\ProductsController@hit'        );
Route::put ('product/click/{id}'       , 'Ultimate\\ProductsController@click'      );
Route::get ('product/categories'       , 'Ultimate\\ProductsController@categories' );
Route::post('product/delete_image/{id}', 'Ultimate\\ProductsController@deleteImage');
Route::get ('products/niu'             , 'Ultimate\\ProductsController@niu'        );
Route::get ('products/sold_most'       , 'Ultimate\\ProductsController@sold_most'  );

Route::put('category/hit/{id}'  , 'Ultimate\\CategoriesController@hit'  );
Route::put('category/click/{id}', 'Ultimate\\CategoriesController@click');

Route::delete('uploads/bucket/{id}', 'Ultimate\\UploadsController@destroyBucket');
Route::apiResources([
    'users'      => 'Ultimate\\UsersController',
    'products'   => 'Ultimate\\ProductsController',
    'categories' => 'Ultimate\\CategoriesController',
    'uploads'     => 'Ultimate\\UploadsController',
]);