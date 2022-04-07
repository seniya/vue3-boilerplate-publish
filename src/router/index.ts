import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import routerPages from '@/router/routes/pages.router'
import routerMembers from '@/router/routes/members.router'
import { setupRouterGuard } from '@/router/guard.config'

const routes: Array<RouteRecordRaw> = [
  routerPages,
  routerMembers,
  {
    path: '/',
    redirect: '/pages/main',
    meta: {
      title: 'HomeMain'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 라우터 가드(router before/after) setup
setupRouterGuard(router)

export default router
