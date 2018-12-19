<?php

namespace App\Http\Controllers\Ultimate;

use App\Ultimate\Parameter;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ParametersController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api', [
            'only' => 'store','update','destroy'
        ]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $r)
    {
        $query = Parameter::select();
        if ($r->has('group')) $query->where('group', '=', $r->group);
        $parameters = $query->get();
        return $parameters;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $parameter = new Parameter;
        $parameter->name  = $request->name;
        if ($request->has('group')) $parameter->group = $request->group;
        $parameter->value = $request->value;
        $parameter->save();

        return [
            'success' => true,
            'id' => $parameter->id,
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  mixed  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $parameter = null;
        if (is_numeric($id)) $parameter = Parameter::findOrFail($id);
        else $parameter = Parameter::where('name', '=', $id)->firstOrFail();
        return $parameter;
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
        $parameter = null;
        if (is_numeric($id)) $parameter = Parameter::find($id);
        else $parameter = Parameter::where('name', '=', $id)->first();
        
        if ($request->has('value')) $parameter->value = $request->value;
        if ($request->has('group')) $parameter->group = $request->group;
        $parameter->save();

        return [
            'success' => true,
            'id' => $parameter->id,
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Parameter $parameter)
    {
        $id = $parameter->id;
        $parameter->delete();
        return [
            'success' => true,
            'id' => $id,
        ];
    }
}
