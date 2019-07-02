<template>
  <div
    class="menu-icon"
    :class="{'no-cursor': noCursor}"
    @mouseover="toggleHoverStrong(true)"
    @mouseleave="toggleHoverStrong(false)"
    @click="showMenu"
  >
    <img src="../assets/icons8-menu-filled.svg" alt />
  </div>
</template>

<script>
export default {
  props: {
    noCursor: {
      default: false
    }
  },
  // data: () => ({
  //   noCursor: false
  // }),
  methods: {
    toggleHoverStrong(x) {
      this.$store.commit("toggleHoverStrong", x);
    },
    showMenu() {
      this.$store.commit("openMenu");
    }
  }
};
</script>

<style lang="scss" scoped>
.menu-icon {
  position: absolute;
  top: 57px;
  right: 70px;
  transform: scale(0.8);
  transform-origin: right top;
  cursor: pointer;
}
.no-cursor {
  cursor: none;
}
.menu-icon img {
  width: 40px;
}
</style>
