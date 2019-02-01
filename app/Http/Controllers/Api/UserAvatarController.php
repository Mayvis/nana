<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Validation\ValidationException;

class UserAvatarController extends Controller
{
    /**
     * Pluck avatar_path and name api.
     *
     * @return mixed
     */
    public static function index()
    {
        return User::all('avatar_path', 'name');
    }

    /**
     * Store user avatar.
     *
     * @throws ValidationException
     */
    public function store()
    {
        $this->validate(\request(), [
            'avatar' => ['required', 'image']
        ]);

        auth()->user()->update([
            'avatar_path' => \request()->file('avatar')->store('avatars', 'public')
        ]);

        return back();
    }
}
