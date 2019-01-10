<?php

namespace App\Http\Controllers\Ultimate;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Ultimate\Content;

class ContentsController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api', [
            'only' => 'create','store','destroy'
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $r)
    {
        $query = Content::select('id','reference','title','lang','type','group','ord','enabled','hits','clicks');
        if ($r->has('type' )) $query->where('type','=',$r->type);
        if ($r->has('lang' )) $query->where('lang','=',$r->lang);
        if ($r->has('group')) $query->where('group','=',$r->group);
        return $query->paginate(50);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $r)
    {
        $content = new Content;
        $content->reference = $r->reference;
        $content->lang = $r->lang;
        $content->type = $r->type;
        $content->group = $r->group;
        $content->ord = $r->ord;
        $content->title = $r->title;
        $content->draft = $r->content;
        $content->enabled = $r->enabled;
        $content->save();

        return [
            'id' => $content->id,
            'success' => true
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
        $result = null;
        if (is_numeric($id)) $result = Content::find($id);
        else $result = Content::where('reference','=',$id)->first();
        return $result;
    }
    
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $r, $id)
    {
        $content = null;
        if (is_numeric($id)) $content = Content::find($id);
        else $content = Content::where('reference','=',$id)->first();
        if ($r->has('reference')) $content->reference = $r->reference;
        if ($r->has('lang'     )) $content->lang    = $r->lang;
        if ($r->has('type'     )) $content->type    = $r->type;
        if ($r->has('group'    )) $content->group   = $r->group;
        if ($r->has('ord'      )) $content->ord     = $r->ord;
        if ($r->has('content'  )) $content->title   = $r->title;
        if ($r->has('content'  )) $content->draft   = $r->content;
        if ($r->has('enabled'  )) $content->enabled = $r->enabled;
        $content->save();

        return [
            'id' => $content->id,
            'success' => true
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $content = null;
        if (is_numeric($id)) $content = Content::find($id);
        else $content = Content::where('reference','=',$id)->first();

        $content->delete();

        return [
            'id' => $content->id,
            'success' => true
        ];
    }
}
