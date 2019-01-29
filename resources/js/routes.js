import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./views/Home.vue').default,
    },
    {
        path: '/concept',
        component: require('./views/Concept.vue').default,
    },
    {
        path: '/voice',
        component: require('./views/Voice.vue').default
    },
    {
        path: '/menu',
        component: require('./views/Menu.vue').default,
    },
    {
        path: '/salon',
        component: require('./views/Salon.vue').default,
    },
    {
        path: '/beauty',
        component: require('./views/Beauty.vue').default,
    },
    {
        path: '/nail',
        component: require('./views/Nail.vue').default,
    },
    {
        path: '/recruit',
        component: require('./views/Recruit.vue').default,
    },
];

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active'
});
