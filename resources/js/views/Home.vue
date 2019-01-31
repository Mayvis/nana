<template>
    <div>
        <section class="flex justify-end relative lg:mb-32 container">
            <hero></hero>

            <carousel></carousel>

            <span class="absolute scroll text-sm font-fotura tracking-loose text-black">SCROLL ⇀</span>
        </section>

        <section class="lg:mb-16 container mx-auto">
            <div class="flex lg:pl-8">
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

        <section class="lg:pr-16 lg:pl-16 lg:mb-32 container mx-auto">
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

        <section class="lg:mb-32">
            <div class="flex container">
                <div class="lg:w-2/3">
                    <slider></slider>
                    <slider :right-to-left="true"></slider>
                </div>

                <div class="lg:w-1/3 lg:pl-16 flex justify-center flex-col">
                    <h3 class="tracking-loosest text-4xl text-black font-fotura leading-loose">INSTAGRAM</h3>

                    <a href="https://www.instagram.com/nana_eyelashsalon/"
                       class="ig-link"
                    >
                        <span>FOLLOW</span> @nana_eyelashsalon !
                    </a>

                    <a href="https://www.instagram.com/nana_nail_lisbon/"
                       class="ig-link"
                    >
                        <span>FOLLOW</span> @nana_nail_lisbon !
                    </a>
                </div>
            </div>
        </section>

        <section>
            <div class="container mx-auto bg-grey-lighter flex justify-center flex-col lg:p-24">
                <h3 class="tracking-loosest text-4xl text-black font-adobe leading-loosest text-center">MENU&PRICE</h3>

                <div class="flex">
                    <div class="flex-1 lg:pl-60">
                        <h4 class="item-h">Eyelash</h4>

                        <table class="price">
                            <tr>
                                <th>最高級セーブル 60本</th>
                                <td>¥2,980</td>
                            </tr>
                            <tr>
                                <th>最高級セーブル 80本</th>
                                <td>¥3,980</td>
                            </tr>
                            <tr>
                                <th>最高級セーブル上つけ放題</th>
                                <td>¥4,980</td>
                            </tr>
                            <tr>
                                <th>最高級セーブル上下つけ放題</th>
                                <td>¥6,980</td>
                            </tr>
                            <tr>
                                <th>ALLカラー 80本</th>
                                <td>¥5,060</td>
                            </tr>
                            <tr>
                                <th>3Dラッシュ 60束(240本以上)</th>
                                <td>¥5,980</td>
                            </tr>
                            <tr>
                                <th>3Dラッシュ 80束(320本以上)</th>
                                <td>¥6,980</td>
                            </tr>
                        </table>
                    </div>

                    <div class="flex-1 lg:pl-60">
                        <h4 class="item-h">Nail</h4>

                        <table class="price">
                            <tr>
                                <th>ハンド：ジェルワンカラー</th>
                                <td>¥4,980</td>
                            </tr>
                            <tr>
                                <th>ハンド：アート2本つけ放題</th>
                                <td>¥5,980</td>
                            </tr>
                            <tr>
                                <th>ハンド：アート4本つけ放題</th>
                                <td>¥6,980</td>
                            </tr>
                            <tr>
                                <th>ハンド：アート6本つけ放題</th>
                                <td>¥7,980</td>
                            </tr>
                            <tr>
                                <th>フット：クリアベースワンカラー</th>
                                <td>¥5,480</td>
                            </tr>
                            <tr>
                                <th>フット：アート10本</th>
                                <td>¥7,980</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="lg:pt-16">
                    <p class="text-center text-xs text-grey-darkest lg:pb-16">
                        ＊ メニュー・金額は一例です。各メニューの詳細やお得なクーポンはHOTPEPPER Beautyをご確認ください。
                    </p>

                    <div class="border-black border flex relative justify-center lg:pt-12">
                        <p class="absolute flex flex-col text-center p-8 bg-grey-lighter" style="top: -40px">
                            <span>メニュー＆クーポン一覧</span>

                            <span class="text-xs text-grey-darkest">( HOTPEPPER Beautyへリンクします )</span>
                        </p>

                        <a href="https://beauty.hotpepper.jp/kr/slnH000248220/coupon/"
                           class="concept-btn inline-block h-50 leading-50 text-xs w-1/4 text-center hover:bg-yellow-lighter lg:m-12"
                        >
                            MILANO & LA ROCHELLE
                        </a>
                        <a href="https://beauty.hotpepper.jp/kr/slnH000364510/coupon/"
                           class="concept-btn inline-block h-50 leading-50 text-xs w-1/4 text-center hover:bg-yellow-lighter lg:m-12"
                        >
                            LISBON
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Carousel from '../components/Carousel';
    import hero from '../components/home/_Hero';
    import slider from '../components/Slider';

    export default {
        components: {Carousel, hero, slider},
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

    .ig-link {
        @apply block font-fotura text-xs tracking-loose leading-loose relative;
        transition: opacity .4s;

        &:before {
            content: '';
            width: 20px;
            height: 1px;
            background: black;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
        }

        &:hover {
            opacity: 0.5;
        }

        span {
            display: inline-block;
            padding-left: 30px;
        }
    }

    .item-h {
        @apply font-adobe tracking-loosest text-xl font-normal relative leading-loose;
        margin-bottom: 20px;

        &:after {
            content: "";
            width: 30px;
            height: 1px;
            background: #555;
            position: absolute;
            left: 0;
            bottom: 0;
        }
    }

    .price {
        @apply text-left text-sm text-black leading-loose;

        tr {
            padding-top: 10px;
        }

        th, td {
            padding-right: 30px;
            font-weight: 300;
        }
    }
</style>
