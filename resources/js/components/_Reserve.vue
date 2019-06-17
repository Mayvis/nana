<template>
    <section class="mb-24 px-4">
        <div class="container mx-auto relative flex justify-center flex-col bg-teal-lightest pt-24">
            <figure class="tw-nana">
                <img :src="logo" alt="NANA">
            </figure>

            <div class="flex flex-col text-center">
                <span class="font-semibold">ご予約はこちらから</span>

                <span class="text-center text-xs font-light text-grey py-2 tracking-loose hidden md:block">( HOTPEPPER Beauty の予約ページ へリンクします )</span>

                <span class="text-center text-xs font-light text-grey py-2 tracking-loose md:hidden">( HOTPEPPER Beauty へリンクします )</span>
            </div>

            <div class="flex justify-center flex-wrap md:flex-no-wrap">
                <a href="/"
                   class="tw-btn md:w-1/4 md:m-12 mx-6 mt-4"
                   data-aos="zoom-in-up"
                >
                    MILANO & LA ROCHELLE
                </a>

                <a href="/"
                   class="tw-btn md:w-1/4 md:m-12 mx-6 my-8"
                   data-aos="zoom-in-up"
                >
                    LISBON
                </a>
            </div>
        </div>
    </section>
</template>

<script>
    import logo from '../../../public/storage/logo/logo.png';

    export default {
        data() {
            return {
                logo
            };
        },
    }
</script>

<style scoped lang="scss">
    .tw-nana {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -30%);

        img {
            width: 196px;
            height: auto;
        }
    }
</style>
