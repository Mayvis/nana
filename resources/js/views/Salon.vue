<template>
    <div>
        <section class="lg:mb-24">
            <div class="hero-concept"></div>
            <div>
                <svg width="100%" height="86" class="svg-concept">
                    <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central">SALON</text>
                </svg>

                <p class="text-center">店舗紹介</p>
            </div>
        </section>

        <section class="lg:mb-24 relative">
            <div class="max-w-1000 mx-auto">
                <div class="flex">
                    <div class="lg:w-1/2">
                        <figure class="lg:mb-16">
                            <img src="/decoration/salon_1.jpg" alt="MILANO" width="427" height="330">
                        </figure>

                        <figure>
                            <img src="/decoration/salon_2.jpg" alt="MILANO" width="210" height="170">
                        </figure>
                    </div>

                    <div class="lg:w-1/2 bg-white p-16 pt-8 border border-blue-darker lg:my-16 lg:mx-8 relative">
                        <h2 class="text-4xl font-bold leading-loosest tracking-loosest text-black text-blue-darker tw-header relative">
                            MILANO</h2>

                        <p class="text-xs pb-8 text-grey-darker">
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
                           class="tw-btn inline-block h-50 leading-50 text-xs w-full text-center hover:bg-yellow-lighter"
                        >
                            サロン紹介＆ご予約
                        </a>

                        <div class="tw-border tw-color-blue"></div>
                    </div>
                </div>
            </div>

            <div class="tw-base bg-grey-lighter"></div>
        </section>

        <section class="lg:mb-24 relative">
            <div class="max-w-1000 mx-auto">
                <div class="flex">
                    <div class="lg:w-1/2 tw-flex-end items-end flex items-end flex-col">
                        <figure class="lg:mb-16">
                            <img src="/decoration/salon_3.jpg" alt="La Rochelle" width="427" height="330">
                        </figure>

                        <figure>
                            <img src="/decoration/salon_4.jpg" alt="La Rochelle" width="210" height="170">
                        </figure>
                    </div>

                    <div class="lg:w-1/2 bg-white p-16 pt-8 border border-gold lg:my-16 lg:mx-8 relative tw-flex-start">
                        <h2 class="text-4xl font-bold leading-loosest tracking-loosest text-black text-gold tw-header relative">
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
                           class="tw-btn inline-block h-50 leading-50 text-xs w-full text-center hover:bg-yellow-lighter"
                        >
                            サロン紹介＆ご予約
                        </a>

                        <div class="tw-border tw-color-yellow"></div>
                    </div>
                </div>
            </div>

            <div class="tw-base bg-yellow-lightest"></div>
        </section>

        <section class="lg:mb-24 relative">
            <div class="max-w-1000 mx-auto">
                <div class="flex">
                    <div class="lg:w-1/2">
                        <figure class="lg:mb-16">
                            <img src="/decoration/salon_5.jpg" alt="LISBON" width="427" height="330">
                        </figure>

                        <figure>
                            <img src="/decoration/salon_6.jpg" alt="LISBON" width="210" height="170">
                        </figure>
                    </div>

                    <div class="lg:w-1/2 bg-white p-16 pt-8 border border-blue-lighter lg:my-16 lg:mx-8 relative">
                        <h2 class="text-4xl font-bold leading-loosest tracking-loosest text-black text-blue-lighter tw-header relative">
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
                           class="tw-btn inline-block h-50 leading-50 text-xs w-full text-center hover:bg-yellow-lighter"
                        >
                            サロン紹介＆ご予約
                        </a>

                        <div class="tw-border tw-color-blue-lighter"></div>
                    </div>
                </div>
            </div>

            <div class="tw-base bg-blue-lightest"></div>
        </section>

        <section class="max-w-1000 mx-auto lg:mb-24">
            <iframe src="https://www.google.com/maps/d/embed?mid=1Wwn-z48yRGrD0lOk6UrT0G6X2r71mv6W"
                    width="1000"
                    height="720">
            </iframe>
        </section>

        <section class="lg:mb-24">
            <div class="max-w-1200 border-b border-grey pb-4 tw-line relative">
                <div class="max-w-600">
                    <ul class="flex justify-center">
                        <li>
                            <router-link to="/"
                                         class="text-xs tracking-wider leading-loose text-black pb-8 text-grey-darkest hover:text-grey-dark"
                            >
                                HOME&nbsp|&nbsp
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/salon"
                                         class="text-xs tracking-wider leading-loose text-black pb-8 text-grey-darkest text-teal"
                            >
                                SALON
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
    export default {}
</script>

<style scoped lang="scss">
    .hero-concept {
        background: url('/hero/hero_bg_salon.jpg') center center / cover no-repeat;
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

    .tw-header:after {
        position: absolute;
        content: '';
        left: 0;
        bottom: 15%;
        width: 15%;
        height: 1px;
        background-color: #000;
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
</style>
