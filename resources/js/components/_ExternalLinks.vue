<template>
    <section class="mb-24 max-w-1000 mx-auto w-full px-4">
        <div class="pt-16">
            <div class="border-black border flex flex-col md:flex-row relative items-center justify-center pt-12 p-4">
                <p class="btn-info">
                    <span>メニュー＆クーポン一覧</span>

                    <span class="pt-4">( HOTPEPPER Beautyへリンクします )</span>
                </p>

                <a href="https://beauty.hotpepper.jp/kr/slnH000248220/coupon/"
                   class="tw-btn md:m-12 my-4"
                >
                    MILANO & LA ROCHELLE
                </a>

                <a href="https://beauty.hotpepper.jp/kr/slnH000364510/coupon/"
                   class="tw-btn md:m-12 my-4"
                >
                    LISBON
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    .btn-info {
        @apply absolute flex flex-col text-center bg-white text-xs px-2 w-4/5;
        left: 50%;
        top: -35px;
        transform: translateX(-50%);

        @screen sm {
            @apply px-8 w-3/5;
            top: -45px;
        }
    }
</style>
