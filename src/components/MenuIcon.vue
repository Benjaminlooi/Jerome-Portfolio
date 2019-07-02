<template>
  <div
    class="menu-icon"
    @mouseover="toggleHoverStrong(true)"
    @mouseleave="toggleHoverStrong(false)"
    @click="showMenu"
  >
    <img src="../assets/icons8-menu-filled.svg" alt />
  </div>
</template>

<script>
export default {
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
}
.menu-icon img {
  width: 40px;
}
</style>
