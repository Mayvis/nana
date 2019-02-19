<template>
    <section class="mb-24 mx-auto max-w-1000">
        <div class="flex my-16 px-4">
            <p class="lg:w-1/12 relative">
                <span class="ref-title">
                    ENTRY!
                </span>
            </p>

            <div class="p-16 bg-teal-lightest w-full lg:w-11/12">
                <div class="flex flex-col">
                    <p class="text-center pt-4">
                        それぞれの個性で “お客様を美しく”。<br>
                        NANAで働きたいという方のご応募を心よりお待ちしております。
                    </p>

                    <div class="w-full flex justify-center">
                        <a :href=link
                           class="tw-btn w-1/2 hover:bg-yellow-lighter m-8">
                            <slot name="btn-name"></slot>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['link'],
    }
</script>

<style scoped lang="scss">
    .ref-title {
        @apply text-2xl tracking-loose leading-loose border-b-2 border-black absolute pin-l pin-t;
        transform: translateY(-100%);

        @screen md {
            top: 20px;
        }
    }
</style>
