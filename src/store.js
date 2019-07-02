import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mouse: {
      x: -26,
      y: -26,
      width: 26,
      height: 26,
      hover_medium: false,
      hover_strong: false
    },
    isLoad: false,
    menuIsShow: false
  },
  mutations: {
    updateMousePosition(state, payload) {
      state.mouse.x = payload.x;
      state.mouse.y = payload.y;
    },
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
