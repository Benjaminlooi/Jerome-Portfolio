<template>
  <div>
    <div class="prs_tl prs_1 prs_11 row">
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
      <canvas id="banner" class="mobile_hidden"></canvas>
      <div class="pr_label">
        <div class="pr_num">
          project 01
          <span class="pr_bar"></span>
        </div>
        <div class="pr_title" v-on:click="site_link">
          SERIOUS STUDY
          <img src="/img/ic_link.svg" />
        </div>
      </div>
    </div>
    <div class="prs_tl prs_2 prs_12 row">
      <div class="pr_desc">
        the 'Serious Study' is an study group for graphics programing
        <br />inspired by the idea that coding by designers feels similar to DOS screen UI,
        <br />it is characterized by interaction through keyboard commands.
      </div>
      <div class="pr_spec">
        <ul>
          <li>
            <span class="spec_title">Date</span>
            <span class="spec_value">2017. 03</span>
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
            <span class="spec_value" v-on:click="site_link">eumray.com/serious</span>
          </li>
        </ul>
      </div>
      <div class="pr_shot">
        <ul>
          <li>
            <img src="/img/pr_11.png" />
          </li>
          <li>
            <img src="/img/pr_12.png" />
          </li>
          <li>
            <img src="/img/pr_13.png" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { serverBus } from "./main";
export default {
  name: "pr1",
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
    $(document).ready(function() {
      banner = new Banner();
      banner.initialize("banner");
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
    },
    site_link() {
      window.open("/serious");
    }
  }
};

var keyword = "D";
var banner;
var reload;
//window.addEventListener("keydown",keydownE,false);
var particle_num = 800;
var balls = [];

function Ball() {
  this.x = Math.random() * (window.innerWidth - 400) + 200;
  this.y = Math.random() * 400;
  this.speed = Math.random() / 4 + 0.03;
  this.color =
    "rgb(" +
    (Math.floor(Math.random() * 255) - 150) +
    "," +
    (Math.floor(Math.random() * 255) - 20) +
    ",250)";
  this.scaleX = Math.random() * 7 + 2;
  this.scaleY = Math.random() * 10 + 2;
}

function Particle() {
  this.x;
  this.y;
}

function Banner() {
  // The words to be written on the banner

  // Other variables used
  var canvas,
    context,
    bgCanvas,
    bgContext,
    density = 11,
    particles = [],
    mouse = { x: 0, y: 0, o: false },
    isDrawing = false,
    canvasW,
    canvasH;

  // Initialize
  this.initialize = function(canvas_id) {
    //reload( canvas_id );
    canvas = document.getElementById(canvas_id);
    if (!window.HTMLCanvasElement) return false;
    context = canvas.getContext("2d");
    bgCanvas = document.createElement("canvas");
    bgContext = bgCanvas.getContext("2d");

    balls = [];
    for (var i = 0; i < particle_num; i++) {
      balls.push(new Ball());
    }
    reload(canvas_id);
    window.onresize = function(event) {
      reload(canvas_id);
    };

    setInterval(draw, 50);
  };

  // Initialize the canvas, context and size. Call to prepare, setupParticles and draw functions
  reload = function(canvas_id) {
    // Main canvas

    canvasW = window.innerWidth;
    canvasH = window.innerHeight;

    canvas.width = canvasW;
    canvas.height = canvasH;

    bgCanvas.width = window.innerWidth;
    bgCanvas.height = canvasH;

    //<canvas class=></canvas>addEventListener('mousemove', MouseMove, false);
    //canvas.addEventListener('mouseout', MouseOut, false);

    // Call to action
    prepare();
    setupParticles();
  };

  var prepare = function() {
    // Font and Size
    bgContext.font = (window.innerWidth * 3) / 8 + "px 'Arial'";

    // Keyword onto background canvas
    bgContext.fillText(
      keyword,
      canvasW / 2 - Math.round(bgContext.measureText(keyword).width / 2),
      canvasH / 2 + window.innerWidth / 8
    );
  };

  // Create the particles and store in array
  var setupParticles = function() {
    particles = [];

    // Local variables
    var imageData, image_Data, pixel;

    // Get the image data - from (0,0) to the edges of the canvas
    imageData = bgContext.getImageData(0, 0, canvasW, canvasH);
    image_Data = imageData.data;

    // Iterate horizontally over the image data
    for (var width = 0; width < canvasW; width += density) {
      // Iterate vertically over image data
      for (var height = 0; height < canvasH; height += density) {
        // Get the pixel located at our current iteration
        pixel = image_Data[(width + height * canvasW) * 4 - 1];
        //Pixel has been drawn on
        if (pixel == 255) {
          particles.push({
            x: width,
            y: height
          });
        }
      }
    }
  };

  //Drawing the banner
  var draw = function() {
    context.clearRect(0, 0, canvasW, canvasH);

    for (var i = 0, len = particle_num; i < len; ++i) {
      var p = balls[i];
      if (particles.length != 0) {
        var p_target = particles[i % particles.length];

        //if(i=1) console.log(p_target.x-particles[i%particles.length].x);
        p_target.x += Math.random() * 1.4 - 0.7;
        p_target.y += Math.random() * 1.4 - 0.7;

        // console.log("h");
        //if(Math.abs(tempst.y-p_target.y)>3) p_target.y=tempst.y;
        //p.x=particles[i%particles.length]+Math.random()*4-2

        p.x += (p_target.x - p.x) * p.speed;
        p.y += (p_target.y - p.y) * p.speed;

        context.fillStyle = p.color;
        // Shape to draw at each point
        context.beginPath();
        context.fillRect(p.x, p.y, p.scaleX, p.scaleY);
        context.closePath();
        context.fill();
      }
    }
  };
}
</script>



// WEBPACK FOOTER //
// src/pr1.vue