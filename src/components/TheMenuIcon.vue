<template>
  <div
    class="menu-icon"
    :class="{ 'no-cursor': noCursor }"
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
      default: false,
    },
  },
  // data: () => ({
  // }),
  methods: {
    toggleHoverStrong(x) {
      this.$store.commit("toggleHoverStrong", x);
    },
    showMenu() {
      this.$store.commit("openMenu");
    },
  },
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
  z-index: 99;
}
.no-cursor {
  cursor: none;
}
.menu-icon img {
  width: 40px;
}
@media only screen and (max-width: 600px) {
  .menu-icon {
    top: 20px;
    right: 25px;
  }
}
</style>
