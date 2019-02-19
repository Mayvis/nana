<template>
    <div>
        <hero-bg>
            <div slot="hero"
                 class="tw-hero"
                 style="background: url('/hero/hero_bg_recruit.jpg') center center / cover no-repeat;">
            </div>

            <template slot="title">RECRUIT</template>

            <template slot="desc">採用情報</template>
        </hero-bg>

        <links></links>

        <section class="mb-24">
            <div class="max-w-1000 mx-auto px-4">
                <title-with-word>
                    <template slot="sub">STAFF VOICE</template>

                    <template slot="title">NANAで働くスタッフに<br class="inline-block sm:hidden">
                        インタビューをしました。
                    </template>
                </title-with-word>
            </div>
        </section>

        <!--    sec 01    -->
        <section class="mb-24">
            <div class="max-w-1000 mx-auto px-4 border-b border-grey-light">
                <essay :figure="{src: '/staff/JUNNA.jpg',
                                 alt: 'JANNA',
                                 end: false}"
                >
                    <template slot="article">
                        <h2 class="tracking-wide leading-normal text-4xl font-adobe pb-6 mb-8">
                            #JUNNA<br>

                            <span class="text-sm font-adobe tracking-loose leading-loose font-normal relative tw-bar">
                            施術歴3年 チーフ
                        </span>
                        </h2>

                        <article class="pb-4">
                            <h6 class="text-sm font-adobe tracking-loose">
                                <span class="tw-mask">NANAに入社した理由はなんですか？</span>
                            </h6>

                            <p class="py-4">
                                未経験でも採用してくれる場所を探していたところ、NANAの募集を見かけました。口コミが多かったし、内容も良いものばかりだったので信頼できるお店だ、と思って応募しました。未経験でもお給料が他のお店よりも高かったことも、大きなポイントでしたね。NANAではお弁当が支給されるので、さらにお財布的にとても助かっています！
                            </p>
                        </article>

                        <article class="pb-4">
                            <h6 class="text-sm font-adobe tracking-loose">
                                <span class="tw-mask">会社の教育制度についてどのように感じていますか？</span>
                            </h6>

                            <p class="py-4">
                                NANAはひとつ上の先輩が教えるシステムをとっているので、実際に自分が教える側になったときが大変でした。教わっている時は言われたことに注意すればよかったのですが、いざ『技術』を教えるとなると、言葉に落とし込むのが難しかったりします。その分自分でも「どうやってこの作業をしてたっけ？」と考えるキッカケにもなりました。
                            </p>
                        </article>

                        <article class="pb-4">
                            <h6 class="tw-mask inline-block text-sm font-adobe tracking-loose">
                                <span class="tw-mask">働いていて“楽しい”と感じるのはどんな時ですか？</span>
                            </h6>

                            <p class="py-4">
                                施術自体が楽しいです！丁寧にお客さまのご要望やイメージにあわせてつけていく時が、本当に楽しい瞬間ですね。
                            </p>
                        </article>
                    </template>
                </essay>
            </div>
        </section>

        <!--    sec 02    -->
        <section class="mb-24">
            <div class="max-w-1000 mx-auto px-4 border-b border-grey-light">
                <essay :figure="{src: '/staff/EMINA.jpg',
                                 alt: 'EMINA',
                                 end: true}"
                >
                    <template slot="article">
                        <h2 class="tracking-wide leading-normal text-4xl font-adobe pb-6 mb-8">
                            #EMINA<br>

                            <span class="text-sm font-adobe tracking-loose leading-loose font-normal relative tw-bar">
                        施術歴4年 チーフ
                    </span>
                        </h2>

                        <article class="pb-4">
                            <h6 class="text-sm font-adobe tracking-loose">
                                <span class="tw-mask">NANAに入社した理由はなんですか？</span>
                            </h6>

                            <p class="py-4">
                                実は採用される前は、お客さま側として通ってたんです。その時から、お店の雰囲気の良さとか、モチの良さとかの技術力の高さとかが気になってました。次に行く店は技術力の高いところがいいと考えてたので、雰囲気なども合わせて考えて、NANAに応募したという感じです。あとは、離職率が低いこととか、立地の良さもポイントでした。
                            </p>
                        </article>

                        <article class="pb-4">
                            <h6 class="text-sm font-adobe tracking-loose">
                                <span class="tw-mask">会社の教育制度についてどのように感じていますか？</span>
                            </h6>

                            <p class="py-4">
                                店長だけ、チーフだけ、とかじゃなくて、いろんな人にみてもらえて、その分たくさんの意見を聞けたのは良かったです。人によってやり方とか、使ってるツィザー（ピンセット）の種類とかまで違うので、型にとらわれなくていいんだ！　と思えました。自分の引き出しが増えた感覚です。
                            </p>
                        </article>

                        <article class="pb-4">
                            <h6 class="text-sm font-adobe tracking-loose">
                                <span class="tw-mask">働いていて“楽しい”と感じるのはどんな時ですか？</span>
                            </h6>

                            <p class="py-4">
                                キレイな仕上がりにできた時です！　やっぱりお客さまに喜んでもらえるのが一番嬉しいです。
                            </p>
                        </article>
                    </template>
                </essay>
            </div>
        </section>

        <!--    sec 03    -->
        <section class="mb-24">
            <div class="max-w-1000 mx-auto px-4 border-b border-grey-light">

                <essay :figure="{src: '/staff/NATSUMI.jpg',
                                 alt: 'NATSUMI',
                                 end: false}"
                >
                    <template slot="article">
                        <h2 class="tracking-wide leading-normal text-4xl font-adobe pb-6 mb-8">
                            #NATSUMI<br>

                            <span class="text-sm font-adobe tracking-loose leading-loose font-normal relative tw-bar">
                        施術歴3年 チーフ
                    </span>
                        </h2>

                        <article class="pb-4">
                            <h6 class="text-sm font-adobe tracking-loose">
                                <span class="tw-mask ">NANAに入社した理由はなんですか？</span>
                            </h6>

                            <p class="py-4">
                                美容師免許を持っているので、それを活かしたかったんです。それと、以前は大型チェーン店にいたので、意見とかも通りにくかったり、上下関係に疲れていたりもしました。NANAだと人数も少なくて、社長にもすぐに意見が通る環境だと感じたので応募しました。
                            </p>
                        </article>

                        <article class="pb-4">
                            <h6 class="text-sm font-adobe tracking-loose">
                                <span class="tw-mask">会社の教育制度についてどのように感じていますか？</span>
                            </h6>

                            <p class="py-4">
                                NANAは1期上の先輩が後輩を指導することになっているので、その距離感がベストですね。自分が教育係になったときも接しやすいです。歴の長い先輩にはやっぱり相談しにくい部分とかもあるし、逆に自分が先輩になった時に、歴が離れていると言いにくかったりすることも、直接教えている子にそっと伝えてもらうこともできるので。近すぎず遠すぎず、ちょうどいい距離だと思います。
                            </p>
                        </article>

                        <article class="pb-4">
                            <h6 class="text-sm font-adobe tracking-loose">
                                <span class="tw-mask">働いていて“楽しい”と感じるのはどんな時ですか？</span>
                            </h6>

                            <p class="py-4">
                                スタッフ同士の仲がいいんです。嘘みたいに聞こえるかもしれないけど、これは本当で。スタッフ同士で施術し合うことがNANAではできるんですけど、その時に他のチーフや店長から指名されたら「よっしゃ！」と思います。やっぱりみんなそれぞれ技術が高いので、その中から選んでもらえるのは嬉しいです。もちろんそれはお客さまも同じで、「キレイにしてもらってありがとう」とか言っていただくと、頑張ってよかった！って本当に感じます。
                            </p>
                        </article>
                    </template>
                </essay>

            </div>
        </section>

        <!--    sec 04    -->
        <section class="mb-24">
            <div class="max-w-1000 mx-auto px-4 border-b border-grey-light">
                <essay :figure="{src: '/staff/AKKO.jpg',
                                 alt: 'AKKO',
                                 end: true}"
                >
                    <template slot="article">
                        <h2 class="tracking-wide leading-normal text-4xl font-adobe pb-6 mb-8">
                            #AKKO<br>

                            <span
                                class="text-sm inline-block font-adobe tracking-loose leading-loose font-normal relative tw-bar">
                                施術歴4年 チーフ
                            </span>
                        </h2>

                        <article class="pb-4">
                            <h6 class="text-sm font-adobe tracking-loose">
                                <span class="tw-mask">NANAに入社した理由はなんですか？</span>
                            </h6>

                            <p class="py-4">
                                わたしはオープニングスタッフとして関われる部分が一番大きかったです。すでにやり方があるという場所は経験していたので、次はなにか自分でイチから、プライドを持って『ネイリストの仕事』ができるやりがいがあるなと。次は、離職率が低いところですね。退職するとしても、結婚や出産など、ポジティブな理由が多いことも魅力的でした。あとは、週に4回程度、お昼ご飯用のお弁当を栄養士さんが作って店舗に持ってきてくれるのですが、それも嬉しいポイントでした。
                            </p>
                        </article>

                        <article class="pb-4">
                            <h6 class="text-sm font-adobe tracking-loose">
                                <span class="tw-mask">会社の教育制度についてどのように感じていますか？</span>
                            </h6>

                            <p class="py-4">
                                丁寧に教えてくれるところは素直にすごいなと思ってます。やり忘れていたこともいつの間にか終わってて、注意されるというよりは“気づかせてくれる”といった感じ。自分で考えて行動するチカラが身につきますね。
                            </p>
                        </article>

                        <article class="pb-4">
                            <h6 class="text-sm font-adobe tracking-loose">
                                <span class="tw-mask">働いていて“楽しい”と感じるのはどんな時ですか？</span>
                            </h6>

                            <p class="py-4">
                                お客さまに頼ってもらった時です！「ノープランで来たんですけど」と言われても、「じゃあこうしましょう！」って提案ができて、それを喜んでもらえるんです。お客さまとコミュニケーションを取りながら仕事ができるのは、本当に楽しいです。
                            </p>
                        </article>
                    </template>
                </essay>
            </div>
        </section>

        <recruit-reserve link="https://beauty.hotpepper.jp/kr/slnH000248220/review/">
            <template slot="btn-name">
                ネイルのご予約はこちら
            </template>
        </recruit-reserve>

        <links></links>

        <breadcrumb :middle="{name: 'RECRUIT', default: true}"></breadcrumb>

        <reserve></reserve>
    </div>
</template>

<script>
    import links from '../components/recruit/_Links';
    import titleWithWord from '../components/_TitleWithWord';
    import recruitReserve from '../components/recruit/_Reserve';
    import essay from '../components/_Essay';

    export default {
        components: {links, titleWithWord, recruitReserve, essay},
    }
</script>

<style scoped lang="scss">
    .tw-bar:after {
        content: '';
        position: absolute;
        width: 20%;
        height: 1px;
        background-color: #000;
        bottom: -100%;
        left: 0;
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
