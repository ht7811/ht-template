import { createRouter, createWebHistory } from 'vue-router/auto'
//自动读取刚才配置的目录（views）下的页面，不需要自己再写routes
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes)
})

export default router
