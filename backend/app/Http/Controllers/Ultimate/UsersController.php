<?php

namespace App\Http\Controllers\Ultimate;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\Ultimate\UserQueryRequest;
use App\Http\Requests\Ultimate\UserCreateRequest;

class UsersController extends Controller
{

    public function __construct() {
        $this->middleware('auth:api', [
            'only' => 'create','store','destroy'
        ]);
    }

    /**
     * Display a listing of the resource.
     * 
     * @param App\Http\Requests\Ultimate\UserQueryRequest $r
     * @return \Illuminate\Http\Response
     */
    public function index(UserQueryRequest $r)
    {
        $q = '';
        $l = 50;
        if ($r->has('q')) $q=$r->q;
        if ($r->has('l')) $l=$r->l;

        $query = DB::table('users');
        if (!empty($q)) $query->where('name','LIKE',"%$q%");
        $users = $query->paginate($l);
        return $users;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\Ultimate\UserCreateRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserCreateRequest $request)
    {
        $input = (object)$request->all();

        $user = new User;
        $user->email = $input->email;
        $user->name = $input->name;
        $user->password = Hash::make($input->password);
        $user->save();

        return [
            'success' => true,
            'id' => $user->id,
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
        return $user;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $input = (object)$request->all();
        
        if ($request->has('email'   )) $user->email    = $input->email;
        if ($request->has('name'    )) $user->name     = $input->name;
        if ($request->has('password')) $user->password = Hash::make($input->password);
        
        $user->save();
        
        return [
            'success' => true,
            'id' => $user->id,
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $id = $user->id;
        $user->delete($user->id);
        return [
            'success' => true,
            'id' => $id,
        ];
    }
}
