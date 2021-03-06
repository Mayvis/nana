/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Import vue and vue-router.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './routes';
import PortalVue from 'portal-vue';

window.Vue = Vue;

Vue.use(VueRouter);
Vue.use(PortalVue);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('menu-list', require('./components/_MenuList.vue').default);
Vue.component('logo', require('./components/_logo.vue').default);
Vue.component('menu-hamburger', require('./components/_MenuHamburger.vue').default);
Vue.component('hero-bg', require('./components/_HeroBg.vue').default);
Vue.component('info', require('./components/_Info.vue').default);
Vue.component('breadcrumb', require('./components/_Breadcrumb.vue').default);
Vue.component('reserve', require('./components/_Reserve.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

new Vue({
    el: '#app',
    router
});
