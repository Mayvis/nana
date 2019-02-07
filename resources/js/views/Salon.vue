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

        <section class="max-w-1000 mx-auto lg:mb-24">
            <iframe src="https://www.google.com/maps/d/embed?mid=1Wwn-z48yRGrD0lOk6UrT0G6X2r71mv6W" width="1000" height="720"></iframe>
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
    export default {
    }
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
</style>
