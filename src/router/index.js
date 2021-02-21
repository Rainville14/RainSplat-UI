import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/views/Homepage'
import Page from '@/views/Page';
import Styleguide from '@/views/Guides/Styleguide';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
      exact: true
    },
    {
      path: '/styleguide',
      name: 'Styleguide',
      component: Styleguide
    },
    {
      path: '/:slug?',
      name: 'Pages',
      component: Page
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path !== from.path || to.path === '/') {
    next();
  }
})

export default router;
