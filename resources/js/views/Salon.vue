<template>
    <div>
        <hero-bg>
            <div slot="hero"
                 class="tw-hero"
                 style="background: url('/hero/hero_bg_salon.jpg') center center / cover no-repeat;">
            </div>

            <template slot="title">SALON</template>

            <template slot="desc">店舗紹介</template>
        </hero-bg>

        <!--    sec 01    -->
        <section class="mb-24 relative">
            <div class="max-w-1000 mx-auto p-4">
                <div class="flex flex-col md:flex-row">
                    <div
                        class="lg:w-1/2 w-full bg-white p-16 pt-8 border border-blue-darker mb-16 md:my-16 md:mx-8 relative tw-flex-end">
                        <h2 class="tw-header text-blue-darker">
                            MILANO
                        </h2>

                        <p class="text-xs pb-4 lg:pb-8 text-grey-darker">
                            Salon information
                        </p>

                        <ul class="text-xs tracking-wider leading-loose text-black pb-8 text-grey-darker">
                            <li>10:00 - 20:00</li>
                            <li>
                                福岡市中央区天神2-4-20<br>
                                天神プラッサ405号
                            </li>
                            <li>TEL : 092-725-5127</li>
                        </ul>

                        <a href="/"
                           class="tw-btn"
                        >
                            サロン紹介＆ご予約
                        </a>

                        <div class="tw-border tw-color-blue"></div>
                    </div>

                    <div class="lg:w-1/2 w-full">
                        <figure class="mb-16">
                            <img src="/decoration/salon_1.jpg" alt="MILANO" width="427" height="330">
                        </figure>

                        <figure>
                            <img src="/decoration/salon_2.jpg" alt="MILANO" width="210" height="170">
                        </figure>
                    </div>
                </div>
            </div>

            <div class="tw-base bg-grey-lighter"></div>
        </section>

        <!--    sec 02    -->
        <section class="mb-24 relative">
            <div class="max-w-1000 mx-auto p-4">
                <div class="flex flex-col md:flex-row">
                    <div class="lg:w-1/2 w-full bg-white p-16 pt-8 border border-gold mb-16 md:my-16 md:mx-8 relative">
                        <h2 class="text-4xl font-bold leading-loosest tracking-loosest text-gold tw-header relative">
                            La Rochelle
                        </h2>

                        <p class="text-xs pb-8 text-grey-darker">
                            Salon information
                        </p>

                        <ul class="text-xs tracking-wider leading-loose text-black pb-8 text-grey-darker">
                            <li>10:00 - 20:00</li>
                            <li>
                                福岡市中央区天神2-4-20<br>
                                天神プラッサ902号
                            </li>
                            <li>TEL : 092-406-4506</li>
                        </ul>

                        <a href="/"
                           class="tw-btn"
                        >
                            サロン紹介＆ご予約
                        </a>

                        <div class="tw-border tw-color-yellow"></div>
                    </div>

                    <div class="w-full lg:w-1/2 items-end flex items-end flex-col">
                        <figure class="mb-16">
                            <img src="/decoration/salon_3.jpg" alt="La Rochelle" width="427" height="330">
                        </figure>

                        <figure>
                            <img src="/decoration/salon_4.jpg" alt="La Rochelle" width="210" height="170">
                        </figure>
                    </div>
                </div>
            </div>

            <div class="tw-base bg-yellow-lightest"></div>
        </section>

        <!--    sec 03    -->
        <section class="mb-24 relative">
            <div class="max-w-1000 mx-auto p-4">
                <div class="flex flex-col md:flex-row">
                    <div class="lg:w-1/2 w-full bg-white p-16 pt-8 border border-blue-lighter mb-16 md:my-16 md:mx-8 relative tw-flex-end">
                        <h2 class="text-4xl font-bold leading-loosest tracking-loosest text-blue-lighter tw-header relative">
                            LISBON
                        </h2>

                        <p class="text-xs pb-8 text-grey-darker">
                            Salon information
                        </p>

                        <ul class="text-xs tracking-wider leading-loose text-black pb-8 text-grey-darker">
                            <li>10:00 - 20:00</li>
                            <li>
                                福岡市中央区大名1-13-23<br>
                                LEX21 5F
                            </li>
                            <li>TEL : 092-716-3453</li>
                        </ul>

                        <a href="/"
                           class="tw-btn"
                        >
                            サロン紹介＆ご予約
                        </a>

                        <div class="tw-border tw-color-blue-lighter"></div>
                    </div>

                    <div class="lg:w-1/2 w-full">
                        <figure class="mb-16">
                            <img src="/decoration/salon_5.jpg" alt="LISBON" width="427" height="330">
                        </figure>

                        <figure>
                            <img src="/decoration/salon_6.jpg" alt="LISBON" width="210" height="170">
                        </figure>
                    </div>
                </div>
            </div>

            <div class="tw-base bg-blue-lightest"></div>
        </section>

        <!--    google    -->
        <section class="max-w-1000 mx-auto mb-24 px-4 w-full sm:w-4/5">
            <iframe src="https://www.google.com/maps/d/embed?mid=1Wwn-z48yRGrD0lOk6UrT0G6X2r71mv6W"
                    class="google-map">
            </iframe>
        </section>

        <breadcrumb></breadcrumb>

        <reserve></reserve>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped lang="scss">
    .tw-header {
        @apply text-2xl font-bold leading-loosest tracking-loosest relative;

        @screen md {
            @apply text-4xl;
        }

        &:after {
            position: absolute;
            content: '';
            left: 0;
            bottom: 15%;
            width: 15%;
            height: 1px;
            background-color: #000;
        }
    }

    .text-gold.tw-header:after {
        background-color: #c3b282;
    }

    .text-blue-lighter.tw-header:after {
        background-color: #629dae;
    }

    .tw-base {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 100vw;
        height: 50%;
        z-index: -2;
    }

    .tw-border {
        position: absolute;
        top: 51.5%;
        left: 51.5%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    .tw-color-blue {
        border-right: 1px solid #3b587e;
        border-bottom: 1px solid #3b587e;
    }

    .tw-color-blue-lighter {
        border-right: 1px solid #629dae;
        border-bottom: 1px solid #629dae;
    }

    .tw-color-yellow {
        border-right: 1px solid #c3b282;
        border-bottom: 1px solid #c3b282;
    }

    .google-map {
        width: 100%;
        height: 360px;

        @screen md {
            height: 540px;
        }

        @screen lg {
            height: 720px;
        }
    }
</style>
