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
  // {
  //   path: '/apps',
  //   name: 'apps',
  //   component: () => import("../views/Apps.vue"),
  // },
  // {
  //   path: '/petal',
  //   name: 'petal',
  //   component: () => import("../views/Petal.vue"),
  // },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import("../views/404.vue"),
  },
  // {
  //   path: '/links',
  //   name: 'links',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/LinksView.vue')
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
