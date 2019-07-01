import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
export const serverBus = new Vue();


Vue.use(Router)

new Vue({
  el: '#app',
  render: h => h(App)
})