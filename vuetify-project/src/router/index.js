// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'menu',
        name: 'menu',
        component: () => import('@/views/Menu.vue'),
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
        path: 'location',
        name: 'location',
        component: () => import('@/views/Location.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/About.vue'),
      },
      {
        path: 'order/:id',
        name: 'order',
        component: () => import('@/views/Order.vue'),
      },
    ],   
    redirect: {
      name: 'home'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
