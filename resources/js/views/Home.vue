<template>
    <div>
        <!--    HERO    -->
        <section class="relative mb-24 container mx-auto">
            <hero></hero>

            <div class="relative w-full flex md:justify-end justify-center">
                <carousel></carousel>

                <span class="tw-scroll-icon">SCROLL ⇀</span>
            </div>
        </section>

        <!--    CONCEPT    -->
        <section class="mb-24 container mx-auto">
            <div class="flex justify-end relative">
                <figure class="lg:w-1/3 w-1/4 z-1 absolute pin-l pin-t md:block hidden"
                        data-aos="zoom-in-up"
                >
                    <img :src="conceptImageURI"
                         alt="concept">
                </figure>

                <div class="w-full md:w-4/5 lg:w-3/5 md:mt-16 bg-teal-lightest p-8 sm:p-50 xl:pl-90"
                     style="box-sizing: border-box"
                     data-aos="zoom-in-up"
                >
                    <article>
                        <h3 class="tracking-loosest text-4xl text-grey-darkest">CONCEPT</h3>

                        <p class="font-fotura my-7 text-xs">
                            Just a little tw-more-btn consideration leads your trust.<br>
                            NANA continues to be the "most loved place" in the beauty industry.<br>
                            Because we have relief, trust, compassion, not only to customers but also to staff.
                        </p>

                        <p class="font-fotura my-7 text-xs">
                            ほんの少しの“想い”が、お客さまの信頼につながる。<br>
                            安心、信頼、思いやり。<br>
                            お客さまだけではなくスタッフ同士にも共通する意識を持ち、<br>
                            NANAは美容業界でもっとも“愛される場所”であり続けます。
                        </p>
                    </article>

                    <div>
                        <router-link to="/concept">
                            <a
                                class="tw-btn sm:w-1/2"
                            >
                                コンセプト＆こだわり
                            </a>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>

        <!--    STORE    -->
        <section class="lg:py-16 mb-16 container mx-auto">
            <ul class="flex flex-col lg:flex-row">
                <li class="lg:w-1/3 w-full flex items-center">
                    <h2 class="tracking-loosest w-full text-center text-4xl text-black font-fotura">NANA SALON</h2>
                </li>

                <li class="lg:w-2/3 w-full"
                    data-aos="zoom-in-up"
                >
                    <ul class="flex lg:flex-row flex-col justify-center items-center py-4">

                        <li class="tw-thumbnail lg:w-1/3 w-full p-4">
                            <router-link tag="a"
                                         :to="{path: '/salon', hash: '#js-milano'}"
                                         class="flex lg:flex-col justify-center relative sm:pt-0 pt-8"
                            >
                                <figure class="w-2/5 sm:w-1/2 md:w-1/3 lg:w-full">
                                    <img src="/store/MILANO.jpg" alt="MILANO">
                                </figure>

                                <div class="pl-4 lg:pl-0 w-1/2 lg:w-full">
                                    <h4 class="sm:tracking-loosest text-xl sm:leading-loosest absolute sm:relative pin-l pin-t">
                                        MILANO</h4>

                                    <ul class="lg:mb-10 mb-4">
                                        <li class="hidden lg:block">10:00 - 20:00</li>
                                        <li>福岡市中央区天神2-4-20<br>天神プラッサ405号</li>
                                    </ul>

                                    <p class="xl:text-sm text-xs relative sm:pl-8">サロン紹介 & ご予約</p>
                                </div>
                            </router-link>
                        </li>

                        <li class="tw-thumbnail lg:w-1/3 w-full p-4">
                            <router-link tag="a"
                                         :to="{path: '/salon', hash: '#js-la-rochelle'}"
                                         class="flex lg:flex-col justify-center relative sm:pt-0 pt-8"
                            >
                                <figure class="w-2/5 sm:w-1/2 md:w-1/3 lg:w-full">
                                    <img src="/store/La_Rochelle.jpg" alt="La Rochelle">
                                </figure>

                                <div class="pl-4 lg:pl-0 w-1/2 lg:w-full">
                                    <h4 class="sm:tracking-loosest text-xl sm:leading-loosest absolute sm:relative pin-l pin-t">
                                        La Rochelle</h4>

                                    <ul class="lg:mb-10 mb-4">
                                        <li class="hidden lg:block">10:00 - 20:00</li>
                                        <li>福岡市中央区天神2-4-20<br>天神プラッサ902号</li>
                                    </ul>

                                    <p class="xl:text-sm text-xs relative sm:pl-8">サロン紹介 & ご予約</p>
                                </div>
                            </router-link>
                        </li>

                        <li class="tw-thumbnail lg:w-1/3 w-full p-4">
                            <router-link tag="a"
                                         :to="{path: '/salon', hash: '#js-lisbon'}"
                                         class="flex lg:flex-col justify-center relative sm:pt-0 pt-8"
                            >
                                <figure class="w-2/5 sm:w-1/2 md:w-1/3 lg:w-full">
                                    <img src="/store/LISBON.jpg" alt="LISBON">
                                </figure>

                                <div class="pl-4 lg:pl-0 w-1/2 lg:w-full">
                                    <h4 class="sm:tracking-loosest text-xl sm:leading-loosest absolute sm:relative pin-l pin-t">
                                        LISBON</h4>

                                    <ul class="lg:mb-10 mb-4">
                                        <li class="hidden lg:block">10:00 - 20:00</li>
                                        <li>福岡市中央区大名1-13-23<br>LEX21 5F</li>
                                    </ul>

                                    <p class="xl:text-sm text-xs relative sm:pl-8">サロン紹介 & ご予約</p>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>

        <!--    INSTAGRAM    -->
        <section class="mb-32">
            <div class="flex container mx-auto lg:m-0">
                <div class="lg:w-2/3 w-full">
                    <h3 class="tracking-loosest text-4xl text-black font-fotura leading-loose text-center lg:hidden">
                        INSTAGRAM</h3>

                    <a href="https://www.instagram.com/nana_eyelashsalon/"
                       class="ig-link text-center py-4 block lg:hidden"
                    >
                        <span>FOLLOW</span> @nana_eyelashsalon !
                    </a>

                    <slider></slider>

                    <a href="https://www.instagram.com/nana_eyelashsalon/"
                       class="ig-link text-center py-4 block lg:hidden"
                    >
                        <span>FOLLOW</span> @nana_eyelashsalon !
                    </a>

                    <slider :right-to-left="true"></slider>
                </div>

                <div class="lg:w-1/3 lg:pl-8 lg:flex lg:justify-center lg:flex-col hidden">
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

        <!--    PRICE    -->
        <section class="mb-24">
            <div class="container mx-auto bg-grey-lighter flex justify-center flex-col lg:p-24 p-8">
                <h3 class="tracking-loosest text-4xl text-black font-adobe leading-loosest text-center"
                    data-aos="zoom-in-up"
                >MENU&PRICE</h3>

                <div class="md:flex">
                    <div class="md:flex-1 lg:pl-60 mb-8"
                         data-aos="zoom-in-up"
                    >
                        <h4 class="tw-menu-title">Eyelash</h4>

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

                    <div class="md:flex-1 lg:pl-60 mb-8"
                         data-aos="zoom-in-up"
                    >
                        <h4 class="tw-menu-title">Nail</h4>

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

                <div class="lg:pt-16"
                     data-aos="zoom-in-up"
                >
                    <p class="text-center text-xs pb-16">
                        ＊ メニュー・金額は一例です。<br class="md:hidden">各メニューの詳細やお得なクーポンはHOTPEPPER Beautyをご確認ください。
                    </p>

                    <div class="border-black border flex relative justify-center flex-wrap md:flex-no-wrap md:pt-12">
                        <p class="md:absolute flex flex-col text-center p-8 bg-grey-lighter" style="top: -45px">
                            <span>メニュー＆クーポン一覧</span>

                            <span class="text-xs">( HOTPEPPER Beautyへリンクします )</span>
                        </p>

                        <a href="https://beauty.hotpepper.jp/kr/slnH000248220/coupon/"
                           class="tw-btn md:w-1/4 md:m-12 m-6"
                        >
                            MILANO & LA ROCHELLE
                        </a>

                        <a href="https://beauty.hotpepper.jp/kr/slnH000364510/coupon/"
                           class="tw-btn md:w-1/4 md:m-12 m-6"
                        >
                            LISBON
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!--    STAFF    -->
        <section class="mb-24">
            <div class="max-w-1000 px-4 mx-auto">
                <h3 class="tracking-loosest text-4xl text-black font-fotura mb-4 text-center md:text-left">
                    STAFF</h3>

                <cabinet></cabinet>
            </div>
        </section>

        <!--    BEAUTY x LIFE    -->
        <section class="mb-24">
            <div class="max-w-1000 mx-auto px-4">
                <h3 class="tracking-loosest text-4xl text-black font-fotura mb-4"
                    data-aos="fade-in"
                >BEAUTY×LIFE</h3>

                <ul class="flex flex-wrap"
                    data-aos="fade"
                >
                    <li class="thumbnail">
                        <router-link to="/beauty" tag="a">
                            <figure>
                                <img :src="beautyImageURI_1" alt="マツエクのある毎日">
                            </figure>

                            <article class="font-fotura font-adobe">
                                <h4 class="leading-loose lg:text-xl text-base tracking-loose pt-6">#マツエクのある毎日</h4>

                                <p class="font-thin text-sm pb-6">Eyelash Life</p>

                                <p class="text-xs pb-8">
                                    いつでも可愛くありたい、どんなときもキレイでいたい。誰もが持つそんな気持ちを、ほんのちょっとすくい上げる安心感がある。それがマツエクなのです。
                                </p>

                                <p class="tw-more-btn">READ MORE</p>
                            </article>
                        </router-link>
                    </li>

                    <li class="thumbnail">
                        <router-link to="/beauty">
                            <figure>
                                <img :src="beautyImageURI_2" alt="お手入れ方法">
                            </figure>

                            <article class="font-fotura font-adobe">
                                <h4 class="leading-loose lg:text-xl text-base tracking-loose pt-6">#お手入れ方法</h4>

                                <p class="font-thin text-sm pb-6">Eyelash Care</p>

                                <p class="text-xs pb-8">
                                    きれいなまつ毛を保つためにはどうしたらいいんだろう？みなさんに素敵なマツエクライフをお過ごしいただくための、プロ目線からの適切な対処法をお伝えします。
                                </p>

                                <p class="tw-more-btn">READ MORE</p>
                            </article>
                        </router-link>
                    </li>

                    <li class="thumbnail">
                        <router-link to="/beauty">
                            <figure>
                                <img :src="beautyImageURI_3" alt="ネイルのある毎日">
                            </figure>

                            <article class="font-fotura font-adobe">
                                <h4 class="leading-loose lg:text-xl text-base tracking-loose pt-6">#ネイルのある毎日</h4>

                                <p class="font-thin text-sm pb-6">Nail Life</p>

                                <p class="text-xs text-black pb-8">
                                    季節、イベント、髪型。あなたを彩る、もうひとつの魔法を指先に。日常の中にあっても星のように瞬く“キラキラ”が、そこにはあるのです。
                                </p>

                                <p class="tw-more-btn">READ MORE</p>
                            </article>
                        </router-link>
                    </li>
                </ul>
            </div>
        </section>

        <!--    RESERVE    -->
        <reserve></reserve>

        <!--    ARTICLE    -->
        <section class="mb-32 mx-4 hidden md:block">
            <div class="tw-article">
                <article>
                    福岡市天神・西通りに3つのマツエクサロンを展開する「NANA」は、福岡を代表するマツエク店です。口コミでの評判が高い人気店。初めてマツエクをされる方にも安心の高い技術力と国産の上質なエクステが、人気の理由です。3Dやカラー、ナチュラルなど、お客様のまつ毛にピッタリのデザインをご提案いたします。福岡でまつエクをお探しなら、まずは西通りのNANAにお越しください。
                </article>
            </div>
        </section>
    </div>
</template>

<script>
    import carousel from '../components/_Carousel';
    import hero from '../components/home/_Hero';
    import slider from '../components/_Slider';
    import cabinet from '../components/home/_Cabinet';
    import conceptImageURI from '../../../public/storage/decoration/concept.png';
    import storeImageURI_1 from '../../../public/storage/store/MILANO.jpg';
    import storeImageURI_2 from '../../../public/storage/store/La_Rochelle.jpg';
    import storeImageURI_3 from '../../../public/storage/store/LISBON.jpg';
    import beautyImageURI_1 from '../../../public/storage/beauty/beauty_1.jpg';
    import beautyImageURI_2 from '../../../public/storage/beauty/beauty_2.jpg';
    import beautyImageURI_3 from '../../../public/storage/beauty/beauty_3.jpg';

    export default {
        components: { carousel, hero, slider, cabinet },

        data() {
            return {
                conceptImageURI,
                storeImageURI_1,
                storeImageURI_2,
                storeImageURI_3,
                beautyImageURI_1,
                beautyImageURI_2,
                beautyImageURI_3
            };
        },
    };
</script>

<style scoped lang="scss">
    .tw-scroll-icon {
        @apply text-sm font-fotura tracking-loose text-black absolute;
        transform: rotate(90deg);
        bottom: 40px;
        right: -32px;
        animation: pos 2s ease-in-out infinite;

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
    }

    .tw-thumbnail {
        @apply text-black;
        transition: opacity .2s;

        &:hover {
            @apply opacity-50;
        }

        li {
            @apply font-fotura font-adobe text-xs tracking-wider leading-loose text-black;
        }

        p {
            &:before {
                @apply absolute pin-l hidden bg-grey-darkest w-5;
                content: "";
                height: 1px;
                top: 8px;

                @screen sm {
                    @apply block;
                }
            }
        }
    }

    .ig-link {
        @apply font-fotura text-xs tracking-loose leading-loose relative;
        transition: opacity .4s;

        &:before {
            @apply hidden pin-l absolute bg-black w-5;
            content: '';
            height: 1px;
            top: 50%;
            transform: translateY(-50%);

            @screen lg {
                @apply block;
            }
        }

        &:hover {
            @apply opacity-50;
        }

        span {
            @apply inline-block pl-7;
        }
    }

    .tw-menu-title {
        @apply font-adobe tracking-loosest text-xl font-normal relative leading-loose mb-5;

        &:after {
            @apply absolute pin-l pin-b bg-grey-darkest;
            content: "";
            width: 30px;
            height: 1px;
        }
    }

    .price {
        @apply text-left text-sm text-black leading-loose;

        tr {
            @apply pt-3;
        }

        th, td {
            @apply font-thin pr-7;
        }
    }

    .thumbnail {
        @apply w-full p-4;
        transition: opacity .4s;

        @screen sm {
            @apply w-1/2;
        }

        @screen lg {
            @apply w-1/3;
        }

        &:hover {
            @apply opacity-60;
        }

        .tw-more-btn {
            @apply text-xs relative pl-8;

            &:before {
                @apply pin-l bg-grey-darkest absolute w-5;
                content: "";
                height: 1px;
                top: 10px;
            }
        }
    }

    .tw-article {
        @apply flex justify-center mx-auto p-16 text-xs tracking-loosest leading-loose max-w-1000;

        background: url('../../../public/storage/icon/left_top.svg') left top/10px 10px no-repeat,
        url('../../../public/storage/icon/right_top.svg') right top/10px 8px no-repeat,
        url('../../../public/storage/icon/left_bottom.svg') left bottom/10px 10px no-repeat,
        url('../../../public/storage/icon/right_bottom.svg') right bottom/10px 8px no-repeat #fff;
    }
</style>
