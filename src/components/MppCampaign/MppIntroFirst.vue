<template>
  <div class="intro-first">
    <span
      class="mouse_deco"
      :style="mouse_cursor"
      :class="mouse_cursor_effect"
    ></span>
    <div class="main-copy">
      <span ref="spans" class="spanses">
        <div v-for="(line, index) in heroMessage" :key="index">
          <span
            v-for="(char, index) in line"
            :key="index"
            class="charInSpanses"
          >
            <template v-if="char == ' '">&nbsp;</template>
            <template v-else>{{ char }}</template>
          </span>
        </div>
      </span>
    </div>
    <div class="name">R. Jerome</div>
    <div class="vote4">4</div>
    <MenuIcon noCursor="true"></MenuIcon>
    <div class="social-medias">
      <ul>
        <li
          @mouseover="mouse.hover_medium = true"
          @mouseleave="mouse.hover_medium = false"
        >
          <a href="https://www.facebook.com/rayymond.thomas">
            <svg
              width="14px"
              height="25px"
              viewBox="0 0 14 25"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <!-- Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch -->
              <title>facebook</title>
              <desc>Created with Sketch.</desc>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  class="social-icons"
                  transform="translate(-1614.000000, -606.000000)"
                  fill="#303030"
                >
                  <g
                    id="facebook-logo"
                    transform="translate(1614.000000, 606.000000)"
                  >
                    <path
                      d="M12.6572608,0.00505390836 L9.5074124,0 C5.96866577,0 3.68177224,2.34627695 3.68177224,5.9777628 L3.68177224,8.73391173 L0.514740566,8.73391173 C0.241071429,8.73391173 0.0194575472,8.9557783 0.0194575472,9.22944744 L0.0194575472,13.2227931 C0.0194575472,13.4964623 0.241324124,13.7180761 0.514740566,13.7180761 L3.68177224,13.7180761 L3.68177224,23.7945586 C3.68177224,24.0682278 3.90338612,24.2898416 4.17705526,24.2898416 L8.30913073,24.2898416 C8.58279987,24.2898416 8.80441375,24.0679751 8.80441375,23.7945586 L8.80441375,13.7180761 L12.5074124,13.7180761 C12.7810815,13.7180761 13.0026954,13.4964623 13.0026954,13.2227931 L13.0042116,9.22944744 C13.0042116,9.09804582 12.9519036,8.9722035 12.8591644,8.87921159 C12.7664252,8.78621968 12.6400775,8.73391173 12.5086759,8.73391173 L8.80441375,8.73391173 L8.80441375,6.39748989 C8.80441375,5.27451146 9.07201819,4.70443059 10.534872,4.70443059 L12.6567554,4.70367251 C12.9301718,4.70367251 13.1517857,4.48180593 13.1517857,4.20838949 L13.1517857,0.500336927 C13.1517857,0.227173181 12.9304245,0.00555929919 12.6572608,0.00505390836 Z"
                      id="Path"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </li>
        <li
          @mouseover="mouse.hover_medium = true"
          @mouseleave="mouse.hover_medium = false"
        >
          <a href="https://www.instagram.com/rayymond.jpg/">
            <svg
              width="23px"
              height="23px"
              viewBox="0 0 23 23"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <!-- Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch -->
              <title>instagram</title>
              <desc>Created with Sketch.</desc>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  class="social-icons"
                  transform="translate(-1609.000000, -744.000000)"
                  fill="#282828"
                >
                  <g
                    id="instagram"
                    transform="translate(1609.000000, 744.000000)"
                  >
                    <path
                      d="M15.8125,0 L7.1875,0 C3.2185625,0 0,3.2185625 0,7.1875 L0,15.8125 C0,19.7814375 3.2185625,23 7.1875,23 L15.8125,23 C19.7814375,23 23,19.7814375 23,15.8125 L23,7.1875 C23,3.2185625 19.7814375,0 15.8125,0 Z M20.84375,15.8125 C20.84375,18.586875 18.586875,20.84375 15.8125,20.84375 L7.1875,20.84375 C4.413125,20.84375 2.15625,18.586875 2.15625,15.8125 L2.15625,7.1875 C2.15625,4.413125 4.413125,2.15625 7.1875,2.15625 L15.8125,2.15625 C18.586875,2.15625 20.84375,4.413125 20.84375,7.1875 L20.84375,15.8125 Z"
                      id="Shape"
                      fill-rule="nonzero"
                    />
                    <path
                      d="M11.5,5.75 C8.3245625,5.75 5.75,8.3245625 5.75,11.5 C5.75,14.6754375 8.3245625,17.25 11.5,17.25 C14.6754375,17.25 17.25,14.6754375 17.25,11.5 C17.25,8.3245625 14.6754375,5.75 11.5,5.75 Z M11.5,15.09375 C9.519125,15.09375 7.90625,13.480875 7.90625,11.5 C7.90625,9.5176875 9.519125,7.90625 11.5,7.90625 C13.480875,7.90625 15.09375,9.5176875 15.09375,11.5 C15.09375,13.480875 13.480875,15.09375 11.5,15.09375 Z"
                      id="Shape"
                      fill-rule="nonzero"
                    />
                    <circle id="Oval" cx="17.45" cy="5.85" r="1.25" />
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </div>

    <TheScrollTip />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MenuIcon from '@/components/TheMenuIcon';
import TheScrollTip from '@/components/TheScrollTip';
import { TimelineMax, Back } from 'gsap';

export default {
  name: 'IntroFirst',
  components: {
    MenuIcon,
    TheScrollTip,
  },
  data: () => ({
    heroMessage: [
      "I'm Rayymond",
      'Thomas',
      'candidate #4',
      'for the',
      'upcoming',
      'MPP election',
    ],
  }),
  computed: {
    ...mapState({
      mouse: (state) => state.mouse,
    }),
    mouse_cursor() {
      return {
        width: this.mouse.width + 'px',
        height: this.mouse.height + 'px',
        left: this.mouse.x - this.mouse.width / 2 + 'px',
        top: this.mouse.y - this.mouse.height / 2 + 'px',
      };
    },
    mouse_cursor_effect: function () {
      return {
        mouse_deco_enlarge_medium: this.mouse.hover_medium,
        mouse_deco_enlarge_strong: this.mouse.hover_strong,
      };
    },
  },
  created() {},
  mounted() {
    console.log(Math.random() * 300);
    setTimeout(() => {
      let t1 = new TimelineMax();
      let spanses = document.querySelectorAll('.charInSpanses');

      t1.staggerFrom(
        spanses,
        1,
        {
          opacity: 0,
          filter: 'blur(10px)',
          x: function () {
            return 300 - Math.random() * 600;
          },
          y: function () {
            return 300 - Math.random() * 600;
          },
          ease: Back.easeOut.config(0.6),
        },
        0.1,
      );
    }, 1);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.intro-first {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url('~@/assets/DSC00968-min-edited.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 50%;
  cursor: none;
}
.intro-first::before {
  content: '';
  background: url('~@/assets/noise3.gif');
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
  transform: scale(2);
  border: 2px solid #282828;
}
.mouse_deco_enlarge_strong {
  transform: scale(2.3);
  border: 1.74px solid #282828;
}
.main-copy {
  position: absolute;
  top: 80px;
  left: 80px;
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
  line-height: 0.9em;
  font-size: 7.3vh;
  font-weight: 700;
  color: #303030;
}
.name {
  font-family: 'Times New Roman', Times, serif;
  position: absolute;
  left: 80px;
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
  a {
    cursor: none;
  }
  ul li {
    svg {
      margin: auto;
    }
    list-style: none;
    text-align: center;
    margin-top: 45px;
  }
}
.spanses span {
  display: inline-block;
  filter: blur(0);
  animation: shake 5s 7s forwards infinite;
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
.vote4 {
  position: absolute;
  left: 58vw;
  bottom: 10vh;
  font-size: 30rem;
  line-height: 1;
  color: #303030;
}

@media only screen and (max-width: 900px) {
  .main-copy {
    top: 50px;
    left: 30px;
    font-size: 6.8vh;
    // transform: scale(0.8);
    // transform-origin: left top;
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
  .intro-first {
    background-position: 20% 50%;
    cursor: initial;
  }
  .social-icons {
    fill: #efefef;
  }
  .main-copy {
    font-size: 6vh;
  }
}
</style>
