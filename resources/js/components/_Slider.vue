<template>
    <div class="main-carousel w-full slider" style="height: 140px;"></div>
</template>

<script>
    import Flickity from 'flickity';
    import 'flickity/dist/flickity.min.css';

    export default {
        props: {
            rightToLeft: {default: false}
        },

        mounted() {
            let flkty = new Flickity(this.$el, {
                autoPlay: 1200,
                wrapAround: true,
                prevNextButtons: false,
                cellAlign: 'left',
                pageDots: false,
                rightToLeft: this.rightToLeft,
                groupCells: 2,
                draggable: false,
                friction: 0.15,
                selectedAttraction: 0.005, // change the slider speed
            });

            this.init(flkty);
        },

        methods: {
            init(flkty) {
                this.load(flkty);
            },

            load(flkty) {
                const accessToken = '10852513017.c1b883c.3ebd9833bd2840f8be1e0d808949afd2';

                window.axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + accessToken)
                    .then(res => {
                        window.$.each(res.data.data, index => {
                            flkty.append(
                                $('<a href="' + res.data.data[index].link +'" class="carousel-cell">' +
                                    '<img src="' + res.data.data[index].images.standard_resolution.url + '" alt="instagram">' +
                                    '</a>')
                            );
                        });
                    })
                    .catch(error => console.log(error));
            },
        },
    }
</script>

<style lang="scss">
    .slider {
        .flickity-viewport {
            height: 140px !important;
        }

        .carousel-cell {
            width: 140px;
            height: auto;
            margin: 20px 10px;
        }
    }
</style>
