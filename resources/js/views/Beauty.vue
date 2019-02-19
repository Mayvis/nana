<template>
    <div>
        <hero-bg>
            <div slot="hero"
                 class="tw-hero"
                 style="background: url('/hero/hero_bg_beauty.jpg') center center / cover no-repeat;">
            </div>

            <template slot="title">BEAUTY × LIFE</template>

            <template slot="desc">マツエクのある毎日</template>
        </hero-bg>

        <links></links>

        <!--   01    -->
        <section class="mb-24">
            <div class="max-w-1000 mx-auto px-4">
                <title-with-top-number>
                    <template slot="num">01</template>

                    <template slot="title">
                        マツエクは、オンナノコの<br class="md:hidden">『ラク』を作ってくれる
                    </template>
                </title-with-top-number>

                <essay :figure="{src: '/decoration/beauty/beauty_1.jpg',
                                 alt: 'マツエクのある毎日  NANA（福岡市中央区天神西通り）',
                                 one_third: true,
                                 end: false}">
                    <template slot="article">
                        <article>
                            <h3 class="pb-6">
                                すっぴんはもう怖くない！<br>
                                海水浴も野外ライブも、マツエクで楽しもう。
                            </h3>

                            <p class="pb-8">
                                例えば、お友だちや彼氏と温泉に行くなど、すっぴんになる機会があるとき。<br>
                                「どうしようかな」と思ってしまうこともあるのはないでしょうか？<br>
                                マツエクだと、マスカラのように色が落ちてしまう心配もありません。プールや海水浴といった水のレジャーに加え、野外ライブなども思いっきり楽しむことができます。
                            </p>
                        </article>

                        <article>
                            <h3 class="pb-6">
                                ナチュラルな目元をキープ。朝のメイク時間をもっとラクに。
                            </h3>

                            <p class="pb-8">
                                また、マツエクをしている皆さんが口を揃えて言うのは「毎日のお化粧がとてもラクになった」ということ。
                                <span class="tw-mask">朝の忙しい時間の中で、きっちりメイクをするのは実はとても大変</span>
                                だ、ということは、女性なら誰しも経験していることでしょう。<br>
                                そういった時にも、マツエクは大活躍！　常にナチュラルな目元を維持できます。まさに「
                                <span class="tw-mask">オンナノコのラクを作ってくれる</span>
                                」のがマツエクなのです。
                            </p>
                        </article>
                    </template>
                </essay>

            </div>
        </section>

        <!--    02    -->
        <section class="mb-24">
            <div class="max-w-1000 mx-auto px-4">
                <title-with-top-number>
                    <template slot="num">02</template>

                    <template slot="title">
                        実際にはどう違うの？ <br class="md:hidden">マスカラ・つけまつげと比べてみよう
                    </template>
                </title-with-top-number>

                <div class="flex sm:flex-wrap sm:justify-center px-4">
                    <div class="sm:w-full md:pl-8 mb-16">
                        <article>
                            <h3 class="pb-6">
                                お風呂もOK、仕上がりもキレイ、そして、コスパ抜群！
                            </h3>

                            <p class="pb-8">
                                とはいえ、「つけまつげでも同じじゃない？」「マスカラのほうが金額的にも安い」という声も聞こえます。 それぞれのメリット・デメリットを紐解いてみましょう。
                            </p>
                        </article>
                    </div>

                </div>

                <div class="flex">
                    <p class="lg:w-1/12 relative">
                        <span
                            class="ref-title text-2xl tracking-loose leading-loose border-b-2 border-black">CHECK!</span>
                    </p>

                    <div class="p-2 sm:p-8 lg:p-16 bg-grey-lighter w-full lg:w-11/12 flex justify-center">
                        <table class="tw-price-table">
                            <tr>
                                <th></th>
                                <th>
                                    <span class="tw-name relative inline-block px-2 sm:px-4 lg:px-8 bg-yellow-light">
                                        マツエク
                                    </span>
                                </th>
                                <th>
                                    <span class="tw-name relative inline-block px-2 sm:px-4 lg:px-8 bg-white">
                                        マスカラ
                                    </span>
                                </th>
                                <th>
                                    <span
                                        class="tw-name relative inline-block px-2 sm:px-4 lg:px-8 bg-white">つけまつげ</span>
                                </th>
                            </tr>
                            <tr>
                                <th>価格</th>
                                <td>△</td>
                                <td>○</td>
                                <td>○</td>
                            </tr>
                            <tr>
                                <th>まつげの<br class="sm:hidden">ボリューム</th>
                                <td>◎</td>
                                <td>△</td>
                                <td>○</td>
                            </tr>
                            <tr>
                                <th>メイクの手間</th>
                                <td>◎</td>
                                <td>△</td>
                                <td>△</td>
                            </tr>
                            <tr>
                                <th>メイクの自然さ</th>
                                <td>◎</td>
                                <td>○</td>
                                <td>△</td>
                            </tr>
                            <tr>
                                <th>メイクの持ち<span class="hidden sm:inline-block">・</span><br class="sm:hidden">
                                    崩れにくさ
                                </th>
                                <td>○</td>
                                <td>△</td>
                                <td>○</td>
                            </tr>
                            <tr>
                                <th>総合コスパ</th>
                                <td>◎</td>
                                <td>△</td>
                                <td>○</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="flex flex-col border-b border-grey pb-12">
                    <h3 class="leading-normal font-san p-8 pl-0">マスカラ</h3>

                    <div class="flex flex-col md:flex-row">
                        <figure class="bg-grey-lighter flex justify-center items-center tw-icon md:mr-8 w-full">
                            <img src="/icon/decoration_1.png" alt="マスカラ" width="42" height="72">
                        </figure>

                        <div class="py-4 tw-flex-size">
                            <div class="pb-4">
                                <h4 class="tw-mask inline-block">#Merit</h4>
                            </div>

                            <ul class="text-xs leading-loose tracking-loose">
                                <li>・一度購入すると長持ちするため、コスパが良い</li>
                                <li>・ボリュームや長さを自分で調整できる</li>
                                <li>・色や種類が豊富</li>
                            </ul>
                        </div>

                        <div class="py-4 tw-flex-size">
                            <div class="pb-4">
                                <h4 class="tw-mask inline-block">#Demerit</h4>
                            </div>

                            <ul class="text-xs leading-loose tracking-loose">
                                <li>・水や汗に弱く、落ちやすい</li>
                                <li>・ダマができるなど、仕上がりに個人差ができる</li>
                                <li>・毎回つける時間が必要</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col pb-12">
                    <h3 class="leading-normal font-san p-8 pl-0">マスカラ</h3>

                    <div class="flex flex-col md:flex-row">
                        <figure class="bg-grey-lighter flex justify-center items-center tw-icon md:mr-8 w-full">
                            <img src="/icon/decoration_2.png" alt="つけまつげ" width="71" height="41">
                        </figure>

                        <div class="py-4 tw-flex-size">
                            <div class="pb-4">
                                <h4 class="tw-mask inline-block">#Merit</h4>
                            </div>

                            <ul class="text-xs leading-loose tracking-loose">
                                <li>・値段が安く、種類が豊富</li>
                                <li>・付け外しが簡単</li>
                                <li>・どんな自まつげにも対応</li>
                            </ul>
                        </div>

                        <div class="py-4 tw-flex-size">
                            <div class="pb-4">
                                <h4 class="tw-mask inline-block">#Demerit</h4>
                            </div>

                            <ul class="text-xs leading-loose tracking-loose">
                                <li>・汗や水分に弱く、外れやすい</li>
                                <li>・手先が不器用な人は時間がかかる</li>
                                <li>・見た目より重さを感じる</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center items-center pb-12 border border-black py-4 my-8 relative">
                    <article class="tw-article">
                        <span class="tw-center">マツエクはコスパ抜群！</span>

                        <p class="h-full">
                            それぞれのメリット・デメリットを比較するとこのような点が挙げられます。すべてマツエクのほうが優れているとは言い切れませんが、「仕上がりがキレイ」「時間短縮になる」「そのままお風呂に入れる」などの点からみても、マツエクのメリットは多いのです。
                            日々の生活のちょっとした“安心”を感じられる点が、マツエクの一番の特徴と言えます。
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <!--    03    -->
        <section class="mb-24">
            <div class="max-w-1000 mx-auto px-4">

                <title-with-top-number>
                    <template slot="num">03</template>

                    <template slot="title">
                        「まつげがついていないと、<br class="md:hidden">
                        気分が上がらないのよね」
                    </template>
                </title-with-top-number>

                <essay :figure="{src: '/decoration/beauty/beauty_2.jpg',
                                 alt: '「まつげがついていないと、気分が上がらないのよね」',
                                 one_third: true,
                                 end: true}">
                    <template slot="article">
                        <article>
                            <h3 class="pb-6">
                                いつでも可愛く、いつでもキレイ。<br>
                                少しの自信が、体を内側から元気にする。
                            </h3>

                            <p class="pb-8">
                                「まつげがついていないと、気分が上がらない」。この言葉は実際にお客さまが言われたものです。目元というほんのちょっとの差ですが、女性ならではの心境の変化をよく言い当てた言葉ではないでしょうか。
                            </p>

                            <p class="pb-8">
                                心というのは不思議なもので、ほんのちょっと
                                <span class="tw-mask">自分に自信が持てると体は内側から元気になります。</span>
                                植物が水を得てみずみずしくなるように、女性は自分が美しいと感じると、どんどんキレイになっていきます。
                            </p>
                        </article>

                        <article>
                            <h3 class="pb-6">
                                仕事も人間関係も、もっとスムーズに。<br>
                                マツエクは、心から美人になれる原動力。
                            </h3>

                            <p class="pb-8">
                                <span class="tw-mask">美しさとは、まさに健康そのもの。</span>
                                心がポジティブになると、もっと外に出ていきたくなり、笑顔になり、仕事や人間関係など、さまざまなものを円滑に進みます。その原動力となる美しさのひとつが、マツエクです。
                            </p>

                            <p class="pb-8">
                                いつでも可愛くありたい、どんなときもキレイでいたい。誰もが持つそんな気持ちを、
                                <span class="tw-mask">ほんのちょっとすくい上げる安心感がある。</span>
                                それがマツエクなのです。
                            </p>
                        </article>
                    </template>
                </essay>
            </div>
        </section>

        <external-links></external-links>

        <links></links>

        <breadcrumb :middle="{name: 'BEAUTY × LIFE', default: true}"></breadcrumb>

        <reserve></reserve>
    </div>
</template>

<script>
    import links from '../components/beauty/_Links';
    import essay from '../components/_Essay';
    import externalLinks from '../components/_ExternalLinks';
    import titleWithTopNumber from '../components/_TitleWithTopNumber';

    export default {
        components: {links, essay, externalLinks, titleWithTopNumber},
    }
</script>

<style scoped lang="scss">
    .tw-price-table {
        @apply text-xs leading-loose tracking-loose w-full;

        @screen md {
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
            @apply text-left p-2;

            @screen md {
                @apply p-4;
            }
        }

        td {
            @apply text-center p-2;

            @screen md {
                @apply p-4;
            }
        }
    }

    .tw-icon {
        flex: 0 0 135px;
    }

    .tw-flex-size {
        flex-grow: 1;
        flex-basis: 0;
    }

    .tw-article {
        @apply flex flex-col items-center justify-center w-full p-4 h-full;

        @screen md {
            @apply p-0 w-2/3;
        }
    }

    .tw-center {
        @apply whitespace-no-wrap pin-t absolute font-bold;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        padding: 0 40px;
    }

    .tw-name:before {
        content: '(';
        @apply absolute pin-t pin-l;
    }

    .tw-name:after {
        content: ')';
        @apply absolute pin-t pin-r;
    }

    .ref-title {
        @apply text-2xl tracking-loose leading-loose border-b-2 border-black absolute pin-l pin-t;
        transform: translateY(-100%);

        @screen md {
            top: 20px;
        }
    }
</style>
