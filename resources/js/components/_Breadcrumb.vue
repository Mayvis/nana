<template>
    <section class="lg:mb-24">
        <div class="max-w-1200 border-b border-grey pb-4 tw-line relative">
            <div class="max-w-600">
                <ul class="flex justify-center">
                    <li>
                        <router-link to="/"
                                     class="text-xs tracking-wider leading-loose text-grey-darkest hover:text-grey-dark"
                        >
                            HOME&nbsp|&nbsp
                        </router-link>
                    </li>

                    <li class="text-xs tracking-wider leading-loose text-grey-darkest" v-show="this.middle">
                        {{ this.middle.name }}&nbsp|&nbsp
                    </li>

                    <li>
                        <router-link :to="{ path: $route.path }"
                                     class="text-xs tracking-wider leading-loose pb-8 text-teal"
                        >
                            {{ $route.name }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            middle: {
                name: '',
                default: false,
            }
        }
    }
</script>

<style scoped>

</style>
