<template>
    <div>
        <div class="menu"
             @click="check"
             :class="(active === true) ? 'active': ''">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <portal to="header-after">
            <menu-list :active="active" @changed="check"></menu-list>
        </portal>
    </div>
</template>

<script>
    import MenuList from './MenuList.vue';

    export default {
        components: {MenuList},

        data() {
            return {
                active: false
            }
        },

        methods: {
            check() {
                this.active = (this.active !== true);
            }
        },
    }
</script>
