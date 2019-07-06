<template>
  <transition name="intro-first">
    <div class="home" v-if="show" @mousemove="updateMousePosition">
      <div>
        <IntroFirst></IntroFirst>
        <IntroSecond/>
      </div>
    </div>
  </transition>
</template>

<script>
import IntroFirst from "@/components/HomeIntroFirst";
import IntroSecond from "@/components/HomeIntroSecond";

export default {
  name: "home",
  components: {
    IntroFirst,
    IntroSecond
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
      this.$store.commit("updateMousePosition", { x: e.pageX, y: e.pageY });
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
