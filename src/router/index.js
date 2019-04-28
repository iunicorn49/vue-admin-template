import Vue from 'vue'
import Router from 'vue-router'

import { ROOT_PATH } from './config'
import mainRoutes from './routes'

Vue.use(Router)

const routes = [
  { path: '/', redirect: ROOT_PATH + '/dashboard' },
  mainRoutes, // 带有侧边栏的路由
]

export default new Router({
  mode: 'history',
  routes: routes,
})

