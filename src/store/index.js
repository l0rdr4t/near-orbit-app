import { createStore } from 'vuex'

export default createStore({
  state: {
    token: ""
  },
  getters: {
  },
  mutations: {
    setToken (state, payload) {
      state.token = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
