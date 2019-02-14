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
            <menu-list :active="active"></menu-list>
        </portal>
    </div>
</template>

<script>
    import MenuList from './MenuList.vue';

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
            }
        },
    }
</script>

<style lang="scss" scoped>
    .menu {
        @apply border rounded-full relative cursor-pointer border-black bg-white fixed w-14 h-14;
        top: 60px;
        right: 50px;

        @media only screen and (max-width: 992px) {
            top: 30px;
            right: 20px;
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
