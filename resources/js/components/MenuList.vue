<template>
    <section class="menu-list" v-show="active">
        <ul>
            <router-link tag="li" to="/" exact>
                <a class="menu-list-item">TOPPAGE</a>
            </router-link>

            <router-link tag="li" to="/concept">
                <a class="menu-list-item">CONCEPT</a>
            </router-link>

            <router-link tag="li" to="/voice">
                <a class="menu-list-item">VOICE</a>
            </router-link>

            <router-link tag="li" to="/menu">
                <a class="menu-list-item">MENU&PRICE</a>
            </router-link>

            <router-link tag="li" to="/salon">
                <a class="menu-list-item">SALON</a>
            </router-link>

            <router-link tag="li" to="/beauty">
                <a class="menu-list-item">BEAUTYxPRICE</a>
            </router-link>

            <router-link tag="li" to="/nail">
                <a class="menu-list-item">NAIL</a>
            </router-link>

            <router-link tag="li" to="/recruit" exact>
                <a class="menu-list-item">RECRUIT</a>
            </router-link>
        </ul>

        <div class="flex text-center -ml-5">
            <a href="/" class="icon">
                <img src="/icon/ig.png" alt="instagram-eye" class="w-7 h-7">
                <span>EYE</span>
            </a>

            <a href="/" class="icon">
                <img src="/icon/ig.png" alt="instagram-nail" class="w-7 h-7">
                <span>NAIL</span>
            </a>
        </div>
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
        @apply w-2/5 h-screen fixed pin-t pin-r align-middle z-20 overflow-y-scroll scrolling-touch bg-teal-lightest;
        transition: all .4s;
        padding: 160px 50px 50px 50px;

        .menu-list-item {
            @apply leading-loose font-semibold text-2xl text-black tracking-loose font-adobe font-sans relative;

            &:after {
                @apply bg-black absolute pin-l;
                content: "";
                width: 0;
                height: 2px;
                bottom: -12px;
                transition: all .2s;
            }

            &:hover:after {
                @apply w-full;
            }
        }

        .is-active .menu-list-item {
            @apply text-pink;
        }
    }

    .icon {
        @apply flex flex-col text-xs font-adobe font-sans leading-loose m-5;
        transition: opacity .3s;

        &:hover {
            @apply opacity-50;
        }
    }
</style>
