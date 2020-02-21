import Vue from 'vue'
import App from './App.vue'
import VueJWT from 'vuejs-jwt'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'


import routes from './routes'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueJWT)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const router = new VueRouter({ 
  mode: 'history', 
  routes: routes 
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
