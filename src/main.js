import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Home from './components/Home'
import Browse from './components/Browse'
import Login from './components/Login'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  {path: "/", component: Home,},
  {path: "/browse", component: Browse},
  {path: "/login", component: Login}
]

const router = new VueRouter({
  routes
})

const store = new Vuex.Store({
  state: {
    users: []
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
