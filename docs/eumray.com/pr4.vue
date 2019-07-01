<template>
  <div>
    <div class="prs_tl prs_1 prs_41 row">
      <span
        class="menu_icon w_menu start_menu start_menu_w"
        v-show="!global_menu_view"
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
                  >
                    <animate
                      begin="hover"
                      id="ani_menu_hover2"
                      fill="freeze"
                      attributeName="points"
                      dur="200ms"
                      to="0 26.6666667 48 26.6666667 48 32.6666667 0 32.6666667"
                    />
                  </polygon>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </span>
      <div class="pr_label">
        <div class="pr_num">
          project 04
          <span class="pr_bar"></span>
        </div>
        <div class="pr_title" v-on:click="site_link">
          beginmate
          <img src="/img/ic_link.svg" />
        </div>
      </div>
    </div>
    <div class="prs_tl prs_2 prs_42 row">
      <div class="pr_desc">
        "Startup Team Building Platform, beginmate" is an online platform.
        <br />beginmate is designed to solve the plight of early startups.
        <br />As a startup company, I have worked alone from making a brand logo,
        <br />planning, poster, UXUI and front-end development(vue.js).
      </div>
      <div class="pr_spec">
        <ul>
          <li>
            <span class="spec_title">Date</span>
            <span class="spec_value">2018. 03</span>
          </li>
          <li>
            <span class="spec_title">Design</span>
            <span class="spec_value">Eum Ray</span>
          </li>
          <li>
            <span class="spec_title">Development</span>
            <span class="spec_value">Eum Ray</span>
          </li>
          <li>
            <span class="spec_title">URL</span>
            <span class="spec_value" v-on:click="site_link">beginmate.com</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="prs_tl prs_3 row">
      <span
        class="menu_icon menu_prs_43"
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
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Desktop-HD" transform="translate(-1591.000000, -58.000000)" fill="#282828">
              <g id="menu_bt" transform="translate(1591.000000, 58.000000)">
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
      <img class="beginmate_logo" width="100%" src="/img/pr_42.svg" />
    </div>
    <div class="prs_tl prs_4 row">
      <div class="section_title">Color System</div>
      <div class="color_desc">
        <ul>
          <li>
            <span class="color_part">
              <span class="p1_color"></span>
              <span class="color_title">#FFD112</span>
            </span>
            <span class="desc_part">
              <span class="part_title">Point color</span>
              <span class="part_content">#friendly, #trust, #energy</span>
            </span>
          </li>
          <li>
            <span class="color_part">
              <span class="p2_color"></span>
              <span class="color_title">#e5e5e5</span>
            </span>
            <span class="desc_part">
              <span class="part_title">Main color</span>
              <span class="part_content">#balance, #harmony, #easy</span>
            </span>
          </li>
          <li>
            <span class="color_part">
              <span class="p3_color"></span>
              <span class="color_title">#FFD112</span>
            </span>
            <span class="desc_part">
              <span class="part_title">Support color</span>
              <span class="part_content">#simple, #light</span>
            </span>
          </li>
        </ul>
      </div>
      <div class="color_text">
        A balanced design for content is important for platform services.
        <br />So, I designed it as simple as I could. and thought about balance with other contents
        <br />
      </div>

      <div class="business_card">
        <img src="/img/mh1.png" />
        <img src="/img/mh2.png" />
      </div>
    </div>
    <div class="prs_tl prs_4 row">
      <div class="pr_shot">
        <ul>
          <li>
            <img src="/img/pr_41.jpg" />
          </li>
          <li>
            <img src="/img/pr_42.jpg" />
          </li>
          <li>
            <img src="/img/pr_43.png" />
          </li>
          <li>
            <img src="/img/pr_44.png" />
          </li>
          <li class="mobile_shot">
            <ul>
              <li>
                <img src="/img/pr4_m1.jpg" />
              </li>
              <li>
                <img src="/img/pr4_m2.png" />
              </li>
              <li>
                <img src="/img/pr4_m3.png" />
              </li>
              <li>
                <img src="/img/pr4_m4.png" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { serverBus } from "./main";
export default {
  name: "pr4",
  data() {
    return {
      global_menu_view: 0
    };
  },
  mounted() {
    $(".prs_1").css("height", window.innerHeight);
    serverBus.$on("server_menu_view", server => {
      this.global_menu_view = server;
    });
    $(".global_menu.start_menu").hide();
    this.$parent.menu_switch();

    $(document).scroll(function() {
      $(".menu_prs_43").css(
        "top",
        $(".start_menu_w").offset().top -
          $(".menu_prs_43")
            .closest(".row")
            .offset().top
      );
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
      if (this.global_menu_view) $(".global_menu.start_menu").show();
    },
    site_link() {
      window.open("https://beginmate.com");
    }
  }
};
</script>



// WEBPACK FOOTER //
// src/pr4.vue