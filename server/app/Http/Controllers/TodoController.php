<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function index(User $user) {
        return $user->todos()->get();
    }
}
