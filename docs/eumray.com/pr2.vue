<template>
  <div>
    <div class="prs_tl prs_1 prs_21 row">
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
      <canvas id="myCanvas" width="500" height="1000"></canvas>
      <div class="pr_label">
        <div class="pr_num">
          project 02
          <span class="pr_bar"></span>
        </div>
        <div class="pr_title" v-on:click="site_link">
          WeWANNAParty
          <img src="/img/ic_link.svg" />
        </div>
      </div>
    </div>
    <div class="prs_tl prs_2 row">
      <div class="pr_desc">
        This website was created with the concept of
        <br />"Let's collect and show information about the numerous domestic music festivals held every year."
        <br />Motion graphics responded to the background music,
        <br />and the turnstables were implemented on the web to add a fun element.
      </div>
      <div class="pr_spec">
        <ul>
          <li>
            <span class="spec_title">Date</span>
            <span class="spec_value">2017. 01</span>
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
            <span class="spec_value" v-on:click="site_link">eumray.com/wwp</span>
          </li>
        </ul>
      </div>
      <div class="pr_shot">
        <ul>
          <li>
            <img src="/img/pr_21.png" />
          </li>
          <li>
            <img src="/img/pr_22.png" />
          </li>
          <li>
            <img src="/img/pr_23.png" />
          </li>
          <li class="mobile_shot">
            <ul>
              <li>
                <img src="/img/pr2_m1.png" />
              </li>
              <li>
                <img src="/img/pr2_m2.png" />
              </li>
              <li>
                <img src="/img/pr2_m3.png" />
              </li>
              <li>
                <img src="/img/pr2_m4.png" />
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
  name: "pr2",
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

    init();
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
    },
    site_link() {
      window.open("/wwp");
    }
  }
};

var PARTICLE_NUM;
var path, path2;
var frame;
function init() {
  $("#myCanvas").css("width", window.innerWidth);
  $("#myCanvas").css("height", window.innerHeight);
  PARTICLE_NUM = Math.floor(window.innerWidth / 20);
  var canvas = document.getElementById("myCanvas");
  // Create an empty project and a view for the canvas:
  paper.setup(canvas);
  // Create a Paper.js Path to draw a line into it:
  path = new paper.Path({
    strokeColor: "white"
  });
  path2 = new paper.Path({
    strokeColor: "white"
  });

  for (var i = 0; i <= PARTICLE_NUM; i++) {
    //noinspection JSUnresolvedFunction
    path.add(
      new paper.Point(
        (window.innerWidth / PARTICLE_NUM) * i,
        window.innerHeight / 2
      )
    );
    path2.add(
      new paper.Point(
        (window.innerWidth / PARTICLE_NUM) * i,
        window.innerHeight / 2
      )
    );
  }
  // path.closed = true;
  path.smooth();
  path.strokeWidth = 2;
  path2.smooth();
  path2.strokeWidth = 2;
  PARTICLE_NUM = Math.floor(window.innerWidth / 20);
  clearInterval(frame);
  frame = setInterval(function() {
    draw();
  }, 70);

  window.onresize = function(event) {
    //location.reload();
    init();
  };
}
function draw() {
  //path.strokeColor = 'white';
  //console.log(path.segments[0].point._y);
  for (var i = 0; i < path.segments.length; i++) {
    //var targetP = new paper.Point((window.innerWidth/PARTICLE_NUM)*i,window.innerHeight/2);
    //path.segments[i].point
    path.segments[i].point = new paper.Point(
      (window.innerWidth / PARTICLE_NUM) * i,
      window.innerHeight / 2 - 25 + Math.random(1) * 50
    );
    path2.segments[i].point = new paper.Point(
      (window.innerWidth / PARTICLE_NUM) * i,
      window.innerHeight / 2 - 30 + Math.random(1) * 60
    );
  }
  paper.view.draw();
}
</script>



// WEBPACK FOOTER //
// src/pr2.vue