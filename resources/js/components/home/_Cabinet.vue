<template>
    <ul class="flex flex-wrap">
        <li v-for="user in users" class="w-1/6 p-2 relative cabinet">
            <router-link to="/salon">
                <img :src="user.avatar_path" alt="staff" class="align-middle">

                <div class="mask">
                    <p class="leading-normal tracking-loose">{{ user.name.split(' ')[0] }}</p>
                    <p class="text-xs leading-loosest font-thin tracking-loose">{{ user.name.split(' ')[1] }}</p>
                    <img src="/icon/right_arrow.png" alt="icon" class="opacity-75">
                </div>
            </router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                users: [],
            }
        },

        mounted() {
            axios.get('/api/users/avatar')
                .then(res => {
                    this.users = res.data
                });
        }
    }
</script>

<style scoped lang="scss">
    .cabinet {
        .mask {
            @apply font-adobe text-white absolute text-center;
            width: 120px;
            height: 120px;
            padding: 20px 10px;
            opacity: 0;
            top: calc(50% - 60px);
            left: calc(50% - 60px);
            transform: rotateX(-180deg);
            transition: all .6s ease;

            background: url('/icon/left_top_w.svg') left 3px top/8px 15px no-repeat,
            url('/icon/right_top_w.svg') right 3px top/8px 15px no-repeat,
            url('/icon/left_bottom_w.svg') left 3px bottom/8px 15px no-repeat,
            url('/icon/right_bottom_w.svg') right 3px bottom/8px 15px no-repeat rgba(0, 0, 0, .2);

            img {
                width: 10px;
                height: 10px;
            }
        }

        &:hover {
            .mask {
                transform: rotateX(0deg);
                opacity: 1;
            }
        }
    }
</style>
