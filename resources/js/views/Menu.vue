<template>
    <div>
        <section class="lg:mb-24">
            <div class="hero-concept"></div>
            <div>
                <svg width="100%" height="86" class="svg-concept">
                    <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central">MENU & PRICE</text>
                </svg>
                <p class="text-center">メニュー & 料金</p>
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
        background: url('/hero/hero_bg_menu_and_price.jpg') center center / cover no-repeat;
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
