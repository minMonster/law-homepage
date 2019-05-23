import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history', // 设置路由模式 可选值: "hash" | "history" | "abstract"，默认"hash"
  routes: [
    {
      name: 'home',
      path: '/',
      component: resolve => require(['@/views/home.vue'], resolve),
      meta: {title: 'home'}
    },
    {
      name: 'list-page',
      path: '/list-page',
      component: resolve => require(['@/views/list-page.vue'], resolve),
      meta: {title: 'list page'}
    },
    {
      name: 'law-detail',
      path: '/law-detail',
      component: resolve => require(['@/views/law-detail.vue'], resolve),
      meta: {title: 'list-detail'}
    },
    {
      name: 'contact-us',
      path: '/contact-us',
      component: resolve => require(['@/views/contact-us.vue'], resolve),
      meta: {title: 'contact us'}
    }
  ]
});

export default router;
