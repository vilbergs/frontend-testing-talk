<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use App\Models\User;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function index(Request $request) {
        return $request->user()->todos()->get();
    }

    public function store(Request $request) {
        return Todo::create([
            'title' => request('title'),
            'is_complete' => false,
            'user_id' => $request->user()->id
        ]);
    }

    public function update(Todo $todo) {
        $this->authorize('update', $todo);

        if(request('title')) {
            $todo->title = request('title');
        }

        if(request('is_complete') !== null) {
            $todo->is_complete = request('is_complete');
        }

        return $todo->save();
    }
}
