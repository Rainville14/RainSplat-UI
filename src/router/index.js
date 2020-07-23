import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/views/Homepage'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
      exact: true
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path !== from.path || to.path === '/') {
    next();
  }
})

export default router;
