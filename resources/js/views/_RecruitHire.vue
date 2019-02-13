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

        <section class="lg:mb-24 max-w-1000 mx-auto">
            <div class="tw-title text-center relative lg:mb-16">
                <span class="text-sm tracking-loose font-light absolute sub-title">RECRUIT</span>

                <h2 class="leading-normal font-san tracking-wider text-normal p-8 pt-16">
                    募集要項</h2>
            </div>

            <div>
                <table class="tw-table">
                    <tr>
                        <th>募集職種</th>
                        <td>アイリスト・ネイリスト</td>
                    </tr>
                    <tr>
                        <th>仕事内容</th>
                        <td>
                            施術を中心としたサロン業務全般 総合職での採用となりますので　商品開発　広告宣伝　マーケティング　女性を美しくする仕事ならば　なんでも ただの　マツエク・ネイル職人はいらないです
                        </td>
                    </tr>
                    <tr>
                        <th>募集対象</th>
                        <td>
                            ネイリスト<br>
                            ◎各種検定２級、または中級以上<br>
                            ◎サロンでの実務経験者のみ<br>
                            ネイル認定講師/ JNA・JNEC/美容師免許/管理美容師/資格取得予定者<br>
                            アイリスト<br>
                            美容師免許お持ちの方　経験者　未経験者問わず
                        </td>
                    </tr>
                    <tr>
                        <th>勤務時間・休日</th>
                        <td>
                            勤務時間　9：30~20：00<br>
                            休日　年間102日休<br>
                            2月・3月・4月・6月・7月・9月・11月・12月<br>
                            月8日間休（6日間+有給2日間<br>
                            1月・5月・8月　10日間休み　2019年103日休<br>
                            月10日間休（６日間+有給4日間
                        </td>
                    </tr>
                    <tr>
                        <th>勤務地</th>
                        <td>
                            福岡市中央区天神2-4-20天神プラッサ NANAミラノ・ラロシェル<br>
                            福岡市中央区大名1-13-23　LEX２１ビル５階 NANA　LISBON
                        </td>
                    </tr>
                    <tr>
                        <th>待遇</th>
                        <td>
                            ◎交通費支給（5,000円まで支給）<br>
                            基本給6ヶ月　180,000円<br>
                            7か月目から　190,000円
                        </td>
                    </tr>
                    <tr>
                        <th>諸手当</th>
                        <td>
                            ◎残業手当/１時間につき1,000~1,800円支給<br>
                            ◎役職手当　店長手当　チーフ手当　Web担当手当など
                        </td>
                    </tr>
                    <tr>
                        <th>昇給・賞与</th>
                        <td>
                            ◎賞与/年4回（現状毎年支給しております）<br>
                             評価制度に基づき1回につき3~15万円の支給あり<br>
                             2019年には賞与を年2回<br>
                             月給一ヶ月以上を支給できるようただ今準備中です。<br>
                            ◎昇給賞与　必ず年1回2000円
                        </td>
                    </tr>
                    <tr>
                        <th>福利厚生</th>
                        <td>◎社会保険完備 ◎労災保険・雇用保険 ◎制服貸与 ◎研修旅行 ◎ランチ支給　週4日</td>
                    </tr>
                    <tr>
                        <th>教育制度</th>
                        <td>技術はしっかり丁寧に学べる環境を整えております 経験者でも１ヶ月　未経験者であれば4ヶ月かけて　他のスタッフと変わらない技術を身に着けるまでは　お客様に入れてません</td>
                    </tr>
                </table>
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
                        <p class="text-center pt-4">
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

        <links></links>

        <breadcrumb :middle="{name: 'RECRUIT', default: true}"></breadcrumb>

        <reserve></reserve>
    </div>
</template>

<script>
    import links from '../components/recruit/_Links';

    export default {
        components: {links},
    }
</script>

<style scoped lang="scss">
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

    .tw-table {
        @apply text-sm;

        tr {
            @apply border-b border-grey-light leading-normal tracking-wider;

            &:first-child {
                @apply border-t;
            }
        }

        th {
            @apply w-2/5 tracking-loose py-6 font-light;
        }

        td {
            @apply w-3/5 py-6 font-light;
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
