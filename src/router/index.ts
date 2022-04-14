import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import routerGuide from '@/router/routes/guide.routes'
import { setupRouterGuard } from '@/router/guard.config'

const routes: Array<RouteRecordRaw> = [
  routerGuide,
  {
    path: '/',
    component: () => import(/* webpackChunkName: "home" */ '@/views/_guide/listIA.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

// 라우터 가드(router before/after) setup
setupRouterGuard(router)

export default router
