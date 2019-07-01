<template>
  <div>
    <div class="loading_section">
      <div class="loading_back"></div>
      <div class="loading_back2"></div>
      <div class="loading_bar">
        <span class="loading_text">LOADING</span>
      </div>
    </div>
    <div class="intro_tl intro1 row" v-show="!loading">
      <span id="mouse_deco"></span>
      <div class="main_copy">
        <span class="mch1">I</span>
        <span class="mch2">a</span>
        <span class="mch3">m</span>
        <span class="mch6">A</span>
        <br />
        <span class="mch4">U</span>
        <span class="mch7">X</span>
        <span class="mch6">U</span>
        <span class="mch7">I</span>
        <span class="mch8">D</span>
        <span class="mch9">E</span>
        <span class="mch10">S</span>
        <span class="mch1">I</span>
        <span class="mch2">G</span>
        <span class="mch3">N</span>
        <span class="mch4">E</span>
        <span class="mch5">R</span>
        <br />
        <span class="mch6">w</span>
        <span class="mch7">i</span>
        <span class="mch8">t</span>
        <span class="mch9">h</span>
        <br />
        <span class="mch8">w</span>
        <span class="mch1">e</span>
        <span class="mch2">b</span>
        <span class="mch3">d</span>
        <span class="mch4">e</span>
        <span class="mch5">v</span>
        <span class="mch6">e</span>
        <span class="mch7">l</span>
        <span class="mch8">o</span>
        <span class="mch9">p</span>
        <span class="mch10">m</span>
        <span class="mch1">e</span>
        <span class="mch2">n</span>
        <span class="mch3">t</span>
        <br />
        <span class="mch4">S</span>
        <span class="mch5">K</span>
        <span class="mch6">I</span>
        <span class="mch8">L</span>
        <span class="mch9">L</span>
        <span class="mch2">S</span>
      </div>
      <div class="intro_side_deco">UXUI DESIGN</div>
      <div class="intro_side_deco2">WEB DEVELOPMENT</div>
      <div class="intro_scroll_down_bt">
        <svg
          width="40px"
          height="100%"
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"
        >
          <path
            id="wheel"
            d="M123.359,89.775l0,52.843"
            style="fill:none;stroke:#ccc;stroke-width:25px;"
          />
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style="fill:none;stroke:#ccc;stroke-width:25px;"
          />
        </svg>
        please scroll down
      </div>
      <div class="sns_section">
        <ul>
          <li>
            <a href="https://www.instagram.com/eum_ray/" target="_blank">
              <img width="22" height="23" src="/img/instagram.svg" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/um3156" target="_blank">
              <img width="13" height="23" src="/img/facebook-logo.svg" />
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/ummoning" target="_blank">
              <img width="23" height="15" src="/img/behance-logo.svg" />
            </a>
          </li>
        </ul>
      </div>
      <div class="copy_right">Copyright(c) 2019 eumRay. All rights reserved</div>
      <!--<div class="drop_down_icon"> <img src="/img/ic_drop_down.svg"></div>-->
      <div class="intro_video">
        <video id="intro_video" autoplay preload="auto" loop muted>
          <source src="/intro.mp4" type="video/mp4" />
        </video>
      </div>
    </div>

    <div class="intro_tl intro2 row" v-if="!loading">
      <span
        class="menu_icon w_menu"
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
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </span>
      <div class="intro2_title">
        <img src="/img/intro2_title.png" width="45%" />
      </div>
      <div class="intro2_row first">
        <div class="section_title">Introduction</div>
        <div class="section_desc">
          i'm a UXUI designer with front-end development skills.
          <br />I like to study various fields. ex)UXUI, graphic design, javascript, vue.js, css, php, etc..
          <br />knowledge of various fields makes synergy for creative idea.
          <br />that's my strength, especially in interaction and visual motion effect.
        </div>
      </div>
      <div class="intro2_row">
        <div class="project_sum">
          SERIOUS STUDY
          <br />2016. 01. 23
        </div>

        <div class="section_img simg_1 js-tilt">
          <a href="/pr1" target="_self">
            <img src="/img/pr_11.png" />
          </a>
        </div>
      </div>
      <div class="intro2_row">
        <div class="project_sum">
          WeWANNAParty
          <br />2016. 12. 22
        </div>
        <div class="section_img simg_2 js-tilt">
          <a href="/pr2" target="_self">
            <img src="/img/pr_21.png" />
          </a>
        </div>
      </div>
      <div class="intro2_row">
        <div class="project_sum">
          ROUGE MAISON
          <br />2017. 04. 28
        </div>
        <div class="section_img simg_3 js-tilt">
          <a href="/pr3" target="_self">
            <img src="/img/pr_31.png" />
          </a>
        </div>
      </div>
      <div class="intro2_row">
        <div class="project_sum">
          beginmate
          <br />2018. 02. 28~
        </div>
        <div class="section_img simg_4 js-tilt">
          <a href="/pr4" target="_self">
            <img src="/img/pr_41.jpg" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { serverBus } from "./main";
import router from "./router.vue";
export default {
  name: "intro",
  data() {
    return {
      loading: 1,
      global_menu_view: 0
    };
  },
  mounted() {
    var self = this;
    var video = document.getElementById("intro_video");
    var percent = 0;

    function updateProgressBar() {
      if (
        video &&
        video.buffered &&
        video.buffered.length > 0 &&
        video.buffered.end &&
        video.duration
      ) {
        percent = video.buffered.end(0) / video.duration;
      } else if (
        video &&
        video.bytesTotal != undefined &&
        video.bytesTotal > 0 &&
        video.bufferedBytes != undefined
      ) {
        percent = video.bufferedBytes / video.bytesTotal;
      }
      if (percent !== null) {
        percent = 100 * Math.min(1, Math.max(0, percent));
      }
      percent *= 1.1;
      $(".loading_bar").css("width", percent + "%");
      if (percent >= 100) {
        clearInterval(loading_interval);
        self.loading = 0;
        video.play();
        TweenLite.to($(".loading_back"), 0.5, { left: "105%" });
        TweenLite.to($(".loading_back2"), 0.8, { left: "105%" });
        $(".loading_bar").hide();
        self.init();
        setTimeout(function() {
          $(".loading_section").hide();
        }, 500);
      }
    }

    var loading_interval;
    if (window.innerWidth > 900) {
      loading_interval = setInterval(function() {
        updateProgressBar();
      }, 100);
      setTimeout(function() {
        if (percent < 100) location.reload();
      }, 20000);
    } else {
      self.loading = 0;
      $(".loading_section").hide();
      self.init();
    }

    serverBus.$on("server_menu_view", server => {
      this.global_menu_view = server;
    });
  },
  methods: {
    init: function() {
      video = $(".intro_video video");
      video_tl = $(".intro_video");
      intro1_tl = $(".intro1");
      var ratio = window.innerWidth / window.innerHeight;
      if (ratio > 1.8) {
        video.prop("width", window.innerWidth);
      } else {
        video.prop("height", window.innerHeight + 100);
      }
      intro1_tl.css("height", window.innerHeight);

      var m_target_x = 500;
      var m_target_y = 500;

      var mouse_d = document.getElementById("mouse_deco");

      if (mouse_d) {
        $(".start_menu").hover(function() {
          $(this).css("cursor", "none");
        });
        mouse_d.style.left = m_target_x + "px";
        mouse_d.style.top = m_target_y + "px";
        $(document).mousemove(function(e) {
          m_target_x = e.pageX - 13;
          m_target_y = e.pageY - 13;
          TweenLite.to(mouse_d, 0.1, { left: m_target_x, top: m_target_y });
        });
        $(".intro1 .sns_section ul li").hover(
          function() {
            if (document.getElementById("mouse_deco")) {
              TweenLite.to(document.getElementById("mouse_deco"), 0.3, {
                width: 50,
                height: 50,
                x: -18,
                y: -18
              });
              $("#mouse_deco").addClass("active");
            }
          },
          function() {
            TweenLite.to(document.getElementById("mouse_deco"), 0.3, {
              width: 26,
              height: 26,
              x: 0,
              y: 0
            });
            $("#mouse_deco").removeClass("active");
          }
        );
      }
      $(document).ready(function() {
        if (window.innerWidth > 900) {
          TweenLite.fromTo(
            $(".intro_scroll_down_bt"),
            1,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0 }
          ).delay(2);
          var tilt = $(".js-tilt").tilt({
            maxTilt: 6
          });
        } else {
          $(".intro_scroll_down_bt").css("opacity", 1);
          $(".intro_video").css("height", window.innerHeight);
        }
      });

      window.addEventListener("resize", setintro_size, false);
    },
    menu_over() {
      this.$parent.menu_over();
    },
    menu_leave() {
      this.$parent.menu_leave();
    },
    menu_click() {
      this.$parent.menu_click();
    }
  }
};

var video;
var video_tl;
var intro1_tl;
var setintro_size = function() {
  if (window.innerWidth > 500) {
    var ratio = window.innerWidth / window.innerHeight;
    if (ratio > 1.8) {
      video.prop("width", window.innerWidth);
    } else {
      video.prop("height", window.innerHeight + 100);
    }
    intro1_tl.css("height", window.innerHeight);
  }
};

function ani_insect(el) {
  if ($(document).scrollTop() + 800 > el.offset().top) {
    el.addClass("active");
  } else {
    el.removeClass("active");
  }
}

$(document).scroll(function() {
  var t_path = router.history.current.path;
  if (t_path == "/") {
    ani_insect($(".simg_1"));
    ani_insect($(".simg_2"));
    ani_insect($(".simg_3"));
    ani_insect($(".simg_4"));
  } else if (
    t_path == "/pr1" ||
    t_path == "/pr2" ||
    t_path == "/pr3" ||
    t_path == "/pr4"
  ) {
    ani_insect($(".pr_shot ul li"));
  }

  // if($(document).scrollTop()<=$(".intro1").offset().top){
  // document.getElementsByClassName('intro1')[0].style.cursor = 'none';
  // }
});
</script>



// WEBPACK FOOTER //
// src/Intro.vue