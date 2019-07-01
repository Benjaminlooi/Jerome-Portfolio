<template>
  <div class="intro-first" @mousemove="updateMousePosition">
    <span class="mouse_deco" :style="mouse_cursor" :class="mouse_cursor_effect"></span>
    <div class="main-copy">
      <span>
        I am the
        <br />president of
        <br />Uniten's
        <br />MPP
      </span>
    </div>
    <div class="name">R. Jerome</div>
    <div
      class="menu-icon"
      @mouseover="mouse.hover_strong = true"
      @mouseleave="mouse.hover_strong = false"
    >
      <img src="../assets/icons8-menu-filled.svg" alt />
    </div>
    <div class="social-medias">
      <ul>
        <li @mouseover="mouse.hover_medium = true" @mouseleave="mouse.hover_medium = false">
          <a href="https://www.facebook.com/rayymond.thomas">
            <img src="../assets/facebook-logo.svg" alt />
          </a>
        </li>
        <li @mouseover="mouse.hover_medium = true" @mouseleave="mouse.hover_medium = false">
          <a href="https://www.instagram.com/rayymond.jpg/">
            <img src="../assets/instagram.svg" alt />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroFirst",
  data: () => ({
    mouse: {
      x: -26,
      y: -26,
      width: 26,
      height: 26,
      hover_medium: false,
      hover_strong: false
    }
  }),
  computed: {
    mouse_cursor() {
      return {
        width: this.mouse.width + "px",
        height: this.mouse.height + "px",
        left: this.mouse.x - this.mouse.width / 2 + "px",
        top: this.mouse.y - this.mouse.height / 2 + "px"
      };
    },
    mouse_cursor_effect: function() {
      return {
        mouse_deco_enlarge_medium: this.mouse.hover_medium,
        mouse_deco_enlarge_strong: this.mouse.hover_strong
      };
    }
  },
  created() {
    window.onload = () => {
      this.$store.commit("updateIsLoad");
    };
  },
  methods: {
    updateMousePosition(e) {
      this.$set(this.mouse, "x", e.x);
      this.$set(this.mouse, "y", e.y);
    }
  }
};
</script>

<style lang="scss" scoped>
[v-cloak] {
  display: none;
}
.intro-first {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url("../assets/jerome_bg2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  -moz-filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale");
  -o-filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale");
  -webkit-filter: grayscale(100%);
  filter: gray;
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale");
  cursor: none;
}
.mouse_deco {
  position: absolute;
  width: 26px;
  height: 26px;
  border: 4px solid #282828;
  border-radius: 50%;
  // transition: width 0.15s ease-in-out, height 0.15s ease-in-out;
  transition: transform 0.3s ease-in-out, border 0.3s ease-in-out;
}
.mouse_deco_enlarge_medium {
  // width: 35px;
  // height: 35px;
  transform: scale(2);
  border: 2px solid #282828;
}
.mouse_deco_enlarge_strong {
  transform: scale(2.3);
  border: 1.74px solid #282828;
}
.main-copy {
  position: absolute;
  top: 87px;
  left: 90px;
  font-family: impact;
  text-transform: uppercase;
  line-height: 1.1em;
  font-size: 7.4vh;
  color: #303030;
}
.name {
  position: absolute;
  left: 90px;
  bottom: 35px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  font-weight: 800;
  font-size: 26px;
}
.menu-icon {
  position: absolute;
  top: 57px;
  right: 70px;
}
.menu-icon img {
  width: 40px;
}
.social-medias {
  position: absolute;
  bottom: 90px;
  right: 68px;
}
.social-medias ul li {
  list-style: none;
  text-align: center;
  margin-top: 45px;
}
.social-medias a {
  cursor: none;
}
</style>

