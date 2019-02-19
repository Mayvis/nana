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

        <section class="mb-16">
            <p class="md:text-center px-4 pb-8 font-fotura text-xs">
                ＊ メニュー・金額は一例です。<br class="hidden md:inline-block">
                各メニューの詳細やお得なクーポンは HOTPEPPER Beautyをご確認ください。
            </p>
        </section>

        <!--    table 1    -->
        <section class="mb-24">

            <div class="max-w-1000 mx-auto mb-16 flex flex-col md:flex-row px-8">
                <figure class="w-full md:w-1/2 tw-flex-end mb-8">
                    <img src="/decoration/menu_1.jpg" alt="EYELASH">
                </figure>

                <div class="w-full md:w-1/2 p-0 md:px-8 lg:pt-4">
                    <table class="tw-table">
                        <tr>
                            <th class="tw-header">
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

        <!--    table 2    -->
        <section class="mb-24">
            <div class="max-w-1000 mx-auto mb-16 flex flex-col md:flex-row px-8">
                <figure class="w-full md:w-1/2 mb-8">
                    <img src="/decoration/menu_2.jpg" alt="NAIL">
                </figure>

                <div class="w-full md:w-1/2 p-0 md:px-8">
                    <table class="tw-table">
                        <tr>
                            <th class="tw-header">
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

        <external-links></external-links>

        <breadcrumb></breadcrumb>

        <reserve></reserve>
    </div>
</template>

<script>
    import externalLinks from '../components/_ExternalLinks';

    export default {
        components: {externalLinks}
    }
</script>

<style scoped lang="scss">
    .tw-table {
        @apply text-xs leading-loose tracking-loose text-grey-darkest;

        td:last-child {
            @apply pl-4;
        }
    }

    .tw-header {
        @apply relative pb-4 text-left text-2xl font-bold tracking-loosest text-black;

        @screen md {
            @apply pb-0;
        }

        @screen lg {
            @apply text-4xl;
        }

        &:after {
            position: absolute;
            content: '';
            left: 0;
            bottom: 15%;
            width: 15%;
            height: 1px;
            background: #000;
        }
    }
</style>
