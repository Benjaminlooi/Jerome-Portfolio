<template>
  <transition name="intro-first">
    <div class="home" v-if="show" @mousemove="updateMousePosition">
      <div>
        <IntroFirst></IntroFirst>
      </div>
    </div>
  </transition>
</template>

<script>
import IntroFirst from "@/components/IntroFirst";

export default {
  name: "home",
  components: {
    IntroFirst
  },
  data: () => ({
    show: true
  }),
  computed: {},
  watch: {},
  created() {
    Event.$on("introShow", () => {
      this.show = false;
      setTimeout(() => {
        this.show = true;
      }, 50);
    });
  },
  methods: {
    updateMousePosition(e) {
      this.$store.commit("updateMousePosition", { x: e.x, y: e.y });
    }
  }
};
</script>

<style lang="scss" scoped>
.intro-first-enter-active {
  transition: transform 1.7s ease-out;
}
.intro-first-enter {
  transform: scale(1.03);
}
.intro-first-enter-to {
  transform: scale(1);
}
</style>
