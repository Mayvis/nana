<template>
    <div>
        <hero-bg>
            <div slot="hero"
                 class="tw-hero nail-bg">
            </div>

            <template slot="title">NAIL</template>

            <template slot="desc">ネイル</template>
        </hero-bg>

        <section class="mb-24">
            <div class="max-w-1000 mx-auto flex">

                <essay :figure="{src: nailImageURI_1,
                                 alt: '手に入れるのは“しなやかな” 美しさ',
                                 end: true}">
                    <template slot="article">

                        <title-with-left-number>
                            <template slot="num">01</template>

                            <template slot="title">
                                手に入れるのは<br>
                                “しなやかな” 美しさ
                            </template>
                        </title-with-left-number>

                        <article>
                            <h3 class="pb-6">
                                しぐさが変わって、もっと女性らしく。<br>
                                あなたの印象を変えるのが“ネイル”。
                            </h3>

                            <p class="pb-8">
                                不思議なことに、ネイルをすることによって変わるのが、
                                <span class="tw-mask">“しぐさ”</span>です。<br>
                                指先が彩られることによって、ちょっとした動き、そして雰囲気までしなやかになり、女性らしさが加わる。日々キレイにしておくことで、ひとつの動作が丁寧になる。気持ちがもっと華やかになり、背筋がぴんと伸びる。ネイルとは女性の印象をがらりと変えるものなのです。
                            </p>
                        </article>

                        <article>
                            <h3 class="pb-6">
                                ひとりひとりの爪の形、肌の色に合わせた施術。<br>
                                自然体の美しさで、日常生活を魅力的に。
                            </h3>

                            <p class="pb-8">
                                ネイルの色は組み合わせ次第で無限に作り出すことができます。そこにお客さまひとりひとりが持つ爪の長さ・短さや肌の色を鑑み、
                                <span class="tw-mask">女性が本来持っているかわいらしさや美しさを引き立てる表現</span>
                                を乗せていきます。
                            </p>

                            <p class="pb-8">
                                NANAのネイルは、
                                <span class="tw-mask">“愛されるネイル”</span>
                                です。恋人に限らず、友人、家族、職場のみなさんに愛される。アートでデコラティブなだけではなく、シンプル、かつナチュラルで、美しい。ひとりひとりにふさわしい、
                                <span class="tw-mask">“愛されるネイル”</span>
                                を提供するのが、NANAのネイルです。
                            </p>
                        </article>
                    </template>
                </essay>

            </div>
        </section>

        <section class="mb-24">

            <figure class="p-8 md:hidden overflow-hidden flex items-center mb-16 max-h-300">
                <img :src="nailImageURI_2" alt="大切な “美容デー” を充実させて“自分らしい美しさ” を纏う">
            </figure>

            <div class="max-w-1000 mx-auto flex">
                <figure class="lg:w-2/5 p-8 hidden md:block">
                    <img :src="nailImageURI_2" alt="大切な “美容デー” を充実させて“自分らしい美しさ” を纏う">
                </figure>

                <div class="lg:w-3/5 px-10">
                    <div class="flex items-center p-4 tw-title mb-12">
                        <span class="text-2xl md:text-350 px-4">02</span>

                        <h2 class="leading-normal font-sans text-base sm:text-lg md:text-2xl">
                            大切な“美容デー”を充実させて<br>
                            “自分らしい美しさ”を纏う
                        </h2>
                    </div>

                    <article>
                        <h3 class="pb-6">
                            ライフスタイル、爪のコンディション。<br>
                            経験豊富なネイリストと、じっくり話し合う。
                        </h3>

                        <p class="pb-8">
                            NANAに所属しているネイリストは、経験豊富なJNAネイリスト技能検定1級取得者。そして、お客さまとのコミュニケーションをとても大切にしています。テレビやタブレット端末で映画などを見れるサロンが多い中、NANAでは
                            <span class="tw-mask">静かでゆったりとした空間を提供しています。</span>
                        </p>

                        <p class="pb-8">
                            特に初めてネイルをされる方は緊張もされているため、
                            <span class="tw-mask">話しやすい雰囲気を作ること</span>
                            はとても大切です。ライフスタイルはもちろんのこと、ご自身の爪の好きなところ、コンプレックスの部分、ご来店時の状態、今後のイベントなどの内容をお尋ねし、「こんなデザインはいかがですか？」とデザインを提案。ときには身近な方には打ち明けにくい話なども交えながら、じっくりとお客さまの心の声に耳を傾けながら施術を行います。
                        </p>
                    </article>

                    <article>
                        <h3 class="pb-6">
                            多彩なカラー・パーツ、そしてスピーディな施術で、<br>
                            みんなの「美しくなりたい」を叶える。
                        </h3>

                        <p class="pb-8">
                            一日の中でネイルやマツエク、美容室などをまたぐ“美容デー”を設けている方も多い中、
                            <span class="tw-mask">スピーディに上品で輝かしい仕上がりをご提供するのがNANAのネイル</span>
                            です。モチベーションをアップさせたい、爪の保護をしたい、指を長く見せたい……
                            <span class="tw-mask">すべて、お客さまの「自分らしく、美しくありたい」という気持ち</span>
                            から生まれる言葉です。
                        </p>

                        <p class="pb-8">
                            NANAではカラー・パーツ、いずれも多数取り揃えています。「初心者だからどうしていいかわからない」「まったくデザインを考えていなかった」という方でも、どうぞ安心して来ていただきたいと思っています。
                        </p>

                        <p class="pb-8">
                            ネイルは特別なものではありません。誰もが美しくなるために自然と身につけているものを、そっと引き立てるのがNANAのネイル。それがあなたをさらに“特別”にします。
                        </p>

                        <p class="pb-8">
                            ぜひNANAのネイルで、
                            <span class="tw-mask">あなただけの“色”を纏ってみませんか？</span>
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <section class="mb-24">
            <div class="max-w-1000 mx-auto px-4">
                <title-with-word>
                    <template slot="sub">INSTAGRAM</template>

                    <template slot="title">NANA COLLECTION</template>
                </title-with-word>

                <div class="text-center mb-8 md:mb-16">
                    FOLLOW <a href="/">@nana_nail_lisbon !</a>
                </div>

                <collection limit="0"></collection>

                <div class="flex my-24">
                    <p class="lg:w-1/12 relative">
                        <span class="ref-title text-2xl tracking-loose leading-loose border-b-2 border-black">
                            RESERVATION!
                        </span>
                    </p>

                    <div class="p-16 bg-teal-lightest w-full lg:w-11/12">
                        <div class="flex flex-wrap">
                            <p class="w-full text-center text-sm font-bold pt-8">
                                NAIL RESERVATION<br>
                                <span
                                    class="tracking-wider text-black pb-8 text-grey-darker font-fotura font-normal text-xs"
                                >
                                        ( HOTPEPPER Beautyへリンクします )</span>
                            </p>

                            <div class="w-full flex justify-center">
                                <a href="https://beauty.hotpepper.jp/kr/slnH000248220/review/"
                                   class="tw-btn w-1/2 hover:bg-yellow-lighter m-8">
                                    ネイルのご予約はこちら
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <breadcrumb></breadcrumb>

        <reserve></reserve>
    </div>
</template>

<script>
    import collection from '../components/_Collection';
    import essay from '../components/_Essay';
    import titleWithLeftNumber from '../components/_TitleWithLeftNumber';
    import titleWithWord from '../components/_TitleWithWord';
    import nailImageURI_1 from '../../../public/storage/decoration/nail_1.jpg';
    import nailImageURI_2 from '../../../public/storage/decoration/nail_2.png';

    export default {
        components: {collection, essay, titleWithLeftNumber, titleWithWord},

        data() {
            return {
               nailImageURI_1,
               nailImageURI_2
            };
        },
    }
</script>

<style scoped lang="scss">
    .sub-title {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
    }

    .ref-title {
        @apply text-2xl tracking-loose leading-loose border-b-2 border-black absolute pin-l pin-t;
        transform: translateY(-100%);

        @screen md {
            top: 20px;
        }
    }

    .nail-bg {
        background: url(../../../public/storage/hero/hero_bg_nail.jpg) center center / cover no-repeat;
    }
</style>
