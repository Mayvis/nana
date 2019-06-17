<template>
    <div>
        <hero-bg>
            <div slot="hero"
                 class="tw-hero beauty-bg">
            </div>

            <template slot="title">BEAUTY × LIFE</template>

            <template slot="desc">マツエクのある毎日</template>
        </hero-bg>

        <links></links>

        <!--   01    -->
        <section class="sm:mb-24 mb-8">
            <div class="max-w-1000 mx-auto px-4">
                <title-with-top-number>
                    <template slot="num">01</template>

                    <template slot="title">
                        “愛されネイル”で気持ちを
                    </template>
                </title-with-top-number>

                <essay :figure="{src: beautyImageURI_1,
                                 alt: '“愛されネイル”で気持ちを上げて、一歩踏み出そう',
                                 one_third: true,
                                 end: true}"
                >
                    <template slot="article">
                        <article>
                            <h3 class="pb-6">
                                季節、イベント、髪型に合わせたデザイン。<br>
                                指先ひとつで、モチベーションが変わる。
                            </h3>

                            <p class="pb-8">
                                ネイルは、日常生活に絶対に必要なもの、ではありません。ではなぜ、みんなネイルをするのでしょうか？「
                                <span class="tw-mask">ネイルをしていると、気分が上がる</span>
                                」。小さな変化ですが、日常生活にあっては大きな変化です。
                            </p>

                            <p class="pb-8">
                                手元はやはり、
                                <span class="tw-mask">何をしていても視界に入りやすい部分</span>
                                です。そこが美しいネイルに彩られているだけで、モチベーションが変わります。「週末のイベントに合わせたカラーにしてほしい」「これからの季節のモチーフを取り入れたい」「髪型を変えたから、ネイルも新しい色に挑戦してみたい」などなど。きっかけはさまざまでも、ネイルをしたいときは、やっぱりポジティヴになりたいときではないでしょうか。
                            </p>
                        </article>

                        <article>
                            <h3 class="pb-6">
                                ネイリストと話す至福の時間。<br>
                                ネイルは勇気をもらって<br class="md:hidden">一歩踏み出す大切なアイテム。
                            </h3>

                            <p class="pb-8">
                                ふかふかのソファに座ってネイリストさんと話をしながら、ゆったりとした時間を過ごす。そして、
                                <span class="tw-mask">出来上がったネイルを見て気持ちが華やぎ、視線がぐっと上を向く。</span>
                                少し落ちこんだ時、少しだけ勇気が欲しい時、そっと見つめる自分の指先。日常の中にあっても星のように瞬く“キラキラ”が、そこにはある。さまざまな気持ちを抱えた人たち
                                <span class="tw-mask">背中をそっと押すチカラ</span>
                                が、そのネイルにこめられています。
                            </p>
                        </article>
                    </template>
                </essay>

            </div>
        </section>

        <!--    02    -->
        <section class="sm:mb-24 mb-16">
            <div class="max-w-1000 mx-auto px-4">
                <title-with-top-number>
                    <template slot="num">02</template>

                    <template slot="title">
                        セルフネイルじゃダメ？プロに任せる理由とは
                    </template>
                </title-with-top-number>

                <essay :figure="{src: beautyImageURI_2,
                                 alt: 'セルフネイルじゃダメ？プロに任せる理由とは',
                                 one_third: true,
                                 end: false}">
                    <template slot="article">
                        <article>
                            <h3 class="pb-6">
                                アートもカラーも思いのまま。<br>
                                「短時間×長期間の輝き」は、サロンだけの魅力。
                            </h3>

                            <p class="pb-8">
                                ネイルは、今では自宅でもできる気軽なオシャレになっています。しかし自分でやるとなると、「乾くまでに一日を費やしてしまった」「利き手がうまくデザインできなかった」「2〜3日で取れてしまった」ということもしばしば。
                            </p>

                            <p class="pb-8">
                                その点、サロンで行うネイルは、プロのネイリストの手によるもの。きらびやかなアートやさまざまなカラーにも対応でき、
                                <span class="tw-mask">出来上がりの輝きはバツグン</span>
                                。プロの施術による
                                <span class="tw-mask">ネイルには浮き（剥がれ）がありません。</span>
                                またデコラティブなものはもちろん、シンプルで上品な愛されネイルほど、ネイリストの腕の見せどころ。
                            </p>

                            <p class="pb-8">
                                さらに
                                <span class="tw-mask">1〜2時間という短時間の施術で3〜4週間楽しめるといったモチの良さ</span>
                                も、大きな魅力です。
                            </p>
                        </article>
                    </template>
                </essay>

                <div class="flex mt-16 md:mt-0 mx-4">
                    <p class="lg:w-1/12 relative">
                        <span
                            class="ref-title text-2xl tracking-loose leading-loose border-b-2 border-black">CHECK!</span>
                    </p>

                    <div class="p-2 sm:p-8 lg:p-16 bg-grey-lighter w-full lg:w-11/12 flex justify-center">
                        <table class="tw-price-table">
                            <tr>
                                <th></th>
                                <th>
                                    <span class="tw-name relative inline-block px-2 sm:px-4 lg:px-8 bg-yellow-light">サロンネイル</span>
                                </th>
                                <th>
                                    <span
                                        class="tw-name relative inline-block px-2 sm:px-4 lg:px-8 bg-white">セルフネイル</span>
                                </th>
                            </tr>
                            <tr>
                                <th>価格</th>
                                <td>△</td>
                                <td>○</td>
                            </tr>
                            <tr>
                                <th>仕上がり</th>
                                <td>◎</td>
                                <td>△</td>
                            </tr>
                            <tr>
                                <th>施術時間</th>
                                <td>◎</td>
                                <td>△</td>
                            </tr>
                            <tr>
                                <th>デザイン</th>
                                <td>◎</td>
                                <td>○</td>
                            </tr>
                            <tr>
                                <th>ネイルの持ち<br class="md:hidden"><span class="hidden md:inline-block">・</span>
                                    崩れにくさ
                                </th>
                                <td>○</td>
                                <td>△</td>
                            </tr>
                            <tr>
                                <th>爪へのダメージ</th>
                                <td>◎</td>
                                <td>△</td>
                            </tr>
                            <tr>
                                <th>総合コスパ</th>
                                <td>◎</td>
                                <td>△</td>
                            </tr>
                        </table>
                    </div>
                </div>

            </div>
        </section>

        <!--    03    -->
        <section class="sm:mb-24 mb-8">
            <div class="max-w-1000 mx-auto px-4">

                <title-with-top-number>
                    <template slot="num">03</template>

                    <template slot="title">
                        派手さだけじゃない。大切な“爪のケア”にこそネイルがぴったり
                    </template>
                </title-with-top-number>

                <essay :figure="{src: beautyImageURI_3,
                                 alt: '派手さだけじゃない。大切な“爪のケア”にこそネイルがぴったり',
                                 one_third: true,
                                 end: true}">
                    <template slot="article">
                        <article>
                            <h3 class="pb-6">
                                ネイルの本質は“爪のケア”。<br>
                                トラブルの補修・キレイな爪をつくることがサロンの役割。
                            </h3>

                            <p class="pb-8">
                                「ネイル＝派手なデザイン」というイメージを持つ方も多いかもしれませんが、ネイルを受ける方には、「爪のケア」を目的とされている方も多くいらっしゃいます。
                            </p>

                            <p class="pb-8">
                                カラーリングする前の爪の状態を確認し、甘皮の処理、割れ・欠けなどの爪のトラブルの補修などはもちろん、男爪、鉤爪、巻爪なども、形を整えながら成長させることができ、
                                <span class="tw-mask">キレイな形の爪</span>
                                を作ることができます。短く清潔で自然に見えるネイルをオーダーする方も多く、特にオフィスネイルといったシンプルなデザインに加え爪の保護・補強を目的としたものなど、
                                <span class="tw-mask">ひとりひとりに合わせたケア</span>
                                が行える点もサロンネイルの特徴です。
                            </p>
                        </article>

                        <article>
                            <h3 class="pb-6">
                                名刺交換、会議。シンプルで美しい指先が、<br>
                                やわらかいコミュニケーションを生み出す。
                            </h3>

                            <p class="pb-8">
                                また、美しく上品に整えられた指先は、思わぬ効果をもたらすこともあります。たとえば名刺交換の際にふと目に入った指先から話が広がり、リラックスして会議に臨めた、といったことも。
                                <span class="tw-mask">ネイルは人と人とのやわらかなコミュニケーションを生み出すアイテム</span>
                                でもあるのです。ぜひみなさんも、自分らしい素敵なネイルライフをお過ごしください！
                            </p>
                        </article>
                    </template>
                </essay>

            </div>
        </section>

        <links></links>

        <breadcrumb :middle="{name: 'BEAUTY × LIFE', default: true}"></breadcrumb>

        <reserve></reserve>
    </div>
</template>

<script>
    import links from '../components/beauty/_Links';
    import titleWithTopNumber from '../components/_TitleWithTopNumber';
    import essay from '../components/_Essay';
    import beautyImageURI_1 from '../../../public/storage/decoration/beauty/beauty_3.jpg'
    import beautyImageURI_2 from '../../../public/storage/decoration/beauty/beauty_4.jpg'
    import beautyImageURI_3 from '../../../public/storage/decoration/beauty/beauty_5.jpg'

    export default {
        components: {links, titleWithTopNumber, essay},

        data() {
            return {
                beautyImageURI_1,
                beautyImageURI_2,
                beautyImageURI_3
            };
        },
    }
</script>

<style scoped lang="scss">
    .sub-title {
        @apply absolute pin-t text-3xl;
        left: 50%;
        transform: translate(-50%, -50%);

        @screen lg {
            @apply text-350;
        }
    }

    .tw-figure {
        @apply w-full overflow-hidden flex items-center max-h-300;

        @screen md {
            @apply w-1/3 pr-8 items-start max-h-none;
        }
    }

    .ref-title {
        @apply text-2xl tracking-loose leading-loose border-b-2 border-black absolute pin-l pin-t;
        transform: translateY(-100%);

        @screen md {
            top: 20px;
        }
    }

    .tw-price-table {
        @apply text-xs leading-loose tracking-loose;

        @screen sm {
            @apply text-sm;
        }

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

    .beauty-bg {
        background: url(../../../public/storage/hero/hero_bg_beauty.jpg) center center / cover no-repeat;
    }
</style>
