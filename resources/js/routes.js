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
        path: '/beauty/care',
        component: require('./views/_BeautyCare').default,
    },
    {
        path: '/beauty/life',
        component: require('./views/_BeautyLife').default,
    },
    {
        path: '/beauty/gallery',
        component: require('./views/_BeautyGallery').default,
    },
    {
        path: '/nail',
        component: require('./views/Nail.vue').default,
    },
    {
        path: '/recruit',
        component: require('./views/Recruit.vue').default,
    },
    {
        path: '/recruit/staff',
        component: require('./views/_RecruitStaff').default,
    },
    {
        path: '/recruit/day',
        component: require('./views/_RecruitDay').default,
    },
    {
        path: '/recruit/hire',
        component: require('./views/_RecruitHire').default,
    }
];

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-exact-active',
    scrollBehavior(to) {
        if (to.hash) return {selector: to.hash}; // 如果有指定hash的話滾動到hash的位置

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ x: 0, y: 0 })
            }, 500)
        })
    }
});
