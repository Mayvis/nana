<template>
    <section class="lg:mb-24">
        <div class="container mx-auto relative flex justify-center flex-col bg-teal-lightest pt-24">
            <figure class="tw-nana">
                <img src="/logo/nana.png" alt="NANA">
            </figure>

            <div class="flex flex-col text-center">
                <span class="font-semibold">ご予約はこちらから</span>

                <span class="text-center text-xs text-grey-darkest pt-2 pb-2 tracking-loose">( HOTPEPPER Beauty の予約ページ へリンクします )</span>
            </div>

            <div class="flex justify-center">
                <a href="/"
                   class="tw-btn w-1/4 hover:bg-yellow-lighter lg:m-12"
                   data-aos="zoom-in-up"
                >
                    MILANO & LA ROCHELLE
                </a>

                <a href="/"
                   class="tw-btn w-1/4 hover:bg-yellow-lighter lg:m-12"
                   data-aos="zoom-in-up"
                >
                    LISBON
                </a>
            </div>
        </div>
    </section>
</template>

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
