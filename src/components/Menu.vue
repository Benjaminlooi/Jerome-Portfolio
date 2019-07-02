<template>
  <div class="menu">
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
        <ul class="menu-links">
          <li>
            <router-link to="/">
              <span>HOME</span>
            </router-link>
          </li>
          <li>
            <router-link to="/photos">
              <span>PHOTO ALBUM</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    mouse: {
      menu_icon_hover: false
    }
  }),
  computed: {
    menu_icon_hover_effect() {
      return {
        hover: this.mouse.menu_icon_hover
      };
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

  span{
    display: inline-block;
    transition: transform 0.6s ease-out;
  }

  span:hover{
    transform: scale(1.1);
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
</style>

