<template>
    <section class="lg:mb-24 flex flex-col items-center max-w-1000 mx-auto">
        <div class="w-3/5 flex">
            <router-link tag="a" to="/recruit" class="tw-link-group hover:bg-grey-lighter">
                NANAでの働きがい
            </router-link>

            <router-link tag="a" to="/recruit/staff" class="tw-link-group hover:bg-grey-lighter">
                先輩スタッフの声
            </router-link>
        </div>

        <div class="w-3/5 flex">
            <router-link tag="a" to="/recruit/day" class="tw-link-group hover:bg-grey-lighter border-b">
                スタッフの１日
            </router-link>

            <router-link tag="a" to="/recruit/hire" class="tw-link-group hover:bg-grey-lighter border-b">
                募集要項
            </router-link>
        </div>
    </section>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="scss">
    .is-exact-active {
        @apply bg-grey-lighter;
    }

    .text-teal.is-exact-active {
        background: inherit;
    }

    .tw-link-group {
        @apply w-1/2 p-8 border-t border-grey-light mr-4 text-sm text-grey-darkest relative;

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
