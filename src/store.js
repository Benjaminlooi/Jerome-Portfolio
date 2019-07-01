import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoad: false,
    menuIsShow: false
  },
  mutations: {
    updateIsLoad(state) {
      state.isLoad = true;
    },
    openMenu(state) {
      state.menuIsShow = true;
    },
    closeMenu(state) {
      state.menuIsShow = false;
    }
  },
  actions: {

  }
})
