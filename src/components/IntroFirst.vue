<template>
  <div class="intro-first">
    <span class="mouse_deco" :style="mouse_cursor" :class="mouse_cursor_effect"></span>
    <div class="main-copy">
      <span ref="spans" class="spanses">
        <span>I</span>
        <span>&nbsp;</span>
        <span>a</span>
        <span>m</span>
        <span>&nbsp;</span>
        <span>t</span>
        <span>h</span>
        <span>e</span>
        <br />
        <span>p</span>
        <span>r</span>
        <span>e</span>
        <span>s</span>
        <span>i</span>
        <span>d</span>
        <span>e</span>
        <span>n</span>
        <span>t</span>
        <span>&nbsp;</span>
        <span>o</span>
        <span>f</span>
        <br />
        <span>U</span>
        <span>n</span>
        <span>i</span>
        <span>t</span>
        <span>e</span>
        <span>n</span>
        <span>'</span>
        <span>s</span>
        <br />
        <span>M</span>
        <span>P</span>
        <span>P</span>
      </span>
    </div>
    <div class="name">R. Jerome</div>
    <MenuIcon noCursor="true"></MenuIcon>
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
import { mapState } from "vuex";
import MenuIcon from "@/components/MenuIcon";

export default {
  name: "IntroFirst",
  components: {
    MenuIcon
  },
  data: () => ({
    //
  }),
  computed: {
    ...mapState({
      mouse: state => state.mouse
    }),
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
  },
  mounted() {
    // console.log(this.$refs);
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.intro-first {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url("../assets/jerome_bg.jpg");
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
.intro-first::before {
  content: "";
  background: url("../assets/noise3.gif");
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
  font-family: "Roboto Condensed", sans-serif;
  text-transform: uppercase;
  line-height: 0.9em;
  font-size: 8.4vh;
  font-weight: 700;
  color: #303030;
}
.name {
  font-family: "Times New Roman", Times, serif;
  position: absolute;
  left: 90px;
  bottom: 35px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  font-weight: 800;
  font-size: 26px;
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
.spanses span {
  display: inline-block;
  animation: blur 2.5s both, shake 5s 3.5s forwards infinite;
}
@keyframes blur {
  0% {
    transform: scale(3) translate(-94px, -62px);
    opacity: 0;
    filter: blur(10px);
  }
  30% {
    opacity: 0.8;
  }
  50% {
    // transform: translate(-19px, 24px);
    opacity: 0.4;
  }
  80% {
    filter: blur(7px);
    transform: scale(1);
    font-size: 7.4vh;
  }
  100% {
    transform: translate(0);
    filter: blur(0);
    opacity: 1;
  }
}
@keyframes shake {
  0% {
    transform: skewX(-7deg);
  }
  0.2% {
    transform: skewX(7deg);
  }
  0.4% {
    transform: skewX(-7deg);
  }
  0.6% {
    transform: skewX(7deg);
  }
  0.8% {
    transform: skewX(0deg);
  }
  100% {
    transform: skewX(0deg);
  }
}

@media only screen and (max-width: 900px) {
  .main-copy {
    top: 50px;
    left: 30px;
    transform: scale(0.8);
    transform-origin: left top;
  }
  .name {
    transform: scale(0.8) rotate(-90deg);
    left: 30px;
    bottom: 25px;
  }
  .social-medias {
    transform: scale(0.9);
    transform-origin: right bottom;
    right: 25px;
    bottom: 40px;
  }
}
@media only screen and (max-width: 600px) {
  .mouse_deco {
    display: none;
  }
}
</style>

