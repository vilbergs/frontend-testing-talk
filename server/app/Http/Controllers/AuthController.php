<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
      /**
     * Login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
            $user = Auth::user(); 
   
            return response()->json([
                'user' => $user,
                'token' => $user->createToken('MyApp')->plainTextToken
            ]);
        } 
        else{ 
            return $this->sendError('Unauthorised.', ['error'=>'Unauthorised']);
        } 
    }

    public function logout(Request $request)
    {
        return Auth::logout();

        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }
}
