<?php

namespace App\Http\Controllers\Ultimate;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UploadsController extends Controller
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
        $storage = storage_path('app/upload');
        $bucket = $r->bucket;
        $pattern = "*";
        if ($bucket) $pattern = "$bucket.*";
        $filepaths = glob("$storage/$pattern");
        $files = [];
        foreach ($filepaths as $fp) {
            $files[] = basename($fp);
        }

        return [
            'bucket' => $bucket,
            'storage' => $storage,
            'files' => $files
        ];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $r)
    {
        $bucket = $r->bucket;
        
        $uniq = uniqid();
        $hasFile = $r->hasFile('image');
        
        $file  = $r->image;
        $valid = $file->isValid();
        $path = $file->path();
        $extension = $file->extension();
        $filename = $file->getClientOriginalName();
        $dest = "$bucket.$uniq.$filename";
        $file->storeAs('upload',$dest);
        
        return [
            'success' => true,
            'id' => $uniq,
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        $storage = storage_path('app/upload');
        $pattern = "*.$id.*";
        $filepaths = glob("$storage/$pattern");
        $fp = $filepaths[0];
        
        $fn = basename($fp);
        $re = unlink($fp);
    
        return [
            'success' => true,
            'id' => $id,
            //'deleted' => $fp,
            //'re' => $re,
        ];
    }

    public function destroyBucket($id) {
        $storage = storage_path('app/upload');
        $pattern = "$id.*";
        $filepaths = glob("$storage/$pattern");
        
        $deleted = [];
        foreach ($filepaths as $fp) {
            $fn = basename($fp);
            $deleted[] = $fn;
            $re = unlink($fp);
        }
        return [
            'success' => true,
            'id' => $id,
            //'deleted' => $deleted,
            //'re' => $re,
        ];
    }
}
