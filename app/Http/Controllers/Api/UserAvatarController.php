<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Validation\ValidationException;

class UserAvatarController extends Controller
{
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
