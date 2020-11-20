import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import Home from './components/Home'
import Browse from './components/Browse'
import Login from './components/Login'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  {path: "/home", component: Home,},
  {path: "/browse", component: Browse},
  {path: "/", component: Login}
]

const router = new VueRouter({
  routes
})

const store = new Vuex.Store({
  state: {
    user: {},
    profiles: [],
    posts: []
  },
  mutations: {
    set_user(state, user) {
      state.user = user
    },
    set_profiles(state, profiles) {
      state.profiles = profiles
    },
    set_posts(state, posts) {
      state.posts = posts
    }
  },
  getters: {
    get_user: (state) => state.user,
    get_profiles: (state) => state.profiles,
    get_posts: (state) => state.posts
  },
  actions: {
    fetch_user({ commit }) {
      axios.get('https://private-anon-2dd1fa3c0e-wad20postit.apiary-mock.com/users/1')
      .then(res => {commit('set_user', res.data)})
    },
    fetch_profiles({ commit }) {
      axios.get('https://private-anon-2dd1fa3c0e-wad20postit.apiary-mock.com/profiles')
      .then(res => {commit('set_profiles', res.data)})
    },
    fetch_posts({ commit }) {
      axios.get('https://private-anon-2dd1fa3c0e-wad20postit.apiary-mock.com/posts')
      .then(res => {commit('set_posts', res.data)})
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
