// Import all dependencies
import Vue from 'vue'
import App from './App.vue'
import VueJWT from 'vuejs-jwt'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

// Import routes
import routes from './routes'

// Use middleware and Bootstrap
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueJWT)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Declare router with any attributes
const router = new VueRouter({ 
  mode: 'history', 
  routes: routes 
})

// Instantiate App with any attributes
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
