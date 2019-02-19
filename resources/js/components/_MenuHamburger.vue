<template>
    <div>
        <div class="menu"
             @click="check"
             :class="(active === true) ? 'active': ''">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <portal to="header-after">
            <menu-list :active="active" @change="activated"></menu-list>
        </portal>
    </div>
</template>

<script>
    import MenuList from './_MenuList.vue';

    export default {
        components: {MenuList},

        data() {
            return {
                active: false
            }
        },

        methods: {
            check() {
                this.active = (this.active !== true);
            },

            activated() {
                this.active = false;
            }
        },
    }
</script>

<style lang="scss" scoped>
    .menu {
        @apply relative cursor-pointer bg-white fixed w-14 h-14 pin-t pin-r;

        @screen md {
            @apply rounded-full border border-black;
            top: 30px;
            right: 20px;
        }

        @screen lg {
            top: 60px;
            right: 50px;
        }

        &.active {
            span:first-child {
                transform: translate(0, 0) rotate(-45deg);
            }

            span:nth-child(2) {
                transform: translate(60px, 0);
                opacity: 0;
            }

            span:last-child {
                transform: translate(0, 0) rotate(45deg);
            }
        }

        span {
            background-color: #333;
            width: 20px;
            height: 1px;
            position: absolute;
            top: calc(50% - (1px / 2));
            left: 20px;
            transition: all .2s;
            transform-origin: center center;
        }

        > span:first-child {
            transform: translate(0, -7px);
        }

        > span:last-child {
            transform: translate(0, 7px);
        }
    }
</style>
