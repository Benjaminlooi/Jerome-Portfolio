<template>
  <div class="menu">
    <div class="menu-box">
      <div class="menu-icon" :class="menu_icon_hover_effect" @mouseenter="mouse.menu_icon_hover = true" @mouseleave="mouse.menu_icon_hover = false" @click="closeMenu">
        <img src="../assets/close.svg" alt />
      </div>
      <h1>test</h1>
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
      }
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
.menu-icon.hover{
  transform: rotate(-7deg);
}
.menu-icon img {
  width: 40px;
}
</style>

