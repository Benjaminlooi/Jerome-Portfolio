<template>
  <div>
    <div class="prs_tl prs_a row">
      <span
        class="menu_icon w_menu start_menu start_menu_w"
        @mouseenter="menu_over"
        @mouseleave="menu_leave"
        @click="menu_click"
        :class="{'active':global_menu_view}"
      >
        <svg
          width="48px"
          height="48px"
          viewBox="0 0 48 48"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g id="Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Desktop-HD2" transform="translate(-1591.000000, -58.000000)" fill="#ffffff">
              <g id="menu_bt2" transform="translate(1591.000000, 58.000000)">
                <g>
                  <rect class="Rectangle" x="0" y="10" width="48" height="6" />
                  <polygon
                    class="Rectangle-Copy"
                    points="12 26.6666667 48 26.6666667 48 32.6666667 18 32.6666667"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </span>
      <div class="side_deco">ABOUT</div>
      <div class="side_deco2 side_deco">EUM RAY</div>
      <div class="side_deco3 side_deco">UXUI DESIGN</div>
      <div class="side_deco4 side_deco">WEB DEVELMENT</div>
      <div class="intro_myself">
        <ul>
          <li>I am a UXUI Designer and</li>
          <li>Front-end Developer</li>
          <li>&nbsp;</li>
          <li>It's my portfolio website</li>
          <li>produced by Eum Ray</li>
          <li>contents planning by Eum Ray</li>
          <li>UXUI design by Eum Ray</li>
          <li>Motion graphic by Eum Ray</li>
          <li>Front-end development by Eum Ray</li>
          <li>Back-end development by Eum Ray</li>
          <li>Publishing by Eum Ray</li>
          <li>Interaction animation by Eum Ray</li>
          <li>Video directing by Eum Ray</li>
          <li>Video editing by Eum Ray</li>
          <li>Copywriting by Eum Ray</li>
          <li>Tested by Eum Ray</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { serverBus } from "./main";
export default {
  name: "about",
  data() {
    return {
      global_menu_view: 0
    };
  },
  mounted() {
    serverBus.$on("server_menu_view", server => {
      this.global_menu_view = server;
    });
    $(".global_menu.start_menu").hide();
    this.$parent.menu_switch();
    $(".intro_myself ul li").each(function(index) {
      console.log($(this));
      //$(this).css("display","none");
      if (window.innerWidth > 900)
        $(this).css("animation-delay", index * 1.1 + "s");
      else $(this).css("animation-delay", index * 0.9 + "s");
    });
  },
  destroyed() {},
  methods: {
    menu_over() {
      this.$parent.menu_over();
    },
    menu_leave() {
      this.$parent.menu_leave();
    },
    menu_click() {
      this.$parent.menu_click();

      if (this.global_menu_view) {
        TweenLite.to($(".w_menu"), 1, { opacity: 0 });
        $(".global_menu.start_menu").show();
      } else {
        TweenLite.to($(".w_menu"), 1, { opacity: 1 });
        $(".global_menu.start_menu").hide();
      }
    }
  }
};
</script>



// WEBPACK FOOTER //
// src/about.vue