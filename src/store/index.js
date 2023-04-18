import { createStore } from 'vuex'

export default createStore({
  state: {
    token: "not yet logged in.",
    auth_target: "loading..."
  },
  getters: {
  },
  mutations: {
    setToken (state, payload) {
      state.token = payload;
    },
    setAuthTarget (state, payload) {
      state.auth_target = payload;
    },
    
  },
  actions: {
  },
  modules: {
  }
})
