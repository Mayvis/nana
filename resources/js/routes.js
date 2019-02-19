import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./views/Home').default,
        name: 'HOME',
    },
    {
        path: '/concept',
        component: require('./views/Concept').default,
        name: 'CONCEPT',
    },
    {
        path: '/voice',
        component: require('./views/Voice').default,
        name: 'VOICE',
    },
    {
        path: '/menu',
        component: require('./views/Menu').default,
        name: 'MENU & PRICE',
    },
    {
        path: '/salon',
        component: require('./views/Salon').default,
        name: 'SALON',
    },
    {
        path: '/beauty',
        component: require('./views/Beauty').default,
        name: 'マツエクのある毎日',
    },
    {
        path: '/beauty/care',
        component: require('./views/BeautyCare').default,
        name: 'マツエクのお手入れ方法',
    },
    {
        path: '/beauty/life',
        component: require('./views/BeautyLife').default,
        name: 'ネイルのある毎日',
    },
    {
        path: '/beauty/gallery',
        component: require('./views/BeautyGallery').default,
        name: 'お客様 × NANA',
    },
    {
        path: '/nail',
        component: require('./views/Nail').default,
        name: 'NAIL',
    },
    {
        path: '/recruit',
        component: require('./views/Recruit').default,
        name: 'NANAでの働きがい',
    },
    {
        path: '/recruit/staff',
        component: require('./views/RecruitStaff').default,
        name: '先輩スタッフの声',
    },
    {
        path: '/recruit/day',
        component: require('./views/RecruitDay').default,
        name: 'スタッフの１日',
    },
    {
        path: '/recruit/hire',
        component: require('./views/RecruitHire').default,
        name: '募集要項',
    },
    {
        path: '*',
        redirect: '/',
    }
];

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-exact-active',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition;

        // Vue router transition issue while using anchor, need to use promise to async execute and delay after transition render finish.
        if (to.hash) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({selector: to.hash});  // 如果有指定hash的話滾動到hash的位置
                }, 600);
            });
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ x: 0, y: 0 }); // scroll to (0, 0)
            }, 500);
        })
    }
});
