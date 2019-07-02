<template>
  <div class="home" @mousemove="updateMousePosition">
    <transition name="slide-up" v-on:before-leave="beforeLeave">
      <Loading v-if="!isLoad"></Loading>
    </transition>
    <div>
      <transition name="intro-first">
        <IntroFirst v-if="show"></IntroFirst>
      </transition>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading";
import IntroFirst from "@/components/IntroFirst";

export default {
  name: "home",
  components: {
    Loading,
    IntroFirst
  },
  data: () => ({
    show: true
  }),
  computed: {
    isLoad: function() {
      return this.$store.state.isLoad;
    },
  },
  watch: {},
  created() {
    // console.log(this.menuIsShow)
  },
  methods: {
    updateMousePosition(e) {
      this.$store.commit("updateMousePosition", { x: e.x, y: e.y });
    },
    slide() {
      this.$store.commit("updateIsLoad");
    },
    beforeLeave() {
      // console.log("running before leave");
      this.show = false;
      setTimeout(() => {
        this.show = true;
      }, 50);
    }
  }
};
</script>

<style lang="scss" scoped>
.slide-up-leave-active {
  transition: bottom 0.4s ease-in;
}
.slide-up-leave {
  bottom: 0;
}
.slide-up-leave-to {
  bottom: 100vh;
}
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
