<template>
    <div>
        <hero-bg>
            <div slot="hero"
                 class="tw-hero concept-bg">
            </div>

            <template slot="title">CONCEPT</template>

            <template slot="desc">コンセプト & こだわり</template>
        </hero-bg>

        <!--    sec concept    -->
        <section class="mb-8 sm:mb-24">
            <div class="container mx-auto md:flex">
                <figure class="w-2/5">
                    <img :src="conceptURI" alt="concept" width="490" height="382">
                </figure>

                <div class="relative md:p-16 md:pr-240 pt-0">
                    <div class="tw-describe p-4 md:p-0">
                        <h2 class="tracking-wider text-lg lg:text-3xl leading-normal pt-2">
                            NANAは美容業界でもっとも<br>
                            “愛される場所”であり続けます。
                        </h2>

                        <p class="font-fotura my-7 text-xs relative">
                            Just a little more consideration leads your trust.<br>
                            NANA continues to be the "most loved place" in the beauty industry.<br>
                            Because we have relief, trust, compassion, not only to customers but also to staff.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!--    sec 01    -->
        <section class="mb-8 sm:mb-24">
            <div class="max-w-1000 mx-auto md:flex">

                <essay :figure="{src: conceptImageURI_1,
                                 alt: '居心地の良さを大切に',
                                 one_third: true,
                                 end: true}">
                    <template slot="article">
                        <title-with-left-number>
                            <template slot="num">01</template>

                            <template slot="title">
                                居心地の良さを大切に
                            </template>
                        </title-with-left-number>

                        <article>
                            <h3 class="pb-6">
                                丁寧な接客、<br class="sm:hidden">寝心地の良いベッド、メイクブース。<br>
                                無防備になるからこその安心を。
                            </h3>

                            <p class="pb-8">
                                マツエクはまぶたに施術することから、お客さまには目を閉じていただく必要があります。エステや美容室と違い、普段より無防備になる。だからこそNANAは
                                <span class="tw-mask">お客さまの居心地の良さを大切に</span>しています。
                            </p>

                            <p class="pb-8">
                                女性に好まれる、清潔で寝心地の良いベッド。丁寧な接客、静かな会話。施術後のメイク直しができるメイクブース。NANAにあるのは、
                                <span class="tw-mask">お客さまにくつろいでいただくための空間</span>です。
                            </p>
                        </article>

                        <article>
                            <h3 class="pb-6">
                                肌で感じるやわらかな雰囲気。<br>
                                スタッフのやさしさに包まれるサロン。
                            </h3>

                            <p class="pb-8">
                                <span class="tw-mask">目に見えない、肌にふれる“雰囲気”</span>
                                を大切にしています。NANAにあるやわらかな雰囲気は、まさにスタッフから生まれているものです。スタッフ同士に通いあう和やかな関係性がサロンのやわらかな空気を生み出しています。
                            </p>
                        </article>
                    </template>
                </essay>

            </div>
        </section>

        <!--    sec 02    -->
        <section class="mb-8 sm:mb-24">
            <div class="max-w-1000 mx-auto flex">

                <essay :figure="{src: conceptImageURI_2,
                                 alt: '安心・安全の確かな技術。マツエクデビューならNANAで！',
                                 end: false}">
                    <template slot="article">

                        <title-with-left-number>
                            <template slot="num">02</template>

                            <template slot="title">
                                安心・安全の確かな技術。<br>
                                マツエクデビューならNANAで！
                            </template>
                        </title-with-left-number>

                        <article>
                            <h3 class="pb-6">
                                他店より長い研修は、<br class="md:hidden">
                                未経験者でも経験者でも同じ。<br>
                                全員が美容師免許保持者。
                            </h3>

                            <p class="pb-8">
                                NANAのスタッフは他店よりもはるかに長いレッスン期間を経験しています。未経験者なら5ヶ月から10ヶ月、経験者でも1ヶ月ほどは研修期間を設けています。
                                <span class="tw-mask">全員が美容師免許を持ち、店長はさらに管理美容師免許を取得</span>しています。
                            </p>
                        </article>

                        <article>
                            <h3 class="pb-6">
                                お客さまの時間を大切にするための、<br class="md:hidden">最大限のスピード。
                            </h3>

                            <p class="pb-8">
                                また、NANAでは施術スピードも大切にしています。貴重なお客さまの時間をいただいて施術を行っているという意識を持つことこそが、より
                                <span class="tw-mask">集中力のある丁寧で確実な施術</span>
                                の原動力。日常の中でのほんの少し、しかし大切な時間をいただいているからこそ、
                                <span class="tw-mask">最大限のチカラでお客さまの美しさを引き出します。</span>
                            </p>
                        </article>
                    </template>

                </essay>
            </div>
        </section>

        <!--    sec 03    -->
        <section class="mb-24">
            <div class="max-w-1000 mx-auto flex">

                <essay :figure="{src: conceptImageURI_3,
                                 alt: 'マツエクのコンセプト  こだわり  NANA（福岡市中央区天神西通り）',
                                 one_third: true,
                                 end: true}">
                    <template slot="article">

                        <title-with-left-number>
                            <template slot="num">03</template>

                            <template slot="title">
                                愛され、大切にされる<br>
                                女性になるために
                            </template>
                        </title-with-left-number>

                        <article>
                            <h3 class="pb-6">
                                成人式、結婚式、仕事の商談。<br>
                                その人の印象を変える“目ヂカラ”を演出。
                            </h3>

                            <p class="pb-8">
                                「目は口ほどにものを言う」という言葉があります。<br>
                                <span class="tw-mask">特に女性は目元が変わるだけで、受ける印象がガラッと変わるほど。</span>
                                そのため、成人式の前撮りや結婚式といったイベントごとの前だけではなく、営業のお仕事をされている方が「大切な商談の前だから、目ヂカラをしっかり作って気分を上げておきたい」と来店されることも多々あります。
                            </p>
                        </article>

                        <article>
                            <h3 class="pb-6">
                                まつ毛がもつ個性を活かし、<br>
                                その瞬間にふさわしい理想の目元をつくる。
                            </h3>

                            <p class="pb-8">
                                お客さまのまつ毛にはそれぞれ個性があり、その時々の状況があります。人と会う限りかならず目に触れる“目元”だからこそ、
                                <span class="tw-mask">その人がその時に心に描いている理想のデザインを実現できるよう、NANAでは毎回のカウンセリングを大切</span>
                                にしています。
                            </p>
                        </article>
                    </template>
                </essay>

            </div>
        </section>

        <!--    sec 04    -->
        <section class="mb-24">
            <div class="max-w-1000 mx-auto flex">

                <essay :figure="{src: conceptImageURI_4,
                                 alt: 'スタッフが美しいとお客さまもまた、美しい',
                                 end: false}">
                    <template slot="article">
                        <title-with-left-number>
                            <template slot="num">04</template>

                            <template slot="title">
                                スタッフが美しいと<br>
                                お客さまもまた、美しい
                            </template>
                        </title-with-left-number>

                        <article>
                            <h3 class="pb-6">
                                国家資格保持者というプライドが、<br>
                                お客さまに接する美意識につながる。
                            </h3>

                            <p class="pb-8">
                                美容師というのは国家資格を持った美容のプロ。
                                <span class="tw-mask">スタッフ全員が美意識を高く持ち、プロであるプライドを持って仕事をしています。</span>
                                これがあるからこそスタッフは胸を張って笑顔でお客さまをお迎えし、美しくなったお客さまをお送りできるのです。
                            </p>
                        </article>

                        <article>
                            <h3 class="pb-6">
                                安心、信頼、思いやり。<br>
                                自発的な行動こそがサロンの質であり、お客さまの満足度。
                            </h3>

                            <p class="pb-8">
                                お客さまのことを想い、自発的に考えて新しいことに挑戦し、
                                <span class="tw-mask">スタッフの質</span>
                                を上げていく。これがNANAの考える働きがいです。
                            </p>

                            <p class="pb-8">
                                <span class="tw-mask">ほんの少しの“想い”が、お客さまの信頼につながる。</span>
                                安心、信頼、思いやり。お客さまだけではなくスタッフ同士にも共通する意識を持ち、NANAは美容業界でもっとも
                                <span class="tw-mask">“愛される場所”</span>
                                であり続けます。
                            </p>
                        </article>
                    </template>
                </essay>

            </div>
        </section>

        <breadcrumb></breadcrumb>

        <reserve></reserve>
    </div>
</template>

<script>
    import titleWithLeftNumber from '../components/_TitleWithLeftNumber';
    import essay from '../components/_Essay';
    import conceptURI from '../../../public/storage/decoration/concept.png';
    import conceptImageURI_1 from '../../../public/storage/decoration/concept_1.jpg';
    import conceptImageURI_2 from '../../../public/storage/decoration/concept_2.jpg';
    import conceptImageURI_3 from '../../../public/storage/decoration/concept_3.jpg';
    import conceptImageURI_4 from '../../../public/storage/decoration/concept_4.jpg';

    export default {
        components: {titleWithLeftNumber, essay},

        data() {
            return {
                conceptURI,
                conceptImageURI_1,
                conceptImageURI_2,
                conceptImageURI_3,
                conceptImageURI_4
            };
        },
    }
</script>

<style scoped lang="scss">
    .tw-describe {
        &:after {
            content: '';
            position: absolute;
            top: 25%;
            left: 0;
            background-color: #e8eff1;
            width: 100%;
            height: 80%;
            z-index: -1;

            @screen md {
                height: 60%;
            }
        }
    }

    .concept-bg {
        background: url(../../../public/storage/hero/hero_bg_concept.jpg) center center / cover no-repeat;
    }
</style>
