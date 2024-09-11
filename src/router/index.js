import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home.vue'),
      name: 'home',
    },
    {
      path: '/entrar',
      component: () => import('@/views/SingIn.vue'),
      name: 'sing-in'
    },
    {
      path: '/registrar',
      component: () => import('@/views/SingUp.vue'),
      name: 'sing-up'
    },
    {
      path: '/minha-conta',
      component: () => import('@/views/Profile.vue'),
      name: 'profile'
    },
    {
      path: '/pedidos',
      component: () => import('@/views/Order.vue'),
      name: 'orders',
    },
    {
      path: '/carrinho',
      component: () => import('@/views/FinishCart.vue'),
      name: 'checkout',
    }
  ]
})

export default router
