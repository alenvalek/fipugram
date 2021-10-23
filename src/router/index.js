import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import SignUp from '../views/SignUp.vue';
import Dashboard from '../views/Dashboard.vue';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
         needsUser: true,
      },
   },
   {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
         needsUser: true,
      },
   },
   {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
         needsUser: false,
      },
   },
   {
      path: '/register',
      name: 'Register',
      component: SignUp,
      meta: {
         needsUser: false,
      },
   },
];

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes,
});

router.beforeEach((to, from, next) => {
   const noUser = store.getters['user'] == null;
   if (noUser && to.meta.needsUser) {
      next('login');
   } else {
      next();
   }
});

export default router;
