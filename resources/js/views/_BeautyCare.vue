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

        <section class="lg:mb-24">
            <div class="max-w-1000 mx-auto">

                <div class="tw-title text-center relative lg:mb-16">
                    <span class="font-fotura leading-loose tracking-loose absolute sub-title font-sm">EYELASH CARE</span>

                    <h2 class="leading-normal font-san p-8 pt-12">“非常に便利なマツエクですが、お手入れには注意が必要な点もあります。</h2>
                </div>

                <div class="flex items-center justify-center lg:mb-16">
                    <p class="text-center text-light">
                        以下の点を押さえておくと、マツエクはとても簡単、そして安全に使用できます。<br>
                        不安な点、疑問点は、NANAのスタッフにご相談ください。<br>
                        プロ目線からの適切な対処法をお伝えします。<br>
                        ぜひみなさんも素敵なマツエクライフをお過ごしください！
                    </p>
                </div>

                <div>
                    <div class="flex">
                        <div class="tw-flex-size p-8">
                            <figure class="flex justify-center items-center bg-grey-lighter mb-8 h-200">
                                <img src="/icon/decoration_3.png" alt="オイルクレンジングは使用しない" width="46" height="92">
                            </figure>

                            <article>
                                <h3 class="text-grey-darkest">オイルクレンジングは使用しない</h3>

                                <span class="block py-4 font-fotura leading-loose tracking-loose">No Cleansing Oil</span>

                                <p class="pb-8">
                                    接着剤であるグルーには油分・水分に弱い性質があります。オイルタイプを使用すると接着剤が分解してしまうおそれがあるため基本は
                                    <span class="tw-mask">「オイルフリー」のクレンジングを使用</span>
                                    しましょう。
                                </p>
                            </article>
                        </div>

                        <div class="tw-flex-size p-8">
                            <figure class="flex justify-center items-center bg-grey-lighter mb-8 h-200">
                                <img src="/icon/decoration_4.png" alt="優しく乾かす" width="93" height="67">
                            </figure>

                            <article>
                                <h3 class="text-grey-darkest">優しく乾かす</h3>

                                <span class="block py-4 font-fotura leading-loose tracking-loose">Dry Gently</span>

                                <p class="pb-8">
                                    マツエクは非常にデリケートです。洗顔後にタオルで強くこすったりせず、
                                    <span class="tw-mask">タオルで優しく押さえる、ドライヤーで乾かす</span>
                                    など、丁寧に扱うことが重要です。
                                </p>
                            </article>
                        </div>
                    </div>

                    <div class="flex">
                        <div class="tw-flex-size p-8">
                            <figure class="flex justify-center items-center bg-grey-lighter mb-8 h-200">
                                <img src="/icon/decoration_3.png" alt="オイルクレンジングは使用しない" width="46" height="92">
                            </figure>

                            <article>
                                <h3 class="text-grey-darkest">コーム・美容液などでお手入れしよう</h3>

                                <span class="block py-4 font-fotura leading-loose tracking-loose">Comb & Essence</span>

                                <p class="pb-8">
                                    まつ毛専用のコームや美容液があります。髪などと同様にきちんと
                                    <span class="tw-mask">お手入れすることが長持ちさせるためのポイント</span>
                                    です。
                                </p>
                            </article>
                        </div>

                        <div class="tw-flex-size p-8">
                            <figure class="flex justify-center items-center bg-grey-lighter mb-8 h-200">
                                <img src="/icon/decoration_4.png" alt="優しく乾かす" width="93" height="67">
                            </figure>

                            <article>
                                <h3 class="text-grey-darkest">リペアのサイクルを作ろう</h3>

                                <span class="block py-4 font-fotura leading-loose tracking-loose">Repair Cycle</span>

                                <p class="pb-8">
                                    日々まつ毛も生まれ変わります。NANAのマツエクのモチはおおよそ1.5ヶ月と長めですが、
                                    <span class="tw-mask">数ヶ月に一度はきちんとオフ</span>
                                    をして、きれいな状態を保つようにしましょう。
                                </p>
                            </article>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <links></links>

        <breadcrumb :middle="{name: 'BEAUTY × LIFE', default: true}"></breadcrumb>

        <reserve></reserve>
    </div>
</template>

<script>
    import links from '../components/beauty/_Links';

    export default {
        components: {links},
    }
</script>

<style scoped lang="scss">
    .sub-title {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .tw-flex-size {
        flex-grow: 1;
        flex-basis: 0;
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
