<template>
    <section class="mb-24 flex flex-col items-center max-w-1000 mx-auto">
        <div class="w-full md:w-3/5 flex flex-col md:flex-row px-4">
            <router-link tag="a" to="/recruit" class="tw-link-group">
                NANAでの働きがい
            </router-link>

            <router-link tag="a" to="/recruit/staff" class="tw-link-group">
                先輩スタッフの声
            </router-link>
        </div>

        <div class="w-full md:w-3/5 flex flex-col md:flex-row px-4">
            <router-link tag="a" to="/recruit/day" class="tw-link-group md:border-b">
                スタッフの１日
            </router-link>

            <router-link tag="a" to="/recruit/hire" class="tw-link-group border-b">
                募集要項
            </router-link>
        </div>
    </section>
</template>

<script>
    export default {}
</script>

<style scoped lang="scss">
    .is-exact-active {
        @apply bg-grey-lighter;
    }

    .text-teal.is-exact-active {
        background: inherit;
    }

    .tw-link-group {
        @apply w-full p-4 border-grey-light text-xs border-t text-grey-darkest relative;

        @screen md {
            @apply w-1/2 mr-4 p-8;
        }

        &:hover {
            @apply bg-grey-lighter;
        }

        &:after {
            content: '';
            position: absolute;
            background: url('/icon/harpoon.png') right center/12px 4px no-repeat;
            width: 20px;
            height: 4px;
            right: 8px;
            top: 50%;
            transform: translateY(-50%);
        }
    }
</style>
