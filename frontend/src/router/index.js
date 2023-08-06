// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    redirect:{
      name: 'home'
    },
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import( '@/views/Home.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/About.vue'),
      },
      {
        path: 'menu',
        name: 'menu',
        component: () => import('@/views/Menu.vue'),
      },
      {
        path: 'location',
        name: 'location',
        component: () => import('@/views/Location.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('@/views/Cart.vue'),
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: () => import('@/views/Checkout.vue'),
      },
      {
        path: 'order/:id',
        name: 'order',
        component: () => import('@/views/Order.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
