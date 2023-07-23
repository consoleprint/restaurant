// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        alias: 'home', 
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'menu',
        name: 'menu',
        component: () => import(/* webpackChunkName: "menu" */ '@/views/Menu.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import(/* webpackChunkName: "cart" */ '@/views/Cart.vue'),
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: () => import(/* webpackChunkName: "checkout" */ '@/views/Checkout.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
