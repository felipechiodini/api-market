import { useUserStore } from '@/stores/user'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home.vue'),
      name: 'home',
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/entrar',
      component: () => import('@/views/SingIn.vue'),
      name: 'sing-in',
      meta: {
        onlyGuest: true
      }
    },
    {
      path: '/registrar',
      component: () => import('@/views/SingUp.vue'),
      name: 'sing-up',
      meta: {
        onlyGuest: true
      }
    },
    {
      path: '/esqueci-minha-senha',
      component: () => import('@/views/ForgetPassword.vue'),
      name: 'forget-password',
      meta: {
        onlyGuest: true
      }
    },
    {
      path: '/minha-conta',
      component: () => import('@/views/Profile.vue'),
      name: 'profile',
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/pedidos',
      component: () => import('@/views/Order.vue'),
      name: 'orders',
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/carrinho',
      component: () => import('@/views/FinishCart.vue'),
      name: 'checkout',
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const user = useUserStore()

    if (user.token !== null) {
      next()
    } else {
      next({ name: 'sing-in' })
    }
  } else if (to.meta.onlyGuest) {
    if (useUserStore().token !== null) {
      next({ name: 'home' })
    } else {
      next()
    }
  }
})
export default router
