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

        <section class="mb-24">
            <div class="max-w-1000 mx-auto px-4">
                <title-with-word>
                    <template slot="sub">INSTAGRAM</template>

                    <template slot="title">NANA COLLECTION</template>
                </title-with-word>

                <div>
                    <p class="text-center pb-8">
                        FOLLOW <a href="/" class="hover:text-grey-darker tw-mask">@nana_eyelashsalon !</a>
                    </p>

                    <collection></collection>
                </div>

                <div>
                    <p class="text-center pb-8">
                        FOLLOW <a href="/" class="hover:text-grey-darker tw-mask">@nana_nail_lisbon !</a>
                    </p>

                    <collection></collection>
                </div>
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
    import titleWithWord from '../components/_TitleWithWord';
    import collection from '../components/_Collection';
    import externalLinks from '../components/_ExternalLinks';

    export default {
        components: {links, titleWithWord, collection, externalLinks},
    }
</script>

<style scoped lang="scss">
    .sub-title {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
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
