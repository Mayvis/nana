<template>
    <div class="tw-title text-center relative mb-16 py-4">
        <span class="sub-title">
            <slot name="num"></slot>
        </span>

        <h2 class="leading-normal p-4 text-base md:text-2xl">
            <slot name="title"></slot>
        </h2>
    </div>
</template>

<style scoped lang="scss">
    .sub-title {
        @apply absolute pin-t text-3xl;
        left: 50%;
        transform: translate(-50%, -50%);

        @screen lg {
            @apply text-350;
        }
    }
</style>

