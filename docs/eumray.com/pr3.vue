<template>
  <div>
    <div class="prs_tl prs_1 prs_31 row">
      <div class="main_cp">
        <div class="cp_big">
          <div class="main_cp_t">
            <span class="word capS cap1">S</span>
            <span class="word capP cap2">P</span>
            <span class="word capE cap3">E</span>
            <span class="word capC cap4">C</span>
            <span class="word capI cap5">I</span>
            <span class="word capA cap6">A</span>
            <span class="word capL cap7">L</span>
            <span class="word capL_2 cap8">L</span>
            <span class="word capY cap9">Y</span>
          </div>

          <div class="main_cp_t">
            <span class="word capC_2 cap10">C</span>
            <span class="word capR cap11">R</span>
            <span class="word capA_2 cap12">A</span>
            <span class="word capF cap13">F</span>
            <span class="word capT cap14">T</span>
            <span class="word capE_2 cap15">E</span>
            <span class="word capD cap16">D</span>
          </div>

          <div class="main_cp_t">
            <span class="word capF_2 cap17">F</span>
            <span class="word capO cap18">O</span>
            <span class="word capR_2 cap19">R</span>
          </div>

          <div class="main_cp_t">
            <span class="word capY_2 cap20">Y</span>
            <span class="word capO_2 cap21">O</span>
            <span class="word capU cap22">U</span>
            <span class="word capR_3 cap23">R</span>
          </div>

          <div class="main_cp_t">
            <span class="word capP_2 cap24">P</span>
            <span class="word capE_3 cap25">E</span>
            <span class="word capR_4 cap26">R</span>
            <span class="word capP_3 cap27">P</span>
            <span class="word capE_4 cap28">E</span>
            <span class="word capC_3 cap29">C</span>
            <span class="word capT_2 cap30">T</span>
          </div>

          <div class="main_cp_t">
            <span class="word capS_2 cap31">S</span>
            <span class="word capL_3 cap32">L</span>
            <span class="word capE_5 cap33">E</span>
            <span class="word capE_6 cap34">E</span>
            <span class="word capP_4 cap35">P</span>
          </div>
        </div>
      </div>
      <div class="pr_label">
        <div class="pr_num">
          project 02
          <span class="pr_bar"></span>
        </div>
        <div class="pr_title" v-on:click="site_link">
          ROUGEMAISON
          <img src="/img/ic_link_b.svg" />
        </div>
      </div>
    </div>
    <div class="contents_row row">
      <span
        class="menu_icon w_menu"
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
      <div class="prs_tl prs_2">
        <div class="pr_desc">
          It's a premium duvet brand website called 'ROUGE MAISON.'
          <br />It was a project that newly established branding from logo to web page production.
        </div>
        <div class="pr_spec">
          <ul>
            <li>
              <span class="spec_title">Date</span>
              <span class="spec_value">2017. 05</span>
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
              <span class="spec_value" v-on:click="site_link">rougemaison.com</span>
            </li>
          </ul>
        </div>
        <div class="pr_shot">
          <ul>
            <li>
              <img src="/img/pr_31.png" />
            </li>
            <li>
              <img src="/img/pr_32.jpg" />
            </li>
            <li>
              <img src="/img/pr_33.png" />
            </li>
            <li class="mobile_shot">
              <ul>
                <li>
                  <img src="/img/pr3_m1.png" />
                </li>
                <li>
                  <img src="/img/pr3_m2.png" />
                </li>
                <li>
                  <img src="/img/pr3_m3.png" />
                </li>
                <li>
                  <img src="/img/pr3_m4.png" />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { serverBus } from "./main";

export default {
  name: "pr3",
  data() {
    return {
      global_menu_view: 0
    };
  },
  mounted: function() {
    $(".prs_1").css("height", window.innerHeight);
    serverBus.$on("server_menu_view", server => {
      this.global_menu_view = server;
    });
    this.$parent.menu_switch();
    $(document).ready(function() {
      if (window.innerWidth > 900) {
        init();
        skr_r = skrollr.init({
          smoothScrolling: false
        });
        skr_r.refresh();
      }
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
      } else {
        TweenLite.to($(".w_menu"), 1, { opacity: 1 });
      }
    },
    site_link() {
      window.open("http://rougemaison.com");
    }
  }
};

var setSkrollr = function($el, data) {
  for (var i = 0; i < data.length; i++) {
    var d = data[i];
    var px = d[0];
    var css = d[1];
    $el.attr("data-" + px, "");
    $el.attr("data-" + px, css);
  }
};

var skr_r;
var fh, fh2;

fh = "150px";
fh2 = "265px";

function init() {
  setSkrollr($(".cp_big"), [
    [0, "-webkit-filter:blur(0px);"],
    [150, "-webkit-filter:blur(10px);"]
  ]);

  setSkrollr($(".capS"), [
    [0, "transform:translateY(" + fh + "); opacity:1"],
    [150, "transform:translateY(130px); opacity:0"]
  ]);
  setSkrollr($(".capP"), [
    [0, "transform:translateY(" + fh + "); opacity:1"],
    [150, "transform:translateY(200px); opacity:0"]
  ]);
  setSkrollr($(".capE"), [
    [0, "transform:translateY(" + fh + "); opacity:1"],
    [150, "transform:translateY(120px); opacity:0"]
  ]);
  setSkrollr($(".capC"), [
    [0, "transform:translateY(" + fh + "); opacity:1"],
    [150, "transform:translateY(190px); opacity:0"]
  ]);
  setSkrollr($(".capI"), [
    [0, "transform:translateY(" + fh + "); opacity:1"],
    [150, "transform:translateY(170px); opacity:0"]
  ]);
  setSkrollr($(".capA"), [
    [0, "transform:translateY(" + fh + "); opacity:1"],
    [150, "transform:translateY(200px); opacity:0"]
  ]);
  setSkrollr($(".capL"), [
    [0, "transform:translateY(" + fh + "); opacity:1"],
    [150, "transform:translateY(140px); opacity:0"]
  ]);
  setSkrollr($(".capL_2"), [
    [0, "transform:translateY(" + fh + "); opacity:1"],
    [150, "transform:translateY(220px); opacity:0"]
  ]);
  setSkrollr($(".capY"), [
    [0, "transform:translateY(" + fh + "); opacity:1"],
    [150, "transform:translateY(160px); opacity:0"]
  ]);

  setSkrollr($(".capC_2"), [
    [0, "transform:translateY(" + fh + "); opacity:1"],
    [150, "transform:translateY(120px); opacity:0"]
  ]);
  setSkrollr($(".capR"), [
    [0, "transform:translateY(" + fh + "); opacity:1"],
    [150, "transform:translateY(210px); opacity:0"]
  ]);
  setSkrollr($(".capA_2"), [
    [0, "transform:translateY(" + fh + "); opacity:1"],
    [150, "transform:translateY(140px); opacity:0"]
  ]);
  setSkrollr($(".capF"), [
    [0, "transform:translateY(" + fh + "); opacity:1"],
    [150, "transform:translateY(190px); opacity:0"]
  ]);
  setSkrollr($(".capT"), [
    [0, "transform:translateY(" + fh + "); opacity:1"],
    [150, "transform:translateY(100px); opacity:0"]
  ]);
  setSkrollr($(".capE_2"), [
    [0, "transform:translateY(" + fh + "); opacity:1"],
    [150, "transform:translateY(170px); opacity:0"]
  ]);
  setSkrollr($(".capD"), [
    [0, "transform:translateY(" + fh + "); opacity:1"],
    [150, "transform:translateY(120px); opacity:0"]
  ]);

  setSkrollr($(".capF_2"), [
    [0, "transform:translateY(" + fh + "); opacity:1"],
    [150, "transform:translateY(100px); opacity:0"]
  ]);
  setSkrollr($(".capO"), [
    [0, "transform:translateY(" + fh + "); opacity:1"],
    [150, "transform:translateY(210px); opacity:0"]
  ]);
  setSkrollr($(".capR_2"), [
    [0, "transform:translateY(" + fh + "); opacity:1"],
    [150, "transform:translateY(140px); opacity:0"]
  ]);

  setSkrollr($(".capY_2"), [
    [0, "transform:translateY(" + fh2 + "); opacity:1"],
    [150, "transform:translateY(330px); opacity:0"]
  ]);
  setSkrollr($(".capO_2"), [
    [0, "transform:translateY(" + fh2 + "); opacity:1"],
    [150, "transform:translateY(320px); opacity:0"]
  ]);
  setSkrollr($(".capU"), [
    [0, "transform:translateY(" + fh2 + "); opacity:1"],
    [150, "transform:translateY(350px); opacity:0"]
  ]);
  setSkrollr($(".capR_3"), [
    [0, "transform:translateY(" + fh2 + "); opacity:1"],
    [150, "transform:translateY(300px); opacity:0"]
  ]);

  setSkrollr($(".capP_2"), [
    [0, "transform:translateY(" + fh2 + "); opacity:1"],
    [150, "transform:translateY(350px); opacity:0"]
  ]);
  setSkrollr($(".capE_3"), [
    [0, "transform:translateY(" + fh2 + "); opacity:1"],
    [150, "transform:translateY(310px); opacity:0"]
  ]);
  setSkrollr($(".capR_4"), [
    [0, "transform:translateY(" + fh2 + "); opacity:1"],
    [150, "transform:translateY(380px); opacity:0"]
  ]);
  setSkrollr($(".capP_3"), [
    [0, "transform:translateY(" + fh2 + "); opacity:1"],
    [150, "transform:translateY(340px); opacity:0"]
  ]);
  setSkrollr($(".capE_4"), [
    [0, "transform:translateY(" + fh2 + "); opacity:1"],
    [150, "transform:translateY(330px); opacity:0"]
  ]);
  setSkrollr($(".capC_3"), [
    [0, "transform:translateY(" + fh2 + "); opacity:1"],
    [150, "transform:translateY(380px); opacity:0"]
  ]);
  setSkrollr($(".capT_2"), [
    [0, "transform:translateY(" + fh2 + "); opacity:1"],
    [150, "transform:translateY(320px); opacity:0"]
  ]);

  setSkrollr($(".capS_2"), [
    [0, "transform:translateY(" + fh2 + "); opacity:1"],
    [150, "transform:translateY(390px); opacity:0"]
  ]);
  setSkrollr($(".capL_3"), [
    [0, "transform:translateY(" + fh2 + "); opacity:1"],
    [150, "transform:translateY(290px); opacity:0"]
  ]);
  setSkrollr($(".capE_5"), [
    [0, "transform:translateY(" + fh2 + "); opacity:1"],
    [150, "transform:translateY(330px); opacity:0"]
  ]);
  setSkrollr($(".capE_6"), [
    [0, "transform:translateY(" + fh2 + "); opacity:1"],
    [150, "transform:translateY(350px); opacity:0"]
  ]);
  setSkrollr($(".capP_4"), [
    [0, "transform:translateY(" + fh2 + "); opacity:1"],
    [150, "transform:translateY(360px); opacity:0"]
  ]);

  for (var i = 1; i <= 35; i++) {
    $(".cap" + i).css("transition", Math.random() * 2.5 + 1 + "s");
  }
}
</script>



// WEBPACK FOOTER //
// src/pr3.vue