import Vue from 'vue'
import Vuex from 'vuex'
import User from '@/store/modules/user'
import Cart from '@/store/modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
    token (state) {
      return state.User.userInfo.token
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    User,
    Cart
  }
})
