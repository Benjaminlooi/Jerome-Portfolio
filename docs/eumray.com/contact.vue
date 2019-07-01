<template>
  <div>
    <div class="prs_tl prs_side_deco">
      <div class="side_deco">CONTACT</div>
      <div class="side_deco2 side_deco">UXUI DESIGN</div>
      <div class="side_deco3 side_deco">WEB DEVELOPMENT</div>
    </div>
    <div class="prs_tl prs_c row">
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
                </g>s
              </g>
            </g>
          </g>
        </svg>
      </span>

      <div class="contact_tl">
        <div class="section_title">Contact me whenever!</div>
        <div class="section_desc">
          I always welcome the new project. If you have any questions or suggestions,
          please contact me by e-mail whenever.
          <br />I'll give you an answer as soon as I have time.
        </div>

        <div class="sns_section">
          <ul>
            <li>
              <a href="https://www.instagram.com/eum_ray/" target="_blank">
                <img width="21" height="21" src="/img/instagram_w.svg" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/um3156" target="_blank">
                <img width="12" height="22" src="/img/facebook-logo_w.svg" />
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/ummoning" target="_blank">
                <img width="26" height="17" src="/img/behance-logo_w.svg" />
              </a>
            </li>
          </ul>
        </div>
        <div class="my_profile">
          <ul>
            <li>Ray Eum</li>
            <li>Seoul, South Korea</li>
            <li>1989. 06. 02</li>
            <li>um3156@naver.com</li>
          </ul>
        </div>
        <div class="contact_form">
          <input type="text" placeholder="Your Email Address" v-model="email.from" />
          <textarea
            id="message_text"
            placeholder="Your Message"
            v-on:keydown="auto_size"
            v-model="email.contents"
          ></textarea>
          <span class="submit_bt" v-on:click="submit_email">Send Email</span>
        </div>
      </div>
      <div class="contact_image">
        <img src="/img/contact_img.png" />
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
      global_menu_view: 0,
      email: {
        from: "",
        contents: ""
      }
    };
  },
  mounted() {
    serverBus.$on("server_menu_view", server => {
      this.global_menu_view = server;
    });
    $(".global_menu.start_menu").hide();
    this.$parent.menu_switch();
    $(".intro_myself ul li").each(function(index) {
      //$(this).css("display","none");
      $(this).css("animation-delay", index * 1 + "s");
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
    submit_email() {
      var email = this.email.from;
      var contents = this.email.contents;
      var dataString = "email=" + email + "&contents=" + contents;

      $.ajax({
        type: "POST",
        url: "/contact_process.php",
        data: dataString,
        success: function() {
          alert("Your email has been sent successfully.");
        }
      });
    },
    auto_size() {
      var el = document.getElementById("message_text");
      setTimeout(function() {
        el.style.cssText = "height:auto; padding:0";
        // for box-sizing other than "content-box" use:
        // el.style.cssText = '-moz-box-sizing:content-box';
        el.style.cssText = "height:" + el.scrollHeight + "px";
      }, 0);
    }
  }
};
</script>



// WEBPACK FOOTER //
// src/contact.vue