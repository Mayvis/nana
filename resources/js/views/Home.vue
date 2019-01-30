<template>
    <div>
        <section class="flex justify-end relative lg:mb-32">
            <div class="hero absolute z-10 font-adobe">
                <h2>
                    <svg width="54" height="86" class="mr-7">
                        <text x="0" y="0" dominant-baseline="hanging">N</text>
                    </svg>

                    <svg width="54" height="86" class="mr-7">
                        <text x="0" y="0" dominant-baseline="hanging">A</text>
                    </svg>

                    <svg width="54" height="86" class="mr-7">
                        <text x="0" y="0" dominant-baseline="hanging">N</text>
                    </svg>

                    <svg width="54" height="86">
                        <text x="0" y="0" dominant-baseline="hanging">A</text>
                    </svg>
                </h2>

                <p class="sub font-fotura">Eyelash Extensions Salon.</p>

                <div>
                    <div>
                        <img src="/icon/line.png" alt="break-line" class="line">
                    </div>

                    <ul class="list">
                        <li>Milano</li>
                        <li>Le Rochelle</li>
                        <li>Lisbon</li>
                    </ul>
                </div>
            </div>

            <div class="flex justify-end">
                <carousel></carousel>
            </div>

            <span class="absolute scroll text-sm font-fotura tracking-loose text-black">SCROLL ⇀</span>
        </section>

        <section>
            <div class="container flex">
                <figure class="w-1/3">
                    <img src="/decoration/concept.png" alt="concept" class="mb-16 mt-16">
                </figure>

                <div class="w-2/3 m-16 bg-teal-lightest p-50 pl-90">
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
        0% {bottom: 50px}
        50% {bottom: 40px}
        100% {bottom: 50px}
    }

    .concept-btn {
        transition: background-color .2s;

        background: url('/icon/left_top.svg') left top/10px 10px no-repeat,
        url('/icon/right_top.svg') right top/10px 8px no-repeat,
        url('/icon/left_bottom.svg') left bottom/10px 10px no-repeat,
        url('/icon/right_bottom.svg') right bottom/10px 8px no-repeat #fff;
    }
</style>
