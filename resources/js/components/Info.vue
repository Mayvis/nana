<template>
    <transition name="slide-fade">
        <div class="fixed pin-b pin-l w-full z-10" v-show="isVisible">
            <ul class="flex bg-teal-link">
                <li class="flex-1 text-center border-white border-r">
                    <p class="info">RESERVATION：ご予約はこちらから</p>
                </li>
                <li class="flex-1 border-white border-r list">
                    <a
                        href="https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000248220"
                        class="info arrow"
                    >
                        Milano & Le Rochelle
                    </a>
                </li>
                <li class="flex-1 border-white border-r list">
                    <a
                        href="https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000364510"
                        class="info arrow"
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
        @apply text-white tracking-loose text-sm font-fotura leading-50 block pl-12;
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
