import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import './assets/fa/css/font-awesome.css'

import App from './App.vue'
import router from './router'
import store from './store'

import './style/index.scss'

import './permission'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
