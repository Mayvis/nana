<template>
    <div class="flex flex-wrap mb-16 md:mb-24">
        <figure v-for="image in images" class="w-1/2 sm:w-1/4 lg:w-1/5 align-bottom p-2">
            <img :src="image" alt="instagram">
        </figure>
    </div>
</template>

<script>
    export default {
        props: {
            limit: {
                default: 6,
            }
        },

        data() {
            return {
                images: [],
            }
        },

        mounted() {
            this.init();
        },

        methods: {
            init() {
                const accessToken = '10852513017.c1b883c.3ebd9833bd2840f8be1e0d808949afd2';

                window.$.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=" + accessToken, res => {
                    window.$.each(res.data, index => {

                        if (index < this.limit) return;

                        this.images.push(res.data[index].images.standard_resolution.url);
                    });
                });
            }
        },
    }
</script>

<style scoped>

</style>
