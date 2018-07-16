import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bodyCanScroll: true
  },
  mutations: {
    disableBodyScroll: (state) => {
      state.bodyCanScroll = false
    },
    enableBodyScroll: (state) => {
      state.bodyCanScroll = true
    }
  },
  actions: {

  }
})
