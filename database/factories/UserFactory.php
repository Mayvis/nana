<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

/* @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\User::class, function (Faker $faker) {
    $store = ['MILANO', 'La Rochelle', 'LISBON'];
    static $number = 1;

    return [
        'name' => $faker->firstName . ' ' . $faker->lastName,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
        'store_name' => $store[rand(0, 2)],
        'avatar_path' => 'avatars/STAFF_' . $number++ . '.jpg',
        // 'avatar_path' => $faker->image('public/storage/avatars', 40, 40),
        'remember_token' => str_random(10),
    ];
});
