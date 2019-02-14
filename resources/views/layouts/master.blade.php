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

<div id="app" class="relative" v-cloak>
    @include('layouts.header')

    <main>
        <div class="mx-auto">
            <transition name="fade" mode="out-in">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
    </main>

{{--    <footer class="pb-50 bg-grey-lighter">--}}
{{--        <div class="container mx-auto flex justify-between text-xs text-grey-darker">--}}
{{--            <span class="leading-50">Copyright © CASABLANCA All Rights Reserved.</span>--}}

{{--            <div>--}}
{{--                <a href="/" class="leading-50 text-grey-darker">Recruit</a> / <a href="/"--}}
{{--                                                                                 class="leading-50 text-grey-darker">Site--}}
{{--                    Map</a>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--    </footer>--}}

{{--    <info></info>--}}
</div>

</body>
</html>
