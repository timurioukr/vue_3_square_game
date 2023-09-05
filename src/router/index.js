import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:catchAll(.*)',
      name: 'all',
      redirect: '/404',
    },
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/MainView.vue')
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('@/views/GameView.vue')
    },
    {
      path: '/404',
      name: 'no-found',
      meta: {
        public: true,
        access: 'public'
      },
      component: () => import('@/views/404.vue')
    }
  ]
})

export default router
