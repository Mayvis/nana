<template>
    <div class="flex flex-wrap justify-center px-4">
        <figure
            class="w-full overflow-hidden flex items-center md:items-start mb-16 max-h-280 md:max-h-none md:p-8"
            :class="[flexEnd, rate]"
        >
            <img :src=figure.src
                 :alt=figure.alt
            >
        </figure>

        <div class="w-full md:mb-16 tw-flex-start"
             :class="[((figure.end === true) ? 'pr-0 md:pr-12' : 'pl-0 md:pl-12'),
                      ((figure.one_third === true) ? 'md:w-2/3' : 'md:w-3/5')]"
        >
            <slot name="article"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['figure'],

        computed: {
            flexEnd() {
                return {'tw-flex-end': this.figure.end};
            },

            rate() {
                return (this.figure.one_third === true) ? 'md:w-1/3' : 'md:w-2/5';
            }
        },
    }
</script>
