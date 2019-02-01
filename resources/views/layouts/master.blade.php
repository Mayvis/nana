<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="https://nana.test/icon/favicon.ico">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>

<div id="app" class="relative" v-cloak style="min-height: 8000px">
    @include('layouts.header')

    <main>
        <div class="mx-auto">
            <router-view></router-view>
        </div>
    </main>

    <info></info>
</div>

</body>
</html>
