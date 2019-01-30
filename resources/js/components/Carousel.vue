<template>
    <div class="main-carousel fade relative">
        <div class="carousel-cell" style="background-image: url('/hero/hero_1.gif')"></div>
        <div class="carousel-cell" style="background-image: url('/hero/hero_2.gif')"></div>
        <div class="carousel-cell" style="background-image: url('/hero/hero_3.gif')"></div>
        <div class="carousel-cell" style="background-image: url('/hero/hero_4.gif')"></div>
    </div>
</template>

<script>
    import Flickity from 'flickity';
    import 'flickity/dist/flickity.min.css';

    export default {
        mounted() {
           this.init();
        },

        methods: {
            init() {
                new Flickity(this.$el, {
                    prevNextButtons: false,
                    autoPlay: 4000,
                    cellAlign: 'left',
                    contain: true,
                    pageDots: false,
                    draggable: false,
                });
            }
        },
    }
</script>

<style lang="scss">
    .main-carousel {
        width: 1100px;
    }

    .fade .carousel-cell {
        background-size: contain;
        background-repeat: no-repeat;
        width: 1422.22px;
        height: 800px;
        opacity: 0;
        left: 0 !important;
        transform: scale(1);
        transition: 1.5s ease-in-out;

        &.is-selected {
            opacity: 0.75;
            left: 0;
            transform: scale(1.02);
        }
    }

    .flickity-slider {
        transform: none !important;
    }
</style>
