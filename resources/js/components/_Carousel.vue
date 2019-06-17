<template>
    <div class="main-carousel fade relative">
        <div class="carousel-cell cell-1"></div>
        <div class="carousel-cell cell-2"></div>
        <div class="carousel-cell cell-3"></div>
        <div class="carousel-cell cell-4"></div>
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
    .fade.main-carousel {
        @apply w-3/4 h-full pr-8;

        @media only screen and (max-width: 767px) {
            width: 100%;
            padding-right: 0;
            padding-bottom: 25%;
        }
    }

    .cell-1 {
        background-image: url('../../../public/storage/hero/hero_1.gif');
    }

    .cell-2 {
        background-image: url('../../../public/storage/hero/hero_2.gif');
    }

    .cell-3 {
        background-image: url('../../../public/storage/hero/hero_3.gif');
    }

    .cell-4 {
        background-image: url('../../../public/storage/hero/hero_4.gif');
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

        .flickity-viewport {
            @apply h-auto;
        }

        @media only screen and (max-width: 991px) {
            height: 510px;

            .flickity-viewport {
                height: 510px !important;
            }
        }

        &.is-selected {
            @apply opacity-75 pin-l;
            transform: scale(1.02);
        }
    }

    .fade .flickity-slider {
        transform: none !important;
    }
</style>
