<template>
    <div>
        <div class="menu"
             @click="check">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <portal to="header-after">
            <menu-list :active="active"></menu-list>
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
                (this.active === true) ? this.active = false : this.active = true;
            }
        },
    }
</script>
