<template>
    <div>
        <section class="lg:mb-24">
            <div class="hero-concept"></div>
            <div>
                <svg width="100%" height="86" class="svg-concept">
                    <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central">RECRUIT</text>
                </svg>
                <p class="text-center">採用情報</p>
            </div>
        </section>

        <section class="lg:mb-24 flex flex-col items-center max-w-1000 mx-auto">
            <div class="w-3/5 flex">
                <router-link tag="a" to="/recruit" class="tw-recruit hover:bg-grey-lighter">
                    NANAでの働きがい
                </router-link>

                <router-link tag="a" to="/recruit/staff" class="tw-recruit hover:bg-grey-lighter">
                    先輩スタッフの声
                </router-link>
            </div>

            <div class="w-3/5 flex">
                <router-link tag="a" to="/recruit/day" class="tw-recruit hover:bg-grey-lighter border-b">
                    スタッフの１日
                </router-link>

                <router-link tag="a" to="/recruit/hire" class="tw-recruit hover:bg-grey-lighter border-b">
                    募集要項
                </router-link>
            </div>
        </section>

        <section class="lg:mb-24">
            <div class="max-w-1000 mx-auto border-b border-grey-light">

                <div class="tw-title text-center relative lg:mb-16">
                    <span class="text-sm tracking-loose font-light absolute sub-title">STAFF VOICE</span>
                    <h2 class="leading-normal font-san tracking-wider text-normal p-8 pt-16">
                        NANAで働くスタッフにインタビューをしました。</h2>
                </div>

                <div class="flex sm:flex-wrap sm:justify-center">
                    <figure class="lg:w-2/5 pr-8">
                        <img src="/staff/JUNNA.jpg" alt="JUNNA">
                    </figure>

                    <div class="lg:w-3/5 sm:w-full pl-8 lg:mb-16">
                        <h2 class="tracking-wide leading-normal text-4xl font-adobe pb-6 mb-8">
                            #JUNNA<br>

                            <span class="text-sm font-adobe tracking-loose leading-loose font-normal relative tw-bar">
                                施術歴3年 チーフ
                            </span>
                        </h2>

                        <article class="pb-4">
                            <h6 class="tw-mask inline-block text-sm font-adobe tracking-loose">NANAに入社した理由はなんですか？</h6>
                            <p class="text-13 tracking-wider leading-loose py-4 text-grey-darkest">
                                未経験でも採用してくれる場所を探していたところ、NANAの募集を見かけました。口コミが多かったし、内容も良いものばかりだったので信頼できるお店だ、と思って応募しました。未経験でもお給料が他のお店よりも高かったことも、大きなポイントでしたね。NANAではお弁当が支給されるので、さらにお財布的にとても助かっています！
                            </p>
                        </article>

                        <article class="pb-4">
                            <h6 class="tw-mask inline-block text-sm font-adobe tracking-loose">
                                会社の教育制度についてどのように感じていますか？
                            </h6>
                            <p class="text-13 tracking-wider leading-loose py-4 text-grey-darkest">
                                NANAはひとつ上の先輩が教えるシステムをとっているので、実際に自分が教える側になったときが大変でした。教わっている時は言われたことに注意すればよかったのですが、いざ『技術』を教えるとなると、言葉に落とし込むのが難しかったりします。その分自分でも「どうやってこの作業をしてたっけ？」と考えるキッカケにもなりました。
                            </p>
                        </article>

                        <article class="pb-4">
                            <h6 class="tw-mask inline-block text-sm font-adobe tracking-loose">
                                働いていて“楽しい”と感じるのはどんな時ですか？</h6>
                            <p class="text-13 tracking-wider leading-loose py-4 text-grey-darkest">
                                施術自体が楽しいです！丁寧にお客さまのご要望やイメージにあわせてつけていく時が、本当に楽しい瞬間ですね。
                            </p>
                        </article>
                    </div>
                </div>

            </div>
        </section>

        <section class="lg:mb-24">
            <div class="max-w-1000 mx-auto border-b border-grey-light">

                <div class="flex sm:flex-wrap sm:justify-center">
                    <figure class="lg:w-2/5 pl-8 tw-flex-end">
                        <img src="/staff/EMINA.jpg" alt="EMINA">
                    </figure>

                    <div class="lg:w-3/5 sm:w-full pl-8 lg:mb-16">
                        <h2 class="tracking-wide leading-normal text-4xl font-adobe pb-6 mb-8">
                            #EMINA<br>

                            <span class="text-sm font-adobe tracking-loose leading-loose font-normal relative tw-bar">
                                施術歴4年 チーフ
                            </span>
                        </h2>

                        <article class="pb-4">
                            <h6 class="tw-mask inline-block text-sm font-adobe tracking-loose">
                                NANAに入社した理由はなんですか？
                            </h6>
                            <p class="text-13 tracking-wider leading-loose py-4 text-grey-darkest">
                                実は採用される前は、お客さま側として通ってたんです。その時から、お店の雰囲気の良さとか、モチの良さとかの技術力の高さとかが気になってました。次に行く店は技術力の高いところがいいと考えてたので、雰囲気なども合わせて考えて、NANAに応募したという感じです。あとは、離職率が低いこととか、立地の良さもポイントでした。
                            </p>
                        </article>

                        <article class="pb-4">
                            <h6 class="tw-mask inline-block text-sm font-adobe tracking-loose">
                                会社の教育制度についてどのように感じていますか？
                            </h6>
                            <p class="text-13 tracking-wider leading-loose py-4 text-grey-darkest">
                                店長だけ、チーフだけ、とかじゃなくて、いろんな人にみてもらえて、その分たくさんの意見を聞けたのは良かったです。人によってやり方とか、使ってるツィザー（ピンセット）の種類とかまで違うので、型にとらわれなくていいんだ！　と思えました。自分の引き出しが増えた感覚です。
                            </p>
                        </article>

                        <article class="pb-4">
                            <h6 class="tw-mask inline-block text-sm font-adobe tracking-loose">
                                働いていて“楽しい”と感じるのはどんな時ですか？
                            </h6>
                            <p class="text-13 tracking-wider leading-loose py-4 text-grey-darkest">
                                キレイな仕上がりにできた時です！　やっぱりお客さまに喜んでもらえるのが一番嬉しいです。
                            </p>
                        </article>
                    </div>
                </div>

            </div>
        </section>

        <section class="lg:mb-24">
            <div class="max-w-1000 mx-auto border-b border-grey-light">

                <div class="flex sm:flex-wrap sm:justify-center">
                    <figure class="lg:w-2/5 pr-8">
                        <img src="/staff/NATSUMI.jpg" alt="NATSUMI">
                    </figure>

                    <div class="lg:w-3/5 sm:w-full pl-8 lg:mb-16">
                        <h2 class="tracking-wide leading-normal text-4xl font-adobe pb-6 mb-8">
                            #NATSUMI<br>

                            <span class="text-sm font-adobe tracking-loose leading-loose font-normal relative tw-bar">
                                施術歴3年 チーフ
                            </span>
                        </h2>

                        <article class="pb-4">
                            <h6 class="tw-mask inline-block text-sm font-adobe tracking-loose">NANAに入社した理由はなんですか？</h6>
                            <p class="text-13 tracking-wider leading-loose py-4 text-grey-darkest">
                                美容師免許を持っているので、それを活かしたかったんです。それと、以前は大型チェーン店にいたので、意見とかも通りにくかったり、上下関係に疲れていたりもしました。NANAだと人数も少なくて、社長にもすぐに意見が通る環境だと感じたので応募しました。
                            </p>
                        </article>

                        <article class="pb-4">
                            <h6 class="tw-mask inline-block text-sm font-adobe tracking-loose">
                                会社の教育制度についてどのように感じていますか？
                            </h6>
                            <p class="text-13 tracking-wider leading-loose py-4 text-grey-darkest">
                                NANAは1期上の先輩が後輩を指導することになっているので、その距離感がベストですね。自分が教育係になったときも接しやすいです。歴の長い先輩にはやっぱり相談しにくい部分とかもあるし、逆に自分が先輩になった時に、歴が離れていると言いにくかったりすることも、直接教えている子にそっと伝えてもらうこともできるので。近すぎず遠すぎず、ちょうどいい距離だと思います。
                            </p>
                        </article>

                        <article class="pb-4">
                            <h6 class="tw-mask inline-block text-sm font-adobe tracking-loose">
                                働いていて“楽しい”と感じるのはどんな時ですか？
                            </h6>
                            <p class="text-13 tracking-wider leading-loose py-4 text-grey-darkest">
                                スタッフ同士の仲がいいんです。嘘みたいに聞こえるかもしれないけど、これは本当で。スタッフ同士で施術し合うことがNANAではできるんですけど、その時に他のチーフや店長から指名されたら「よっしゃ！」と思います。やっぱりみんなそれぞれ技術が高いので、その中から選んでもらえるのは嬉しいです。もちろんそれはお客さまも同じで、「キレイにしてもらってありがとう」とか言っていただくと、頑張ってよかった！って本当に感じます。
                            </p>
                        </article>
                    </div>
                </div>

            </div>
        </section>

        <section class="lg:mb-24">
            <div class="max-w-1000 mx-auto border-b border-grey-light">

                <div class="flex sm:flex-wrap sm:justify-center">
                    <figure class="lg:w-2/5 pl-8 tw-flex-end">
                        <img src="/staff/AKKO.jpg" alt="AKKO">
                    </figure>

                    <div class="lg:w-3/5 sm:w-full pl-8 lg:mb-16">
                        <h2 class="tracking-wide leading-normal text-4xl font-adobe pb-6 mb-8">
                            #AKKO<br>

                            <span class="text-sm font-adobe tracking-loose leading-loose font-normal relative tw-bar">
                                施術歴4年 チーフ
                            </span>
                        </h2>

                        <article class="pb-4">
                            <h6 class="tw-mask inline-block text-sm font-adobe tracking-loose">
                                NANAに入社した理由はなんですか？
                            </h6>
                            <p class="text-13 tracking-wider leading-loose py-4 text-grey-darkest">
                                わたしはオープニングスタッフとして関われる部分が一番大きかったです。すでにやり方があるという場所は経験していたので、次はなにか自分でイチから、プライドを持って『ネイリストの仕事』ができるやりがいがあるなと。次は、離職率が低いところですね。退職するとしても、結婚や出産など、ポジティブな理由が多いことも魅力的でした。あとは、週に4回程度、お昼ご飯用のお弁当を栄養士さんが作って店舗に持ってきてくれるのですが、それも嬉しいポイントでした。
                            </p>
                        </article>

                        <article class="pb-4">
                            <h6 class="tw-mask inline-block text-sm font-adobe tracking-loose">
                                会社の教育制度についてどのように感じていますか？
                            </h6>
                            <p class="text-13 tracking-wider leading-loose py-4 text-grey-darkest">
                                丁寧に教えてくれるところは素直にすごいなと思ってます。やり忘れていたこともいつの間にか終わってて、注意されるというよりは“気づかせてくれる”といった感じ。自分で考えて行動するチカラが身につきますね。
                            </p>
                        </article>

                        <article class="pb-4">
                            <h6 class="tw-mask inline-block text-sm font-adobe tracking-loose">
                                働いていて“楽しい”と感じるのはどんな時ですか？
                            </h6>
                            <p class="text-13 tracking-wider leading-loose py-4 text-grey-darkest">
                                お客さまに頼ってもらった時です！「ノープランで来たんですけど」と言われても、「じゃあこうしましょう！」って提案ができて、それを喜んでもらえるんです。お客さまとコミュニケーションを取りながら仕事ができるのは、本当に楽しいです。
                            </p>
                        </article>
                    </div>
                </div>

            </div>
        </section>

        <section class="lg:mb-24 mx-auto max-w-1000">
            <div class="flex lg:mb-16">
                <p class="lg:w-1/12 relative">
                        <span
                            class="ref-title text-2xl tracking-loose leading-loose border-b-2 border-black">ENTRY!</span>
                </p>

                <div class="p-16 bg-teal-lightest lg:w-11/12">
                    <div class="flex flex-col">
                        <p class="text-center text-xs tracking-wider leading-loose text-grey-darker pt-4">
                            それぞれの個性で “お客様を美しく”。<br>
                            NANAで働きたいという方のご応募を心よりお待ちしております。
                        </p>

                        <div class="w-full flex justify-center">
                            <a href="https://beauty.hotpepper.jp/kr/slnH000248220/review/"
                               class="tw-btn inline-block h-50 leading-50 text-xs w-1/2 text-center hover:bg-yellow-lighter m-8">
                                ネイルのご予約はこちら
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section class="lg:mb-24 flex flex-col items-center max-w-1000 mx-auto">
            <div class="w-3/5 flex">
                <router-link tag="a" to="/recruit" class="tw-recruit hover:bg-grey-lighter">
                    NANAでの働きがい
                </router-link>

                <router-link tag="a" to="/recruit/staff" class="tw-recruit hover:bg-grey-lighter">
                    先輩スタッフの声
                </router-link>
            </div>

            <div class="w-3/5 flex">
                <router-link tag="a" to="/recruit/day" class="tw-recruit hover:bg-grey-lighter border-b">
                    スタッフの１日
                </router-link>

                <router-link tag="a" to="/recruit/hire" class="tw-recruit hover:bg-grey-lighter border-b">
                    募集要項
                </router-link>
            </div>
        </section>

        <section class="lg:mb-24">
            <div class="max-w-1200 border-b border-grey pb-4 tw-line relative">
                <div class="max-w-600">
                    <ul class="flex justify-center">
                        <li>
                            <router-link to="/"
                                         class="text-xs tracking-wider leading-loose text-grey-darkest hover:text-grey-dark"
                            >
                                HOME&nbsp|&nbsp
                            </router-link>
                        </li>
                        <li class="text-xs tracking-wider leading-loose text-grey-darkest">
                            RECRUIT&nbsp|&nbsp
                        </li>
                        <li>
                            <router-link to="/recruit/staff"
                                         class="text-xs tracking-wider leading-loose text-teal"
                            >
                                先輩スタッフの声
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

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
    .hero-concept {
        background: url('/hero/hero_bg_concept.jpg') center center / cover no-repeat;
        height: 360px;
        margin-top: -165px;
    }

    .svg-concept {
        overflow: visible;
        height: 86px;
        margin-top: -30px;
        font-family: "sofia-pro-condensed", sans-serif;
        font-size: 86px;
        line-height: 1;
        letter-spacing: .2em;

        text {
            fill: rgba(255, 255, 255, 0);
            stroke: #333;
            stroke-width: .8;
            stroke-linejoin: round;
            font-family: "sofia-pro-condensed", sans-serif;
            line-height: 1;
        }
    }

    .is-exact-active {
        @apply bg-grey-lighter;
    }

    .text-teal.is-exact-active {
        background: inherit;
    }

    .tw-recruit {
        @apply w-1/2 p-8 border-t border-grey-light mr-4 text-sm text-grey-darkest relative;

        &:after {
            content: '';
            position: absolute;
            background: url('/icon/harpoon.png') right center/12px 4px no-repeat;
            width: 20px;
            height: 4px;
            right: 8px;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    .tw-title {
        background: url('/icon/left_top.svg') left top/10px 10px no-repeat,
        url('/icon/right_top.svg') right top/10px 8px no-repeat,
        url('/icon/left_bottom.svg') left bottom/10px 10px no-repeat,
        url('/icon/right_bottom.svg') right bottom/10px 8px no-repeat,
        url('/icon/dot.png') top left/6px 6px repeat;
    }

    .sub-title {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
    }

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
