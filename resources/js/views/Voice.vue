<template>
    <div>
        <hero-bg>
            <div slot="hero"
                 class="tw-hero"
                 style="background: url('/hero/hero_bg_voice.jpg') center center / cover no-repeat;">
            </div>

            <template slot="title">VOICE</template>

            <template slot="desc">口コミで人気の秘密</template>
        </hero-bg>

        <!--    sec 01    -->
        <section class="mb-24">
            <div class="max-w-1000 mx-auto px-4">

                <title-with-top-number>
                    <template slot="num">01</template>

                    <template slot="title">モチが良いからコスパがいい！</template>
                </title-with-top-number>

                <essay :figure="{src: '/decoration/voice_1.jpg',
                                 alt: 'モチが良いからコスパがいい！',
                                 one_third: true,
                                 end: false}">
                    <template slot="article">
                        <article>
                            <h3 class="pb-6">
                                「高い技術×厳選商材」で、<br>
                                1.5ヶ月という圧倒的なモチの良さを実現。
                            </h3>

                            <p class="pb-8">
                                <span class="tw-mask">「NANAのマツエクはモチが良い！」</span>
                                いうお褒めの言葉を多くいただいています。通常、マツエクは1ヶ月ほどで次の施術のサイクルが来ますが、当店の施術ではさらに2週間ほど長く、1.5ヶ月ほどもつという方が多いようです。
                            </p>

                            <p class="pb-8">
                                理由のひとつめは、
                                <span class="tw-mask">スタッフの技術の高さ。</span>
                                全員が数ヶ月にわたるレッスンを受けて入客しているので、丁寧でしっかりとした施術を行うことができるんです。ふたつめは、
                                <span class="tw-mask">良質な国産のグルー（接着剤）を使用している点。</span>
                                しっかりと接着するので安心です。
                            </p>
                        </article>

                        <article>
                            <h3 class="pb-6">
                                モチがいい＝次の施術まで余裕がある。<br>
                                だからお財布にも“安心”。
                            </h3>

                            <p class="pb-8">
                                良質なグルーはしっかりとした接着を実現します。つまり、一回の施術でのマツエクのモチが良いということ。さらにモチが良いということは、次の施術までに余裕が生まれます。
                                <span class="tw-mask">金額面でもおトク</span>
                                なのが、NANAのマツエクなのです。
                            </p>

                            <p class="pb-8">
                                <span class="tw-mask">スタッフみずから商材を厳選</span>
                                する。それが初心者の方に“安心”を与えることができ、さらにリピーターさんにも喜ばれる。NANAが“マツエク初心者”の方にも安心していただける、大きな理由です。j
                            </p>
                        </article>
                    </template>
                </essay>

                <div class="flex mt-16 md:mt-0">
                    <p class="lg:w-1/12 relative">
                        <span
                            class="ref-title">VOICE</span>
                    </p>

                    <div class="p-4 md:p-16 bg-grey-lighter lg:w-11/12">
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-1/2 m-8 border-grey-darkest border-b">
                                <h5 class="text-center bg-white font-normal tw-name relative">きいさん ： 女性 / 50代</h5>

                                <p class="text-xs pb-8 text-grey-darker pt-4">
                                    いつもありがとうございます。希望通りの仕上がりで綺麗にしていただいて感謝してます！色々なサロンを経験してますが、モチがいいし雰囲気も大好きです。また来月宜しくお願いします。
                                </p>
                            </div>

                            <div class="md:w-1/2 m-8 border-grey-darkest border-b">
                                <h5 class="text-center bg-white font-normal tw-name relative">Mamiさん ： 女性 / 30代前半</h5>

                                <p class="text-xs pb-8 text-grey-darker pt-4">
                                    色々なアイラッシュサロンへ行きましたが、今までの中で１番モチがいいです。１ヶ月以上いつももちます。これからもお世話になります。
                                </p>
                            </div>
                        </div>

                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-1/2 m-8 border-grey-darkest border-b">
                                <h5 class="text-center bg-white font-normal tw-name relative">たけのこさん ： 女性 / 30代前半</h5>

                                <p class="text-xs pb-8 text-grey-darker pt-4">
                                    ほぼ1年通っています。とーってもお上手です。うとうとしてしまいます。施術がおわると、目がパッチリしています。モチもすごくいいです。<br>
                                    そしてスタッフみなさまかわいい(^-^)終わった後のジュースとお菓子も心がこもっていてうれしいです。これからもよろしくお願いします☆
                                </p>
                            </div>

                            <div class="md:w-1/2 m-8 border-grey-darkest border-b">
                                <h5 class="text-center bg-white font-normal tw-name relative">ぱきんこさん ： 女性 / 50代</h5>

                                <p class="text-xs pb-8 text-grey-darker pt-4">
                                    いつもお世話になっています。お昼からの仕事の前に通わせて頂いていますが、いつも綺麗で清潔な店内で落ち着きます。施術も丁寧で、マツエクのもちもいい感じです。また心地よくて、施術中につい眠ってしまうほどです。終わりに飲み物とお菓子まで頂けますが、持ち帰る事もでき、仕事の途中の癒しにもなっています。
                                </p>
                            </div>
                        </div>

                        <div class="flex flex-wrap pt-8">
                            <p class="w-full text-center text-xs font-bold">
                                口コミをもっとみる<br class="md:hidden">
                                <span class="tracking-wider text-black pb-8 text-grey-darker font-fotura font-normal">( HOTPEPPER Beautyへリンクします )</span>
                            </p>

                            <div class="w-full flex flex-col md:flex-row justify-center">
                                <a href="https://beauty.hotpepper.jp/kr/slnH000248220/review/"
                                   class="tw-btn md:w-1/2 my-4 md:m-8">
                                    MILANO & LA ROCHELLE
                                </a>

                                <a href="https://beauty.hotpepper.jp/kr/slnH000364510/review/"
                                   class="tw-btn md:w-1/2 my-4 md:m-8">
                                    LISBON
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!--    sec 02    -->
        <section class="mb-24">
            <div class="max-w-1000 mx-auto px-4">

                <title-with-top-number>
                    <template slot="num">02</template>

                    <template slot="title">
                        しっかりとした<br class="md:hidden">
                        カウンセリングで、<br class="md:hidden">
                        自分に合ったデザインに
                    </template>
                </title-with-top-number>

                <essay :figure="{src: '/decoration/voice_2.jpg',
                                 alt: 'しっかりとしたカウンセリングで、自分に合ったデザインに',
                                 one_third: true,
                                 end: true}">
                    <template slot="article">
                        <article>
                            <h3 class="pb-6">
                                デザイン、色、本数、長さ。<br>
                                丁寧なカウンセリングで、ピッタリな施術を。
                            </h3>

                            <p class="pb-8">
                                マツエクをつけてはじめてわかる、
                                <span class="tw-mask">ひとりひとり違う“まつ毛”。</span>
                                自覚がなくても 「実はくせ毛だった」「毛先が下に向きやすい」というそれぞれの個性があります。
                            </p>

                            <p class="pb-8">
                                「初めてマツエクをするから不安…」といった方でも安心して過ごしていただけるように、NANAでは施術前にしっかりと
                                <span class="tw-mask">カウンセリング</span>
                                を行います。また、カウンセリングは初回だけではありません。来ていただいた時のまつ毛の状態に合わせ、デザイン、色、本数、長さなどを細かくお話しし、
                                <span class="tw-mask">その方にピッタリ</span>
                                な施術をします。
                            </p>
                        </article>

                        <article>
                            <h3 class="pb-6">
                                スタッフは無料で指名OK。<br>
                                しっかり相談して、理想の目元を演出。
                            </h3>

                            <p class="pb-8">
                                さらに
                                <span class="tw-mask">NANAではスタッフの指名も可能ですが、指名料はいただいていません</span>
                                。信頼できるスタッフとじっくり、自分の状態や理想の形を相談していただきたいと考えています。もちろんメンテナンス方法などもしっかりとお伝えしています。不安な点は何でもご相談ください！
                            </p>
                        </article>
                    </template>
                </essay>

                <div class="flex mt-16 md:mt-16">
                    <p class="lg:w-1/12 relative">
                        <span
                            class="ref-title">VOICE</span>
                    </p>

                    <div class="p-4 md:p-16 bg-grey-lighter lg:w-11/12">
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-1/2 m-8 border-grey-darkest border-b">
                                <h5 class="text-center bg-white font-normal tw-name relative">あいこさん ： 女性 / 30代前半</h5>

                                <p class="text-xs pb-8 text-grey-darker pt-4">
                                    初めてのマツエクで不安もありましたが、丁寧にカウンセリングして頂き、仕上がりは大満足でした。モチも2週間程経ちますが、今のところ問題ないです。またお願いしたいと思います。
                                </p>
                            </div>

                            <div class="md:w-1/2 m-8 border-grey-darkest border-b">
                                <h5 class="text-center bg-white font-normal tw-name relative">めぐみさん ： 女性 / 40代</h5>

                                <p class="text-xs pb-8 text-grey-darker pt-4">
                                    カウンセリングから最後までとても丁寧にしていただいて、仕上がりも接客も今までで一番でした♪何も不満がなかったのはこれが初めてです！！お姉さんもとても可愛い方で次回もまたお願いしようと思います(*´∀`*)
                                </p>
                            </div>
                        </div>

                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-1/2 m-8 border-grey-darkest border-b">
                                <h5 class="text-center bg-white font-normal tw-name relative">ちゃんななさん ： 女性 / 20代後半</h5>

                                <p class="text-xs pb-8 text-grey-darker pt-4">
                                    前回、他店で初めてマツエクを施術してもらい、目を開けると痛くて一日中目がゴロゴロしていましたが、今回は痛みやヒリヒリした感じが全くなく快適です。<br>
                                    仕上がりもとても綺麗、丁寧にカウンセリングして下さり、何度も寝落ちしてしまいました、可愛らしいスタッフの方でとても癒された時間でした。ありがとうございました。また伺います！
                                </p>
                            </div>

                            <div class="md:w-1/2 m-8 border-grey-darkest border-b">
                                <h5 class="text-center bg-white font-normal tw-name relative">みさきさん ： 女性 / 20代前半</h5>

                                <p class="text-xs pb-8 text-grey-darker pt-4">
                                    マツエクする時はいつもこちらにお伺いさせて頂いてます。毎回来た時に必ずカウセリングを行なって頂いて、お店の雰囲気も落ち着いており、寝てしまうくらいです、、。笑
                                    仕上がりもパーフェクトで、本当に毎回感謝です。<br>
                                    メイク直しやヘアーアイロンの貸し出しなどゆっくりできるのも本当に嬉しいです。これからもお伺いした時はよろしくお願います。いつもありがとうございます！！
                                </p>
                            </div>
                        </div>

                        <div class="flex flex-wrap pt-8">
                            <p class="w-full text-center text-xs font-bold">
                                口コミをもっとみる<br class="md:hidden">
                                <span class="tracking-wider text-black pb-8 text-grey-darker font-fotura font-normal">( HOTPEPPER Beautyへリンクします )</span>
                            </p>

                            <div class="w-full flex flex-col md:flex-row justify-center">
                                <a href="https://beauty.hotpepper.jp/kr/slnH000248220/review/"
                                   class="tw-btn md:w-1/2 my-4 md:m-8">
                                    MILANO & LA ROCHELLE
                                </a>

                                <a href="https://beauty.hotpepper.jp/kr/slnH000364510/review/"
                                   class="tw-btn md:w-1/2 my-4 md:m-8">
                                    LISBON
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!--    sec 03    -->
        <section class="mb-24">
            <div class="max-w-1000 mx-auto px-4">

                <title-with-top-number>
                    <template slot="num">03</template>

                    <template slot="title">
                        やわらかい枕でぐっすり！<br class="md:hidden">
                        居心地のよさもバツグン
                    </template>
                </title-with-top-number>

                <essay :figure="{src: '/decoration/voice_3.jpg',
                                 alt: 'やわらかい枕でぐっすり！居心地のよさもバツグン',
                                 one_third: true,
                                 end: false}">
                    <template slot="article">
                        <article>
                            <h3 class="pb-6">
                                ふんわりベッドでリラックス。<br>
                                フットクッションもある極上の安らぎ空間。
                            </h3>

                            <p class="pb-8">
                                NANAのお客さまの口コミに多く寄せられるのが、「施術中にぐっすり寝てしまいました」という声です。
                            </p>

                            <p class="pb-8">
                                マツエクサロンの多くはリクライニング式のチェアを採用していますが、NANAでは全店舗
                                <span class="tw-mask">ベッドを導入</span>
                                しています！　包み込まれるような寝心地のベッドに加え、ふんわりとやわらかい枕は「つい眠ってしまう」と、どのお客さまにも人気です。フットクッションもお好みに合わせてご用意。まさに
                                <span class="tw-mask">極上のリラックス空間</span>
                                です。
                            </p>
                        </article>
                    </template>
                </essay>

                <div class="flex mt-16 md:mt-0">
                    <p class="lg:w-1/12 relative">
                        <span
                            class="ref-title text-2xl tracking-loose leading-loose border-b-2 border-black">VOICE</span>
                    </p>

                    <div class="p-4 md:p-16 bg-grey-lighter lg:w-11/12">

                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-1/2 m-8 border-grey-darkest border-b">
                                <h5 class="text-center bg-white font-normal tw-name relative">MOEさん ： 女性 / 20代後半</h5>

                                <p class="text-xs tracking-wider leading-loose pb-8 text-grey-darker pt-4">
                                    初めてのまつエクでしたが、初歩的なことから丁寧に説明していただき不安なく施術を受けることができました☆ベッドの寝心地も素晴らしく、癒されながらキレイになれてしまいます(*´
                                    ▽ `*)<br>
                                    次回はまた別のデザインにチャレンジして自分により似合うものを探していきたいと思います♪
                                </p>
                            </div>

                            <div class="md:w-1/2 m-8 border-grey-darkest border-b">
                                <h5 class="text-center bg-white font-normal tw-name relative">おいちゃんさん ： 女性 / 20代前半</h5>

                                <p class="text-xs tracking-wider leading-loose pb-8 text-grey-darker pt-4">
                                    毎回マツエクはNANAに決めてます！仕上がりはもちろん、施術後のお菓子サービスや、まつ毛の状態など、細かく教えてくれるので、助かっています！静かな落ち着いた空間で、施術中はいつも寝てしまう程です！
                                </p>
                            </div>
                        </div>

                        <div class="flex">
                            <div class="w-full m-8 border-grey-darkest border-b">
                                <h5 class="text-center bg-white font-normal tw-name relative">たけのこさん ： 女性 / 30代前半</h5>

                                <p class="text-xs tracking-wider leading-loose pb-8 text-grey-darker pt-4">
                                    初めてのマツエクで、丁寧に説明してくださったおかげで希望どおりの仕上がりでした。施術もとても丁寧で、安心してお任せ出来ました。サロンの雰囲気も素敵でしたし、口コミ(後から見ましたが)どおり、施術後のドリンクとお菓子のサービスはちょっと嬉しいですね。<br>
                                    施術中、お客さんとの会話が聞こえなかったのは、皆さん居心地の良さで眠ってらしたんでしょうね。私は緊張で眠れませんでしたけど。あと、メイク直しの時間がゆっくり出来るのも良かったです。次の時も同じ担当の方にお願いしたいです。
                                </p>
                            </div>
                        </div>

                        <div class="flex flex-wrap pt-8">
                            <p class="w-full text-center text-xs font-bold">
                                口コミをもっとみる<br class="md:hidden">
                                <span class="tracking-wider text-black pb-8 text-grey-darker font-fotura font-normal">( HOTPEPPER Beautyへリンクします )</span>
                            </p>

                            <div class="w-full flex flex-col md:flex-row justify-center">
                                <a href="https://beauty.hotpepper.jp/kr/slnH000248220/review/"
                                   class="tw-btn md:w-1/2 my-4 md:m-8">
                                    MILANO & LA ROCHELLE
                                </a>

                                <a href="https://beauty.hotpepper.jp/kr/slnH000364510/review/"
                                   class="tw-btn md:w-1/2 my-4 md:m-8">
                                    LISBON
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!--    sec 04    -->
        <section class="mb-24">
            <div class="max-w-1000 mx-auto px-4">
                <title-with-top-number>
                    <template slot="num">04</template>

                    <template slot="title">
                        スピーディーな施術は、<br class="md:hidden">
                        スキマ時間にぴったり！
                    </template>
                </title-with-top-number>

                <essay :figure="{src: '/decoration/voice_4.jpg',
                                 alt: 'やわらかい枕でぐっすり！居心地のよさもバツグン',
                                 one_third: true,
                                 end: true}">
                    <template slot="article">
                        <article>
                            <h3 class="pb-6">
                                休憩時間、買い物の合間に。<br>
                                “60分”でできるのが、マツエクのポイント。
                            </h3>

                            <p class="pb-8">
                                マツエクのポイントのひとつに「
                                <span class="tw-mask">短時間でできる</span>
                                」ことがあります。そのため、仕事の休憩時間やお買い物のちょっとした合間などにいらっしゃる方も多く見受けられます。NANAの施術時間は約60分。オフをするともっと長くなりますが、
                                <span class="tw-mask">基本的には短い時間でしっかりと施術を行います。</span>
                            </p>
                        </article>

                        <article>
                            <h3 class="pb-6">
                                施術後の飲み物とお菓子は持ち帰りOK。<br>
                                お客さまの時間を第一に。
                            </h3>

                            <p class="pb-8">
                                <span class="tw-mask">お客さまの大切な時間をいただいて施術を行っている</span>
                                」。このことをとても大切にしているからこそ、施術後の飲み物とお菓子も持ち帰りOKなものをご用意しています。
                                <span class="tw-mask">マツエクで気持ちを上向きにして、とびきりの笑顔で次の予定へ</span>
                                向かうお客さまをお送りするのが、NANAのスタイルです。
                            </p>
                        </article>
                    </template>
                </essay>

                <div class="flex mt-16 md:mt-0">
                    <p class="lg:w-1/12 relative">
                        <span
                            class="ref-title text-2xl tracking-loose leading-loose border-b-2 border-black">VOICE</span>
                    </p>

                    <div class="p-4 md:p-16 bg-grey-lighter lg:w-11/12">
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-1/2 m-8 border-grey-darkest border-b">
                                <h5 class="text-center bg-white font-normal tw-name relative">
                                    ナミチンゲールさん ： 女性 / 20代後半
                                </h5>

                                <p class="text-xs tracking-wider leading-loose pb-8 text-grey-darker pt-4">
                                    ずっとこちらでお世話になってます。どのスタッフの方になっても仕上がりで差が出ることなく満足してます。入店してから施術までの流れもテキパキと丁寧に対応してくれるので、こちらもとても気持ちよく過ごさせてもらっています。これからもよろしくお願いします。
                                </p>
                            </div>

                            <div class="md:w-1/2 m-8 border-grey-darkest border-b">
                                <h5 class="text-center bg-white font-normal tw-name relative">ちえさん ： 女性 / 20代前半</h5>

                                <p class="text-xs tracking-wider leading-loose pb-8 text-grey-darker pt-4">
                                    はじめていきました。スタッフの対応もはやくわかりやすい説明で終始印象が良かったです。施術中の音楽も静かで心地よかったです。<br>
                                    仕上がりも満足でした。最後に紙パックのジュースとお菓子2つもらえます！笑 女子はこういうちょっとしたのが嬉しいですよね！
                                </p>
                            </div>
                        </div>

                        <div class="flex flex-wrap pt-8">
                            <p class="w-full text-center text-xs font-bold">
                                口コミをもっとみる<br class="md:hidden">
                                <span class="tracking-wider text-black pb-8 text-grey-darker font-fotura font-normal">( HOTPEPPER Beautyへリンクします )</span>
                            </p>

                            <div class="w-full flex flex-col md:flex-row justify-center">
                                <a href="https://beauty.hotpepper.jp/kr/slnH000248220/review/"
                                   class="tw-btn md:w-1/2 my-4 md:m-8">
                                    MILANO & LA ROCHELLE
                                </a>

                                <a href="https://beauty.hotpepper.jp/kr/slnH000364510/review/"
                                   class="tw-btn md:w-1/2 my-4 md:m-8">
                                    LISBON
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
    import titleWithTopNumber from '../components/_TitleWithTopNumber';
    import essay from '../components/_Essay';

    export default {
        components: {titleWithTopNumber, essay},
    }
</script>

<style scoped lang="scss">
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

    .ref-title {
        @apply text-2xl tracking-loose leading-loose border-b-2 border-black absolute pin-l pin-t;
        transform: translateY(-100%);

        @screen md {
            top: 20px;
        }
    }
</style>
