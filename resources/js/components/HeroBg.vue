<template>
    <section class="mb-24">
        <slot name="hero"></slot>

        <div>
            <svg width="100%" height="86" class="tw-svg">
                <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central">
                    <slot name="title"></slot>
                </text>
            </svg>

            <p class="text-center">
                <slot name="desc"></slot>
            </p>
        </div>
    </section>
</template>

<script>
    export default {}
</script>

<style scoped lang="scss">
    .tw-hero {
        height: 240px;
        margin-top: -165px;

        @screen md {
            height: 360px;
        }
    }

    .tw-svg {
        overflow: visible;
        height: 86px;
        margin-top: -30px;
        font-family: "sofia-pro-condensed", sans-serif;
        font-size: 50px;
        line-height: 1;
        letter-spacing: .2em;

        @screen lg {
            font-size: 86px;
        }

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
