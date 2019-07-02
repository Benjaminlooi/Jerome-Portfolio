<template>
  <div id="app">
    <transition name="menu-transition">
      <Menu v-if="menuIsShow"></Menu>
    </transition>
    <router-view />
  </div>
</template>

<script>
import Menu from "@/components/Menu";

export default {
  components: {
    Menu
  },
  computed: {
    menuIsShow: function() {
      return this.$store.state.menuIsShow;
    }
  }
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Anton");
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700&display=swap");

body {
  font-family: "Roboto Condensed", sans-serif;
  margin: 0;
  overflow: hidden;
}
a{
  color: inherit;
  text-decoration: none;
}
a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
  margin: 0;
  padding: 0;
  border: 0;
  // font-size: 100%;
  // font: inherit;
  // vertical-align: baseline;
}

.menu-transition-enter-active,
.menu-transition-leave-active {
  transition: transform 0.6s;
}
.menu-transition-enter {
  transform: translateY(-100vh);
}
.menu-transition-enter-to,
.menu-transition-leave {
  transform: translateY(0);
}
.menu-transition-leave-to {
  transform: translateY(-100vh);
}
</style>
