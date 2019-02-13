<template>
    <div>
        <section class="lg:mb-24">
            <div class="hero-concept"></div>
            <div>
                <svg width="100%" height="86" class="svg-concept">
                    <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central">BEAUTY × LIFE</text>
                </svg>

                <p class="text-center">マツエクのある毎日</p>
            </div>
        </section>

        <section class="lg:mb-24 flex flex-col items-center max-w-1000 mx-auto">
            <div class="w-3/5 flex">
                <router-link tag="a" to="/beauty" class="tw-link-group hover:bg-grey-lighter">
                    マツエクのある毎日
                </router-link>

                <router-link tag="a" to="/beauty/care" class="tw-link-group hover:bg-grey-lighter">
                    マツエクのお手入れ方法
                </router-link>
            </div>

            <div class="w-3/5 flex">
                <router-link tag="a" to="/beauty/life" class="tw-link-group hover:bg-grey-lighter border-b">
                    ネイルのある毎日
                </router-link>

                <router-link tag="a" to="/beauty/gallery" class="tw-link-group hover:bg-grey-lighter border-b">
                    お客様 × NANA
                </router-link>
            </div>
        </section>

        <section class="lg:mb-24">
            <div class="max-w-1000 mx-auto">
                <div class="tw-title text-center relative lg:mb-16">
                    <span
                        class="font-fotura leading-loose tracking-loose absolute sub-title font-sm">INSTAGRAM</span>
                    <h2 class="leading-normal font-san p-8 pt-12">NANA COLLECTION</h2>
                </div>

                <div>
                    <p class="text-center pb-8">
                        FOLLOW <a href="/" class="hover:text-grey-darker tw-mask">@nana_eyelashsalon !</a>
                    </p>

                    <collection></collection>
                </div>

                <div>
                    <p class="text-center pb-8">
                        FOLLOW <a href="/" class="hover:text-grey-darker tw-mask">@nana_nail_lisbon !</a>
                    </p>

                    <collection></collection>
                </div>
            </div>
        </section>

        <section class="lg:mb-24 max-w-1000 mx-auto">
            <div class="lg:pt-16">
                <div class="border-black border flex relative justify-center lg:pt-12">
                    <p class="absolute flex flex-col text-center p-8 bg-white" style="top: -45px">
                        <span>NANA INSTAGRAM</span>

                        <span class="text-xs text-grey-darkest pt-4">( Instagram へリンクします )</span>
                    </p>

                    <a href="https://www.instagram.com/nana_eyelashsalon/"
                       class="tw-btn inline-block h-50 leading-50 text-xs w-1/4 text-center hover:bg-yellow-lighter lg:m-12"
                    >
                        EYELASH
                    </a>

                    <a href="https://www.instagram.com/nana_nail_lisbon/"
                       class="tw-btn inline-block h-50 leading-50 text-xs w-1/4 text-center hover:bg-yellow-lighter lg:m-12"
                    >
                        NAIL
                    </a>
                </div>
            </div>
        </section>

        <section class="lg:mb-24 flex flex-col items-center max-w-1000 mx-auto">
            <div class="w-3/5 flex">
                <router-link tag="a" to="/beauty" class="tw-link-group hover:bg-grey-lighter">
                    マツエクのある毎日
                </router-link>

                <router-link tag="a" to="/beauty/care" class="tw-link-group hover:bg-grey-lighter">
                    マツエクのお手入れ方法
                </router-link>
            </div>

            <div class="w-3/5 flex">
                <router-link tag="a" to="/beauty/life" class="tw-link-group hover:bg-grey-lighter border-b">
                    ネイルのある毎日
                </router-link>

                <router-link tag="a" to="/beauty/gallery" class="tw-link-group hover:bg-grey-lighter border-b">
                    お客様 × NANA
                </router-link>
            </div>
        </section>

        <section class="lg:mb-24">
            <div class="max-w-1200 border-b border-grey pb-4 tw-line relative">
                <div class="max-w-600">
                    <ul class="flex justify-center">
                        <li>
                            <router-link to="/"
                                         class="text-xs tracking-wider leading-loose text-grey-darkest hover:text-grey-dark"
                            >
                                HOME&nbsp|&nbsp
                            </router-link>
                        </li>
                        <li class="text-xs tracking-wider leading-loose text-grey-darkest">
                            BEAUTY & LIFE&nbsp|&nbsp
                        </li>
                        <li>
                            <router-link to="/beauty/life"
                                         class="text-xs tracking-wider leading-loose text-teal"
                            >
                                ネイルのある毎日
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <reserve></reserve>
    </div>
</template>

<script>
    import collection from '../components/_collection';

    export default {
        components: { collection },
    }
</script>

<style scoped lang="scss">
    .hero-concept {
        background: url('/hero/hero_bg_beauty.jpg') center center / cover no-repeat;
        height: 360px;
        margin-top: -165px;
    }

    .svg-concept {
        overflow: visible;
        height: 86px;
        margin-top: -30px;
        font-family: "sofia-pro-condensed", sans-serif;
        font-size: 86px;
        line-height: 1;
        letter-spacing: .2em;

        text {
            fill: rgba(255, 255, 255, 0);
            stroke: #333;
            stroke-width: .8;
            stroke-linejoin: round;
            font-family: "sofia-pro-condensed", sans-serif;
            line-height: 1;
        }
    }

    .is-exact-active {
        @apply bg-grey-lighter;
    }

    .text-teal.is-exact-active {
        background: inherit;
    }

    .tw-link-group {
        @apply w-1/2 p-8 border-t border-grey-light mr-4 text-sm text-grey-darkest relative;

        &:after {
            content: '';
            position: absolute;
            background: url('/icon/harpoon.png') right center/12px 4px no-repeat;
            width: 20px;
            height: 4px;
            right: 8px;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    .sub-title {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .tw-title {
        background: url('/icon/left_top.svg') left top/10px 10px no-repeat,
        url('/icon/right_top.svg') right top/10px 8px no-repeat,
        url('/icon/left_bottom.svg') left bottom/10px 10px no-repeat,
        url('/icon/right_bottom.svg') right bottom/10px 8px no-repeat,
        url('/icon/dot.png') top left/6px 6px repeat;
    }

    .tw-price-table {
        @apply text-sm leading-loose tracking-loose;

        tr {
            @apply border-b border-grey-light;

            span {
                @apply font-light leading-none;
            }

            &:last-child {
                @apply border-none;
            }
        }

        th {
            @apply text-left p-4;
        }

        td {
            @apply text-center p-4;
        }
    }

    .tw-name:before {
        content: '(';
        position: absolute;
        left: 0;
    }

    .tw-name:after {
        content: ')';
        position: absolute;
        right: 0;
    }
</style>
