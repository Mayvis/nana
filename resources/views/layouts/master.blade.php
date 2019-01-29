<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Nana</title>

</head>
<body>
    <div id="app">
        <section>
            <ul>
                <router-link tag="li" to="/" exact>
                    TOPPAGE
                </router-link>

                <router-link tag="li" to="/concept">
                    CONCEPT
                </router-link>

                <router-link tag="li" to="/voice">
                    VOICE
                </router-link>

                <router-link tag="li" to="/menu_price">
                    MENU&PRICE
                </router-link>

                <router-link tag="li" to="/salon">
                    SALON
                </router-link>

                <router-link tag="li" to="/beauty">
                    BEAUTY<span>x</span>PRICE
                </router-link>

                <router-link tag="li" to="/beauty">
                    NAIL
                </router-link>

                <router-link tag="li" to="/recruit" exact>
                    RECRUIT
                </router-link>
            </ul>
        </section>

        <section>
            <div class="container">
                <router-view></router-view>
            </div>
        </section>
    </div>

    <script src="/js/app.js"></script>
</body>
</html>
