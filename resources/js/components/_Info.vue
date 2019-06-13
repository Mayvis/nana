<template>
    <transition name="slide-fade">
        <div class="fixed pin-b pin-l w-full z-10" v-show="isVisible">
            <ul class="flex bg-teal-link flex-wrap">
                <li class="w-full lg:w-1/3 text-center border-white border-r">
                    <p class="info text-center">RESERVATION：ご予約はこちらから</p>
                </li>

                <li class="w-1/2 lg:w-1/3 border-white border-r list">
                    <a
                        href="https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000248220"
                        class="info arrow pl-12"
                    >
                        Milano & Le Rochelle
                    </a>
                </li>

                <li class="w-1/2 lg:w-1/3 border-white border-r list">
                    <a
                        href="https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000364510"
                        class="info arrow pl-12"
                    >
                        Lisbon
                    </a>
                </li>
            </ul>
        </div>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                isVisible: false,
            }
        },

        mounted() {
            window.addEventListener('scroll', _.throttle(this.checkDisplay, 600), {passive: true});
        },

        methods: {
            checkDisplay() {
                this.isVisible = window.pageYOffset > 60;
            },
        },
    }
</script>

<style scoped lang="scss">
    .list {
        transition: background-color .4s;
        background-color: #B0C9D2;

        &:hover {
            background-color: #cedee3;
        }
    }

    .info {
        @apply text-white text-sm font-fotura leading-50 block;
    }

    .arrow {
        background: url('/icon/right_arrow.png') 30px center/10px 10px no-repeat;
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
