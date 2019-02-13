import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./views/Home').default,
    },
    {
        path: '/concept',
        component: require('./views/Concept').default,
    },
    {
        path: '/voice',
        component: require('./views/Voice').default
    },
    {
        path: '/menu',
        component: require('./views/Menu').default,
    },
    {
        path: '/salon',
        component: require('./views/Salon').default,
    },
    {
        path: '/beauty',
        component: require('./views/Beauty').default,
        name: 'マツエクのある毎日',
    },
    {
        path: '/beauty/care',
        component: require('./views/_BeautyCare').default,
        name: 'マツエクのお手入れ方法',
    },
    {
        path: '/beauty/life',
        component: require('./views/_BeautyLife').default,
        name: 'ネイルのある毎日',
    },
    {
        path: '/beauty/gallery',
        component: require('./views/_BeautyGallery').default,
        name: 'お客様 × NANA'
    },
    {
        path: '/nail',
        component: require('./views/Nail').default,
    },
    {
        path: '/recruit',
        component: require('./views/Recruit').default,
        name: 'NANAでの働きがい',
    },
    {
        path: '/recruit/staff',
        component: require('./views/_RecruitStaff').default,
        name: '先輩スタッフの声',
    },
    {
        path: '/recruit/day',
        component: require('./views/_RecruitDay').default,
        name: 'スタッフの１日',
    },
    {
        path: '/recruit/hire',
        component: require('./views/_RecruitHire').default,
        name: '募集要項',
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
