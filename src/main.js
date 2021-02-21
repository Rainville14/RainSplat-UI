/** Compatability Polyfills */
import '@babel/polyfill';
import 'intersection-observer';
import 'events-polyfill';
import 'custom-event-polyfill';
/* /Compatability Polyfills **/
import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import VueGtm from 'vue-gtm';
import store from './store';
import App from './App';
import router from './router';
import vuetify from './plugins/vuetify';
import i18n from './i18n';
import VueTheMask from 'vue-the-mask';
import VueCurrencyInput from 'vue-currency-input'
import money from 'v-money';

Vue.config.productionTip = false;

Vue.use(money, {
    decimal: '.',
    thousands: ',',
    precision: 2
});

Vue.use(VueCurrencyInput, {
    globalOptions: {
        currency: 'USD',
        locale: 'en'
    }
});

Vue.use(VueTheMask);

Vue.use(VueAnalytics, {
    id: process.env.VUE_APP_GA_UA,
    router,
    autoTracking: {
        pageviewTemplate(route) {
            return {
                page: route.path,
                title: document.title,
                location: window.location.href
            };
        }
    }
});

Vue.use(VueGtm, {
    id: process.env.VUE_APP_GTM_ID, // Your GTM single container ID or array of container ids ['GTM-xxxxxxx', 'GTM-yyyyyyy']
    enabled: process.env.VUE_APP_GTM_ENABLED === 'true', // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
    debug: process.env.VUE_APP_GTM_DEBUG === 'true', // Whether or not display console logs debugs (optional)
    loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional) 
    vueRouter: router // Pass the router instance to automatically sync with router (optional)
});

new Vue({
    vuetify,
    store,
    router,
    i18n,
    mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
    render: h => h(App)
}).$mount('#app');
