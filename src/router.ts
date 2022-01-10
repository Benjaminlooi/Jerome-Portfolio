import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PhotoAlbum from "./views/PhotoAlbum.vue"
import BreakupCountdown from "./views/BreakupCountdown.vue"
import LoveLife from "./views/LoveLife.vue"
import MppCampaign from "./views/MppCampaign.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/photos',
      name: 'photos',
      component: PhotoAlbum
    },
    {
      path: '/countdown',
      name: 'countdown',
      component: BreakupCountdown
    },
    {
      path: '/lovelife',
      name: 'lovelife',
      component: LoveLife
    },
    {
      path: '/mpp-campaign',
      name: 'MPP Campaign',
      component: MppCampaign
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
