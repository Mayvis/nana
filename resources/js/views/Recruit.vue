<template>
    <div>
        <hero-bg>
            <div slot="hero"
                 class="tw-hero recruit-bg">
            </div>

            <template slot="title">RECRUIT</template>

            <template slot="desc">採用情報</template>
        </hero-bg>

        <links></links>

        <!--    sec 01    -->
        <section class="mb-24">
            <div class="max-w-1000 mx-auto flex">

                <essay :figure="{src: recruitImageURI_1,
                                 alt: '全員が正社員雇用。それぞれの個性で “お客さまを美しく”',
                                 one_third: true,
                                 end: true}">
                    <template slot="article">
                        <title-with-left-number>
                            <template slot="num">01</template>

                            <template slot="title">
                                全員が正社員雇用。<br>
                                それぞれの個性で “お客さまを美しく”
                            </template>
                        </title-with-left-number>

                        <article>
                            <h3 class="pb-6">
                                未経験者も正社員採用。<br>
                                個々の意見を大切にし、スタッフの権利をしっかり守る。
                            </h3>

                            <p class="pb-8">
                                NANAでは未経験者であっても
                                <span class="tw-mask">全員が正社員として採用</span>
                                されます。入社半年後には社会保険・雇用保険などには無条件で加入。スタッフの権利をしっかり守ります。
                            </p>

                            <p class="pb-8">
                                NANAには中間管理職がありません。思ったことは先輩後輩に関係なく、フランクに言い合える仲という点もポイントです。社長にも意見が通りやすく、対応もスピーディー。
                                <span class="tw-mask">社員の意見を大切に</span>
                                してくれるのが実感できるため、
                                <span class="tw-mask">離職率が低い</span>
                                ことも魅力です。
                            </p>
                        </article>

                        <article>
                            <h3 class="pb-6">
                                施術だけではなく、“美容にかかわることすべて”が仕事。<br>
                                総合職だから得られる成長。
                            </h3>

                            <p class="pb-8">
                                また、スタッフは
                                <span class="tw-mask">全員が総合職での採用</span>
                                です。美容業である以上、美容に関することは何でもやります。そのため、仕事内容は施術だけではありません。ブログ更新といった広告、新しい商品の開発など、幅広い業務に携わることで、
                                <span class="tw-mask">自分自身の成長、会社の成長を感じる</span>
                                ことができます。
                            </p>
                        </article>
                    </template>
                </essay>

            </div>
        </section>

        <!--    sec 02    -->
        <section class="mb-24">
            <div class="max-w-1000 mx-auto flex">

                <essay :figure="{src: recruitImageURI_2,
                                 alt: '全員が正社員雇用。それぞれの個性で “お客さまを美しく”',
                                 one_third: true,
                                 end: false}">
                    <template slot="article">
                        <title-with-left-number>
                            <template slot="num">02</template>

                            <template slot="title">
                                未経験者大歓迎！NANAでは<br>
                                未経験者を積極採用しています
                            </template>
                        </title-with-left-number>

                        <article>
                            <h3 class="pb-6">
                                「人は、人を育てる時に成長する」。<br>
                                未経験者採用は、成長のチャンス。
                            </h3>

                            <p class="pb-8">
                                スタッフの多くは未経験者です。「時間やお金をかけて未経験者をイチから育てるよりもすぐに入客できる経験者を採用するほうがラクなのでは？」と考える方もいらっしゃるでしょう。ではなぜ、NANAは積極的に未経験者を採用するのでしょうか？
                            </p>
                            <p class="pb-8">
                                <span class="tw-mask">人は人を育てる時に成長</span>
                                します。未経験者をゼロから教えることで、既存スタッフがみずから成長する。そのチャンスになるから、NANAでは未経験者を歓迎しています。
                            </p>
                            <p class="pb-8">
                                <span class="tw-mask">研修期間は6ヶ月から10ヶ月ほどまでしっかりと実施。</span>
                                経験者でも1ヶ月ほどの研修期間を設けることで、経験者・未経験者の差をなくし、
                                <span class="tw-mask">どのスタッフでもお客さまに満足いただける環境</span>
                                を作っています。
                            </p>
                        </article>

                        <article>
                            <h3 class="pb-6">
                                前期の先輩が“先生”。<br>
                                なんでも相談できるから、どんどん成長できる。
                            </h3>
                            <p class="pb-8">
                                研修の最大の特徴は、前期の先輩が教える点。歴がさほど離れていないため、なんでも相談しやすい空気を作ってくれます。複数人から指導を受けられる点も魅力のひとつ。先輩それぞれの個性を活かした手法をじかに学べるため、自分自身の引き出しが増えます。
                            </p>
                            <p class="pb-8">
                                また
                                <span class="tw-mask">NANAは、福岡ナンバーワンのマツエクサロン</span>
                                。実際に入社しても担当人数は先輩たちと変わりません。スタッフ全員でバランスよくお客さまを担当するため、たくさんのお客さまと接することができ、どんどんレベルアップが図れます！
                                そうして今度は自分が教える立場になり、後輩を育てることでさらに学び・気づきを得ます。
                            </p>
                        </article>
                    </template>
                </essay>

            </div>
        </section>

        <!--    sec 03    -->
        <section class="mb-24">
            <div class="max-w-1000 mx-auto flex">

                <essay :figure="{src: recruitImageURI_3,
                                 alt: '全員が正社員雇用。それぞれの個性で “お客さまを美しく”',
                                 end: true}">
                    <template slot="article">
                        <title-with-left-number>
                            <template slot="num">03</template>

                            <template slot="title">
                                サービス残業なしで、<br>
                                さらにお弁当も？！<br>
                                充実の待遇です
                            </template>
                        </title-with-left-number>

                        <article>
                            <h3 class="pb-6">
                                サービス残業・終礼なし。日祝日の休みもOK。<br>
                                プライベートは思いっきり楽しむ。
                            </h3>
                            <p class="pb-8">
                                勤務時間は
                                <span class="tw-mask">9:30から20:00まで</span>
                                と決まっており、サービス残業、終礼、夜間ミーティングなどはありません！　西通りに3店舗あるため、どの店にも通いやすい点もポイントです。日・祝日の休み希望もOKで、夏休みは4日、冬休みは5日。年に2回お店を閉め、
                                <span class="tw-mask">みんなでしっかりと休みを取り、プライベートも思いっきり楽しんでいます。</span>
                            </p>
                        </article>

                        <article>
                            <h3 class="pb-6">
                                スタッフ同士のマツエク・ネイルの施術OK。<br>
                                自分磨きが会社の成長につながる。
                            </h3>

                            <p class="pb-8">
                                また、スタッフ同士でのマツエクの施術や、社員価格でのネイルもOK。
                                <span class="tw-mask">自分磨きこそ、会社の成長、そしてお客さまの満足に繋がります。</span>
                                スタッフひとりひとりがキレイであること、仕事だけではなくプライベートも充実させることを、NANAでは大切にしています。
                            </p>

                            <p class="pb-8">
                                さらに美容業界ではよくある「歩合制」ですが、NANAではこれを採用していません。未経験者は研修中であっても18万円＋交通費5千円を支給（経験者は19万円から）。賞与は年4回、社員旅行あり、制服貸与と
                                <span class="tw-mask">充実の待遇</span>
                                です。
                            </p>
                        </article>
                    </template>
                </essay>

            </div>
        </section>

        <!--    sec 04    -->
        <section class="mb-24">
            <div class="max-w-1000 mx-auto flex">

                <essay :figure="{src: recruitImageURI_4,
                                 alt: '「自分がされてイヤなことはしない」。お客さまに伝わる “思いやり”',
                                 end: false}">
                    <template slot="article">
                        <title-with-left-number>
                            <template slot="num">04</template>

                            <template slot="title">
                                「自分がされてイヤなことはしない」。<br>
                                お客さまに伝わる “思いやり”
                            </template>
                        </title-with-left-number>

                        <article>
                            <h3 class="pb-6">
                                スタッフの満足＝お客さまの満足。<br>
                                スタッフに優しい会社であることを大切に。
                            </h3>

                            <p class="pb-8">
                                <span class="tw-mask">「お客さまの満足を最大化するためには、スタッフの満足を最大化する」</span>
                                がNANAのモットー。そもそも会社や上司から優しくされていないスタッフが、お客さまや後輩に優しく接することはできません。
                            </p>
                        </article>

                        <article>
                            <h3 class="pb-6">
                                居心地の良さの秘訣は“人間関係”。<br>
                                自発的な行動と思いやりが、いい会社をつくる。
                            </h3>

                            <p class="pb-8">
                                スタッフが口をそろえて言うのは、「
                                <span class="tw-mask">NANAはスタッフの人間関係がとてもいい</span>
                                」ということ。「
                                <span class="tw-mask">自分がされてイヤなことはしない</span>
                                」という意識があり、みんなが自然と問題点や改善点を相談する関係ができています。その関係性はいつしかお客さまへも反映されており、「居心地が良い」というお客さまからいただく言葉がその表れでしょう。
                            </p>

                            <p class="pb-8">
                                スタッフひとりひとりの
                                <span class="tw-mask">個性を大切</span>
                                にする。スタッフ全員が常に考え、自発的に行動する。NANAを形作っているのは、
                                <span class="tw-mask">ひとりひとりの“思いやり”</span>
                                です。
                            </p>
                        </article>
                    </template>
                </essay>

            </div>
        </section>

        <section class="mb-24 mx-auto max-w-1000">
            <div class="flex my-16 px-4">
                <p class="lg:w-1/12 relative">
                    <span
                        class="ref-title text-2xl tracking-loose leading-loose border-b-2 border-black">SALON&STAFF</span>
                </p>

                <div class="p-16 bg-grey-lighter w-full md:w-11/12">
                    <div class="flex flex-col md:flex-row">
                        <div class="w-full md:w-1/3 flex flex-col items-center pb-4 md:p-4">
                            <figure class="pb-4">
                                <img :src="storeImageURI_1" alt="MILANO">
                            </figure>

                            <router-link tag="a" to="/salon"
                                         class="tw-btn">
                                MILANO
                            </router-link>
                        </div>

                        <div class="w-full md:w-1/3 flex flex-col items-center pb-4 md:p-4">
                            <figure class="pb-4">
                                <img :src="storeImageURI_3" alt="MILANO">
                            </figure>

                            <router-link tag="a" to="/salon"
                                         class="tw-btn">
                                La Rochelle
                            </router-link>
                        </div>

                        <div class="w-full md:w-1/3 flex flex-col items-center pb-4 md:p-4">
                            <figure class="pb-4">
                                <img :src="storeImageURI_2" alt="LISBON">
                            </figure>

                            <router-link tag="a" to="/salon"
                                         class="tw-btn">
                                LISBON
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="mb-24 mx-auto max-w-1000 px-4">
            <div class="flex my-16">
                <p class="lg:w-1/12 relative">
                    <span class="ref-title text-2xl tracking-loose leading-loose border-b-2 border-black">MESSAGE</span>
                </p>

                <div class="p-0 md:p-12 bg-grey-lighter lg:w-11/12">
                    <div class="flex">
                        <article class="m-8">
                            <h5 class="inline-block px-8 text-center bg-white font-normal tw-name relative">社長メッセージ</h5>

                            <h2 class="tracking-loose py-4 leading-normal text-base md:text-xl">
                                理念は「福岡の美容業界で一番働きたい会社になる」</h2>

                            <p class="text-xs pb-4 text-grey-darker">
                                マツエク・ネイルの根幹にあるのは確かな“技術”です。<br>
                                それを身につけた“技術集団”を育てるためには時間もかかりますし、多くのやるべきことがあります。
                            </p>

                            <p class="text-xs py-4 text-grey-darker">
                                良い土地を探し、土地を耕し、豊かな土壌を作りそして翌年タネを蒔く。
                            </p>

                            <p class="text-xs py-4 text-grey-darker">
                                「すべての芽に均等に太陽は当たっているか？」「風通しは良いか？」<br>
                                「水は足りているか、もしくは与えすぎていないか？」<br>
                                「虫はついてないか？」「病気になってないか？」
                            </p>

                            <p class="text-xs py-4 text-grey-darker">
                                これらのことを常に考え、一切気を抜くことも慌てることもなく、実が成り、熟すまでじっと待つ。給与や休みの取りやすさ、お弁当の支給、取り扱いパーツの安全性などに気を配ること。これらのことはすべて実が熟すためのプロセスです。成果を挙げるためにはどのプロセスもおろそかにできません。
                            </p>

                            <p class="text-xs py-4 text-grey-darker">
                                こうやって出来上がった場所はめったにありません。NANAで働く貴女は“特別な場所にいるのだ”という意識を、どうか大切にしてください。それがひいては、チームワークやスタッフみんなのプライド、プロ意識の芽生えにつながります。
                            </p>

                            <p class="text-xs py-4 text-grey-darker">
                                NANAはあなたの個性を尊重し、理解する場所です。<br>
                                たくさんの色があってこそ、花束はより一層美しくなります。<br>
                                貴女の個性を理解し、大切に育てる場所でぜひ、貴女の才能を開花させてください。
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>

        <recruitReserve link="https://beauty.hotpepper.jp/kr/slnH000248220/review/">
            <template slot="btn-name">
                エントリーはこちらから
            </template>
        </recruitReserve>

        <links></links>

        <breadcrumb :middle="{name: 'RECRUIT', default: true}"></breadcrumb>

        <reserve></reserve>
    </div>
</template>

<script>
    import links from '../components/recruit/_Links';
    import essay from '../components/_Essay';
    import titleWithLeftNumber from '../components/_TitleWithLeftNumber';
    import recruitReserve from '../components/recruit/_Reserve';
    import recruitImageURI_1 from '../../../public/storage/decoration/recruit/recruit_1.jpg';
    import recruitImageURI_2 from '../../../public/storage/decoration/recruit/recruit_2.jpg';
    import recruitImageURI_3 from '../../../public/storage/decoration/recruit/recruit_3.jpg';
    import recruitImageURI_4 from '../../../public/storage/decoration/recruit/recruit_4.jpg';
    import storeImageURI_1 from '../../../public/storage/store/MILANO_2.jpg';
    import storeImageURI_2 from '../../../public/storage/store/LISBON_2.jpg';
    import storeImageURI_3 from '../../../public/storage/store/La_Rochelle_2.jpg';

    export default {
        components: {links, essay, titleWithLeftNumber, recruitReserve},

        data() {
            return {
                recruitImageURI_1,
                recruitImageURI_2,
                recruitImageURI_3,
                recruitImageURI_4,
                storeImageURI_1,
                storeImageURI_2,
                storeImageURI_3
            };
        },
    }
</script>

<style scoped lang="scss">
    .ref-title {
        @apply text-2xl tracking-loose leading-loose border-b-2 border-black absolute pin-l pin-t;
        transform: translateY(-100%);

        @screen md {
            top: 20px;
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

    .recruit-bg {
        background: url(../../../public/storage/hero/hero_bg_recruit.jpg) center center / cover no-repeat;
    }
</style>
