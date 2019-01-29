<template>
    <section class="menu-list" v-show="active">
        <ul>
            <router-link tag="li" to="/" exact>
                <a>TOPPAGE</a>
            </router-link>

            <router-link tag="li" to="/concept">
                <a>CONCEPT</a>
            </router-link>

            <router-link tag="li" to="/voice">
                <a>VOICE</a>
            </router-link>

            <router-link tag="li" to="/menu">
                <a>MENU&PRICE</a>
            </router-link>

            <router-link tag="li" to="/salon">
                <a>SALON</a>
            </router-link>

            <router-link tag="li" to="/beauty">
                <a>BEAUTY<span>x</span>PRICE</a>
            </router-link>

            <router-link tag="li" to="/nail">
                <a>NAIL</a>
            </router-link>

            <router-link tag="li" to="/recruit" exact>
                <a>RECRUIT</a>
            </router-link>
        </ul>
    </section>
</template>

<script>
    export default {
        props: {
            active: {
                type: Boolean,
                default: false
            },
        },
    }
</script>

<style scoped lang="scss">
    .menu-list {
        transition: all .4s;
        background-color: rgba(192, 212, 219, 0.9);
        height: 100vh;
        width: 40%;
        position: fixed;
        top: 0;
        right: 0;
        padding: 160px 50px 50px 50px;
        vertical-align: middle;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        z-index: 20;

        a {
            @apply .leading-normal;
            color: #333;
            font-weight: 600;
            font-size: 26px;
            letter-spacing: 0.2em;
            font-family: sofia-pro-condensed, sans-serif;
        }

        &.is-active a {
            color: #e38580;
        }
    }
</style>
