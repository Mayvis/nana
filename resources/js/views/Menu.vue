<template>
    <div>
        <hero-bg>
            <div slot="hero"
                 class="tw-hero"
                 style="background: url('/hero/hero_bg_menu_and_price.jpg') center center / cover no-repeat;">
            </div>

            <template slot="title">MENU & PRICE</template>

            <template slot="desc">メニュー & 料金</template>
        </hero-bg>

        <section class="lg:mb-16">
            <p class="text-center pb-8 font-fotura text-xs">
                ＊ メニュー・金額は一例です。各メニューの詳細やお得なクーポンはHOTPEPPER Beautyをご確認ください。
            </p>
        </section>

        <section class="lg:mb-24">

            <div class="max-w-1000 mx-auto lg:mb-16 flex">
                <figure class="lg:w-1/2 tw-flex-end">
                    <img src="/decoration/menu_1.jpg" alt="EYELASH">
                </figure>

                <div class="lg:w-1/2 tw-flex-start p-8 pt-4">
                    <table class="text-xs leading-loose tracking-loose text-grey-darkest">
                        <tr>
                            <th class="text-left text-4xl font-bold leading-loosest tracking-loosest text-black tw-header relative">
                                EYELASH
                            </th>
                        </tr>
                        <tr>
                            <td>最高級セーブル 60本</td>
                            <td>¥2,980</td>
                        </tr>
                        <tr>
                            <td>最高級セーブル 80本</td>
                            <td>¥3,980</td>
                        </tr>
                        <tr>
                            <td>最高級セーブル上つけ放題</td>
                            <td>¥4,980</td>
                        </tr>
                        <tr>
                            <td>最高級セーブル上下つけ放題</td>
                            <td>¥6,980</td>
                        </tr>
                        <tr>
                            <td>ALLカラー 80本</td>
                            <td>¥5,060</td>
                        </tr>
                        <tr>
                            <td>3Dラッシュ 60束(240本以上)</td>
                            <td>¥5,980</td>
                        </tr>
                        <tr>
                            <td>3Dラッシュ 80束(320本以上)</td>
                            <td>¥6,980</td>
                        </tr>
                    </table>
                </div>
            </div>

        </section>

        <section class="lg:mb-24">
            <div class="max-w-1000 mx-auto lg:mb-16 flex">
                <figure class="lg:w-1/2 lg:mr-16">
                    <img src="/decoration/menu_2.jpg" alt="NAIL">
                </figure>

                <div class="lg:w-1/2">
                    <table class="text-xs leading-loose tracking-loose text-grey-darkest">
                        <tr>
                            <th class="text-left text-4xl font-bold tracking-loosest text-black tw-header relative leading-none pb-8">
                                NAIL
                            </th>
                        </tr>
                        <tr>
                            <td>ハンド：ジェルワンカラー</td>
                            <td>¥4,980</td>
                        </tr>
                        <tr>
                            <td>ハンド：アート2本つけ放題</td>
                            <td>¥5,980</td>
                        </tr>
                        <tr>
                            <td>ハンド：アート4本つけ放題</td>
                            <td>¥6,980</td>
                        </tr>
                        <tr>
                            <td>ハンド：アート6本つけ放題</td>
                            <td>¥7,980</td>
                        </tr>
                        <tr>
                            <td>フット：クリアベースワンカラー</td>
                            <td>¥5,480</td>
                        </tr>
                        <tr>
                            <td>フット：アート10本</td>
                            <td>¥7,980</td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>

        <section class="lg:mb-24 max-w-1000 mx-auto">
            <div class="lg:pt-16">
                <div class="border-black border flex relative justify-center lg:pt-12">
                    <p class="absolute flex flex-col text-center p-8 bg-white" style="top: -45px">
                        <span>メニュー＆クーポン一覧</span>

                        <span class="text-xs pt-4">( HOTPEPPER Beautyへリンクします )</span>
                    </p>

                    <a href="https://beauty.hotpepper.jp/kr/slnH000248220/coupon/"
                       class="tw-btn inline-block h-50 leading-50 text-xs w-1/4 text-center hover:bg-yellow-lighter lg:m-12"
                    >
                        MILANO & LA ROCHELLE
                    </a>
                    <a href="https://beauty.hotpepper.jp/kr/slnH000364510/coupon/"
                       class="tw-btn inline-block h-50 leading-50 text-xs w-1/4 text-center hover:bg-yellow-lighter lg:m-12"
                    >
                        LISBON
                    </a>
                </div>
            </div>
        </section>

        <breadcrumb></breadcrumb>

        <reserve></reserve>
    </div>
</template>

<script>
    export default {
        created() {
            // axios
        }
    }
</script>

<style scoped lang="scss">
    .tw-header:after {
        position: absolute;
        content: '';
        left: 0;
        bottom: 15%;
        width: 15%;
        height: 1px;
        background: #000;
    }
</style>
