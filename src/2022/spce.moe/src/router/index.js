import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("../views/Home.vue"),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import("../views/About.vue"),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import("../views/404.vue"),
  },
  {
    path: '/pphahaha',
    name: 'privacy',
    component: () => import("../views/Privacy.vue"),
  },
  // {
  //   path: '/faq',
  //   name: 'faq',
  //   component: () => import("../views/FAQ.vue"),
  // },
  // {
  //   path: '/uses',
  //   name: 'uses',
  //   component: () => import("../views/Uses.vue"),
  // },
  {
    path: '/services',
    name: 'services',
    component: () => import("../views/Services.vue"),
  },
  // {
  //   path: '/donate',
  //   name: 'donate',
  //   component: () => import("../views/Donate.vue"),
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
