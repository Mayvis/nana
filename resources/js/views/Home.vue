<template>
    <div>
        <section class="flex justify-end relative lg:mb-32">
            <hero></hero>

            <div class="flex justify-end">
                <carousel></carousel>
            </div>

            <span class="absolute scroll text-sm font-fotura tracking-loose text-black">SCROLL ⇀</span>
        </section>

        <section class="lg:mb-16">
            <div class="container flex lg:pl-8">
                <figure class="w-2/5">
                    <img src="/decoration/concept.png" alt="concept">
                </figure>

                <div class="w-3/5 m-16 bg-teal-lightest p-50 pl-90" style="box-sizing: border-box">
                    <article>
                        <h3 class="tracking-loosest text-4xl leading-loose">CONCEPT</h3>

                        <p class="font-fotura font-adobe mt-7 mb-7 text-xs tracking-wider leading-loose text-black">
                            Just a little more consideration leads your trust.<br>
                            NANA continues to be the "most loved place" in the beauty industry.<br>
                            Because we have relief, trust, compassion, not only to customers but also to staff.
                        </p>

                        <p class="font-fotura font-adobe mt-7 mb-7 text-xs tracking-wider leading-loose text-black">
                            ほんの少しの“想い”が、お客さまの信頼につながる。<br>
                            安心、信頼、思いやり。<br>
                            お客さまだけではなくスタッフ同士にも共通する意識を持ち、<br>
                            NANAは美容業界でもっとも“愛される場所”であり続けます。
                        </p>
                    </article>

                    <div>
                        <router-link to="/concept">
                            <a
                                class="concept-btn inline-block h-50 leading-50 text-xs w-2/5 text-center hover:bg-yellow-lighter"
                            >
                                コンセプト＆こだわり
                            </a>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>

        <section class="lg:pr-16 lg:pl-16 lg:mb-16">
            <ul class="flex">
                <li class="lg:w-1/3 flex items-center">
                    <h3 class="tracking-loosest text-4xl text-black font-fotura">NANA SALON</h3>
                </li>

                <li class="lg:w-2/3">
                    <ul class="flex py-4">
                        <li class="lg:mr-12 tw-thumbnail">
                            <a href="/">
                                <figure>
                                    <img src="/store/MILANO.jpg" alt="MILANO">
                                </figure>

                                <div class="mb-10">
                                    <h4>MILANO</h4>
                                    <ul>
                                        <li>10:00 - 20:00</li>
                                        <li>福岡市中央区天神2-4-20<br>天神プラッサ405号</li>
                                    </ul>
                                </div>

                                <p>サロン紹介 & ご予約</p>
                            </a>
                        </li>
                        <li class="tw-thumbnail lg:mr-12">
                            <a href="/">
                                <figure>
                                    <img src="/store/La_Rochelle.jpg" alt="La Rochelle">
                                </figure>

                                <div class="mb-10">
                                    <h4>La Rochelle</h4>
                                    <ul>
                                        <li>10:00 - 20:00</li>
                                        <li>福岡市中央区天神2-4-20<br>天神プラッサ902号</li>
                                    </ul>
                                </div>

                                <p>サロン紹介 & ご予約</p>
                            </a>
                        </li>
                        <li class="tw-thumbnail">
                            <a href="/">
                                <figure>
                                    <img src="/store/LISBON.jpg" alt="LISBON">
                                </figure>

                                <div class="mb-10">
                                    <h4>LISBON</h4>
                                    <ul>
                                        <li>10:00 - 20:00</li>
                                        <li>福岡市中央区大名1-13-23<br>LEX21 5F</li>
                                    </ul>
                                </div>

                                <p>サロン紹介 & ご予約</p>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    import Carousel from '../components/Carousel';

    export default {
        components: {Carousel},
    }
</script>

<style sroped lang="scss">
    .hero {
        top: 160px;
        left: 130px;

        text {
            fill: rgba(255, 255, 255, 0);
            stroke: #333;
            font-size: 76px;
            stroke-width: .8;
            stroke-linejoin: round;
            line-height: 1;
        }

        .sub {
            letter-spacing: .3em;
        }

        .line {
            width: 72px;
            height: auto;
        }

        .list li {
            @apply font-fotura text-15;
            letter-spacing: 0.6em;
            line-height: 3.5;
        }
    }

    .scroll {
        transform: rotate(90deg);
        bottom: 40px;
        right: -75px;
        animation: pos 2s ease-in-out infinite;
    }

    @keyframes pos {
        0% {
            bottom: 50px
        }
        50% {
            bottom: 40px
        }
        100% {
            bottom: 50px
        }
    }

    .concept-btn {
        transition: background-color .2s;

        background: url('/icon/left_top.svg') left top/10px 10px no-repeat,
        url('/icon/right_top.svg') right top/10px 8px no-repeat,
        url('/icon/left_bottom.svg') left bottom/10px 10px no-repeat,
        url('/icon/right_bottom.svg') right bottom/10px 8px no-repeat #fff;
    }

    .tw-thumbnail {
        @apply text-black;
        transition: opacity .2s;

        &:hover {
            opacity: 0.5;
        }

        h4 {
            @apply tracking-loosest text-xl leading-loosest;
        }

        li {
            @apply font-fotura font-adobe text-xs tracking-wider leading-loose text-black;
        }

        p {
            @apply text-sm relative pl-8;

            &:before {
                content: "";
                width: 20px;
                height: 1px;
                position: absolute;
                top: 8px;
                left: 0;
                background-color: #555;
            }
        }
    }
</style>
