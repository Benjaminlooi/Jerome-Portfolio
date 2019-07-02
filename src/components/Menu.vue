<template>
  <transition
    name="menu-transition"
    @after-enter="showMenuLinks = true"
    @after-leave="showMenuLinks = false"
  >
    <div class="menu" v-if="menuIsShow">
      <div class="menu-box">
        <div
          class="menu-icon"
          :class="menu_icon_hover_effect"
          @mouseenter="mouse.menu_icon_hover = true"
          @mouseleave="mouse.menu_icon_hover = false"
          @click="closeMenu"
        >
          <img src="../assets/close.svg" alt />
        </div>
        <div class="menu-container">
          <ul v-if="showMenuLinks" class="menu-links" @click="closeMenu">
            <li v-for="link in links" :key="link.name">
              <router-link :to="link.path">
                <span>{{link.name}}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    mouse: {
      menu_icon_hover: false
    },
    showMenuLinks: false,
    links: [
      {
        path: "/",
        name: "HOME"
      },
      {
        path: "photos",
        name: "PHOTO ALBUM"
      }
    ]
  }),
  computed: {
    menu_icon_hover_effect() {
      return {
        hover: this.mouse.menu_icon_hover
      };
    },
    menuIsShow: function() {
      return this.$store.state.menuIsShow;
    }
  },
  methods: {
    closeMenu() {
      this.$store.commit("closeMenu");
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  position: absolute;
  background-color: #262626;
  z-index: 990;
  height: 100vh;
  color: #fff;
}
.menu-box {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.menu-icon {
  position: absolute;
  top: 57px;
  right: 70px;
  transition: transform 0.5s ease-out;
}
.menu-icon.hover {
  transform: rotate(-7deg);
}
.menu-icon img {
  width: 40px;
}
ul.menu-links {
  margin: auto;
  list-style: none;
  font-size: 4em;
  font-weight: 700;
  line-height: 0.95em;

  span {
    display: inline-block;
    transition: transform 0.6s ease-out;
    transform-origin: center left;
  }

  span:hover {
    transform: scale(1.1);
  }

  li {
    animation: fade-slide 1s ease-out both;
  }
}
@for $i from 1 through 2 {
  ul.menu-links li:nth-child(#{$i}n) {
    animation-delay: #{($i - 0.8) * 0.5}s;
  }
}
@keyframes fade-slide {
  from {
    transform: translateY(10px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.menu-container {
  // max-width: 1200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.menu-container h1 {
  font-size: 4em;
  margin: unset;
}

.menu-links-transition-enter-active,
.menu-links-transition-leave-active {
  color: red;
}
.menu-links-transition-leave {
  color: blue;
}
.menu-links-transition-enter-to,
.menu-links-transition-leave-to {
  color: green;
}
</style>

